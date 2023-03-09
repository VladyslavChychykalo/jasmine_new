import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Подарунковий сертифікат',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'descriptionArr',
      title: 'Підзаголовок',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Співробітник',
          fields: [
            {type: 'string', name: 'descriptionItem', title: 'Опис'},
            {
              name: 'fontWeight',
              title: 'Насиченість шрифту',
              type: 'string',
              initialValue: 'normal',
              options: {
                list: [
                  {title: 'normal', value: 'normal'},
                  {title: 'bold', value: 'bold'},
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'certificatesArr',
      title: 'Фото сертифікатів',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
