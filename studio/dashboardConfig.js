export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62445bb7679c682c8b7628a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n4s537xh',
                  apiId: '088799b7-0226-4571-a082-2d105619cb57'
                },
                {
                  buildHookId: '62445bb7a41bfb00c0f722bd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iu81esq2',
                  apiId: '1ae5882c-f4a7-46a8-b615-f81d7c1ccd30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlosevia/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iu81esq2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
