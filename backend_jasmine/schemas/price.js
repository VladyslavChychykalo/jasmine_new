import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Ціни',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Заголовок',
      type: 'string',
    }),

    // ============================

    defineField({
      name: 'attrs',
      title: 'Послуги',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Послуга',
          fields: [
            {type: 'string', name: 'selectName', title: 'Назва послуги'},
            {
              type: 'array',
              name: 'subCategories',
              title: 'Підпослуги',
              of: [
                {
                  type: 'object',
                  name: 'subCategorieItem',
                  title: 'Підпослуга',
                  fields: [
                    {type: 'string', name: 'subCategorie', title: 'Назва підпослуги'},
                    {
                      type: 'array',
                      name: 'services',
                      title: 'Список цін та послуг',
                      of: [
                        {
                          type: 'object',
                          name: 'servicesItem',
                          title: 'Ціна та послуга',
                          fields: [
                            {
                              type: 'string',
                              name: 'name',
                              title: 'Назва послуги',
                            },
                            {
                              type: 'string',
                              name: 'price',
                              title: 'Ціна послуги',
                            },
                            {
                              name: 'specialLabel',
                              title: 'Спеціальний лейбл',
                              type: 'string',
                              initialValue: 'common',
                              options: {
                                list: [
                                  {title: 'звичайний', value: 'common'},
                                  {title: 'спеціальний', value: 'special'},
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
