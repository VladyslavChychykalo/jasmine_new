import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Галерея',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'postitle',
      title: 'Підзаголовок',
      type: 'string',
    }),
    defineField({
      title: 'Instagram URL',
      name: 'instagramUrl',
      type: 'url',
    }),
    defineField({
      name: 'galleryArr',
      title: 'Галерея',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
