module.exports = {
  siteName: 'GraphArtSens',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Blog',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pages/**/*.md',
        typeName: 'ContentPage',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/assets/static_pages/*.yml',
        typeName: 'SettingPage',
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    
  ],
  templates: {
    Blog: '/blog/:title',
    ContentPage: '/pages/:title',
    SettingPage: '/:title',
  },
  transformers: {
    remark: {
      // global remark options
    }
  },
}