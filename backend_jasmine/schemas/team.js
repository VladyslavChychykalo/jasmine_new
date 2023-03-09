import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Команда',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Профессия',
      type: 'string',
    }),
    defineField({
      name: 'teamArray',
      title: 'Сотрудники',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Співробітник',
          fields: [
            {type: 'string', name: 'title', title: 'Імʼя'},
            {type: 'string', name: 'profession', title: 'Професія'},
            {type: 'number', name: 'experience', title: 'Досвід (років)'},
            {type: 'image', name: 'imageUrl', title: 'Фото співробітник'},
          ],
        },
      ],
    }),
  ],
})
