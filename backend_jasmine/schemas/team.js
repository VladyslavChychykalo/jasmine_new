import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  title: 'Команда',
  type: 'document',
  fields: [
    defineField({
      name: 'selectName',
      title: 'Професія',
      type: 'string',
    }),
    defineField({
      name: 'team',
      title: 'Співробітники',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Співробітник',
          fields: [
            {type: 'string', name: 'name', title: 'Імʼя'},
            {type: 'string', name: 'profession', title: 'Професія'},
            {type: 'number', name: 'experience', title: 'Досвід (років)'},
            {type: 'image', name: 'src', title: 'Фото співробітник'},
          ],
        },
      ],
    }),
  ],
})
