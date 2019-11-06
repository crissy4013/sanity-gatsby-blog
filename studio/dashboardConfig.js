export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc3152900446ba362f241ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7ugn1pwh',
                  apiId: '39683678-1933-4535-b8bf-b7256c5683c8'
                },
                {
                  buildHookId: '5dc3152a9c60afb882c6f439',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ietuw195',
                  apiId: '671a2982-c1b3-486f-bb3c-993d714059d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crissy4013/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ietuw195.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
