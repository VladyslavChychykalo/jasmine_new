import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Контакти',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'addressArray',
      title: 'Список адрес',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'address',
        },
      ],
    }),
    defineField({
      name: 'contactsArray',
      title: 'Список контактів',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactsArrayItem',
          title: 'Інформація про контакт',
          fields: [
            {type: 'string', name: 'contactName', title: 'Контакт'},
            {type: 'string', name: 'contactLink', title: 'Посилання на контакт'},
          ],
        },
      ],
    }),
    defineField({
      name: 'workTimeArray',
      title: 'Список часу роботи',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'workTime',
        },
      ],
    }),
    defineField({
      name: 'socialMediaArray',
      title: 'Список соціальних мереж',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLinkItem',
          title: 'Співробітник',
          fields: [
            {title: 'Посилання на соціальну мережу', name: 'socilaLinkUrl', type: 'string'},
            {
              name: 'socialLinkName',
              title: 'Назва соціальної мережі',
              type: 'string',
              initialValue: 'Instagram',
              options: {
                list: [
                  {title: 'Instagram', value: 'Instagram'},
                  {title: 'Telegram', value: 'Telegram'},
                  {title: 'Viber', value: 'Viber'},
                  {title: 'Facebook', value: 'Facebook'},
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
})
