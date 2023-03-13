import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'Про нас',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'imageAbout',
      title: 'Зображення',
      type: 'image',
    }),
  ],
})
