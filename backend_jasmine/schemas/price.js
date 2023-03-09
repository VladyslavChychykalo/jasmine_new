import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Ціни',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),

    // ============================

    defineField({
      name: 'servicesArr',
      title: 'Послуги',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Послуга',
          fields: [
            {type: 'string', name: 'serviceName', title: 'Назва послуги'},
            {
              type: 'array',
              name: 'subServiceArr',
              title: 'Підпослуги',
              of: [
                {
                  type: 'object',
                  name: 'subServiceItem',
                  title: 'Підпослуга',
                  fields: [
                    {type: 'string', name: 'subServiceName', title: 'Назва підпослуги'},
                    {
                      type: 'array',
                      name: 'subServiceCategoryArr',
                      title: 'Список цін та послуг',
                      of: [
                        {
                          type: 'object',
                          name: 'subServiceCategoryItem',
                          title: 'Ціна та послуга',
                          fields: [
                            {
                              type: 'string',
                              name: 'nameService',
                              title: 'Назва послуги',
                            },
                            {
                              type: 'string',
                              name: 'priceService',
                              title: 'Ціна послуги',
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
