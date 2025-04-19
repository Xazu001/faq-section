import { defineField, defineType } from "sanity";
import { toPlainText } from "../../utils/to-plain-text";

export default defineType({
    name: "faqItem",
    type: "object",
    title: "FAQ Item",
    fields: [
        defineField({
            name: "question",
            type: "Heading",
            title: "Pytanie",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "answer",
            type: "PortableText",
            title: "Odpowiedź",
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "question",
            subtitle: "answer",
        },
        prepare: ({ title, subtitle }) => ({
            title: toPlainText(title),
            subtitle: toPlainText(subtitle),
        }),
    },
});