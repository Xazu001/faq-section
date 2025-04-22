import { defineField, defineType } from "sanity";

const title = "FAQ";
const icon = () => "❓";

export default defineType({
  name: "Faq_Collection",
  type: "document",
  title,
  icon,
  fields: [
    defineField({
      name: "showItems",
      type: "number",
      title: "Początkowa liczba wyświetlanych pytań",
      description: "Liczba pytań, które będą widoczne po wczytaniu strony",
      initialValue: 5,
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: "loadMoreItems",
      type: "number",
      title: "Liczba pytań do wczytania",
      description: "Liczba pytań, które będą widoczne po kliknięciu wyświetl więcej",
      initialValue: 2,
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: "faqs",
      type: "array",
      title: "FAQs",
      of: [{ type: "faqItem" }],
      description: "Przeciągnij, aby zmienić kolejność pytań.",
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "faqs",
    },
    prepare: ({ title }) => ({
      title: `Kolekcja FAQ (${title?.length || 0} pytań)`,
      icon,
    }),
  },
});