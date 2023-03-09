import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Головна',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'pretitle',
      title: 'Передзаголовок',
      type: 'string',
    }),
    defineField({
      name: 'servicesArr',
      title: 'Підзаголовок',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
