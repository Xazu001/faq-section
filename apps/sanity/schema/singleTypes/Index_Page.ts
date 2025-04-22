import { defineField, defineType } from "sanity"

const name = 'Index_Page';
const title = 'Homepage';

export default defineType({
  name: name,
  type: 'document',
  title: title,
  icon: () => '🏠',
  options: { documentPreview: true },
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    prepare: () => ({
      title: title,
    })
  }
});
