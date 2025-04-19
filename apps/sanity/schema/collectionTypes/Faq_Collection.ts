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