import { createClient, type QueryParams } from '@sanity/client'
import { isPreviewDeployment } from './is-preview-deployment';
import type { AllSanitySchemaTypes } from 'sanity.types';

const SANITY_API_TOKEN = import.meta.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN;

if (isPreviewDeployment && !SANITY_API_TOKEN) {
  console.warn('\x1b[33m%s\x1b[0m', "The `SANITY_API_TOKEN` environment variable is required.");
}

export const client = createClient({
  projectId: 'vp4m23g3',
  dataset: 'production',
  apiVersion: '2024-10-15',
  useCdn: false,
  perspective: isPreviewDeployment ? 'previewDrafts' : 'published',
  ...(isPreviewDeployment && { token: SANITY_API_TOKEN }),
})

// Ekstrakcja typu dokumentu z unii typów
type ExtractDocType<T> = T extends { _type: infer DocType } ? DocType : never;

// Pobierz wszystkie możliwe wartości _type z AllSanitySchemaTypes
type AllDocTypes = ExtractDocType<AllSanitySchemaTypes>;

// Automatyczne mapowanie typów
type DocTypeToInterface<T extends string = AllDocTypes> = {
  [K in T]: Extract<AllSanitySchemaTypes, { _type: K }>
};

// Możesz łatwo rozszerzyć lub zawęzić listę typów dokumentów według potrzeb
type CustomDocTypes = AllDocTypes; // Używamy wszystkich typów
// type CustomDocTypes = 'Faq_Collection' | 'Index_Page'; // Lub tylko wybranych typów

type SanityDocumentTypeNames = keyof DocTypeToInterface<CustomDocTypes>;

// Extract the schema type name from a GROQ query
type ExtractTypeName<Q extends string> =
  Q extends `*[_type == ${infer T} && ${string}]${string}` ? T extends `"${infer Name}"` ? Name : never :
  Q extends `*[_type == ${infer T}]${string}` ? T extends `"${infer Name}"` ? Name : never :
  never;

// Determine if query is for a single document (ends with [0]) or an array
type IsSingleDocument<Q extends string> =
  Q extends `${string}[0]` ? true : false;

// Infer the return type based on the GROQ query pattern
type TypeFromQuery<Q extends string> = 
  ExtractTypeName<Q> extends SanityDocumentTypeNames ?
    IsSingleDocument<Q> extends true ?
      DocTypeToInterface<CustomDocTypes>[ExtractTypeName<Q>] : // Single document
      DocTypeToInterface<CustomDocTypes>[ExtractTypeName<Q>][] : // Array of documents
  unknown; // Fallback for unknown patterns

/**
 * Fetch data from Sanity with type inference based on the GROQ query pattern
 * @param options.query GROQ query string
 * @param options.params Query parameters
 * @returns Typed response based on the query pattern
 */
export default async function sanityFetch<Q extends string, T = TypeFromQuery<Q>>({
  query,
  params = {},
}: {
  query: Q;
  params?: QueryParams;
}): Promise<T> {
  return await client.fetch<T>(query, params);
}
