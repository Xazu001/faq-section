
import type { Props } from "@/src/layouts/Head.astro";
import sanityFetch from "@/utils/sanity.fetch";
export default async function metadataFetch(type: string, slug?: string): Promise<Props> {
  const filter = slug
    ? `*[_type == '${type}' && slug.current == $slug][0]`
    : `*[_type == "${type}"][0]`;

  const seo = await sanityFetch({
    query: /* groq */ `
      ${filter} {
        "path": coalesce(slug.current, '/'),
        "title": seo.title,
        "description": seo.description,
        "openGraphImage": {
          "url": seo.img.asset -> url + "?w=1200",
          "height": round(1200 / seo.img.asset -> metadata.dimensions.aspectRatio),
        },
      }
    `,
    ...(slug && { params: { slug: slug } }),
  }) as Props;
  
  // Handle Index_Page specially - it should always have a path of '/'
  if (type === 'Index_Page' && !seo?.path) {
    seo.path = '/';
  }
  
  if (!seo?.path) throw new Error(`The path for '${type}' is not specified`);
  if (!seo?.title) throw new Error(`The title for '${type}' is not specified`);
  if (!seo?.description) throw new Error(`The description for '${type}' is not specified`);
  return seo;
}
