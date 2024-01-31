module.exports = {
    title: "Love Your Humanities by Crystal Ang",
    lang: 'en-US',
    description: "Get started with humanities tuition with Crystal Ang",
  head: [
    ['link', { rel: 'icon', href: '/img/uploads/crystal.jpg' }],
  ],
  markdown: {
    anchor: {
      permalink: true,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: '/img/uploads/banner.png',
    logo: '/img/uploads/crystal.jpg',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Tips',
      link: '/posts'
    }, {
      text: 'About',
      link: '/about.html'
    },
 //     {
 //     text: 'Category',
 //     link: '/category/some-category'
 //   },
 //     {
 //     text: 'Shop',
 //     link: '/shop.html'
 //   },
      {
      text: 'Contact',
      link: '/contact.html'
    }],

    footer: [{
      text: 'Get in Touch',
      link: '/contact.html'
    }, 
   // {
   //   text: 'Facebook',
   //   link: 'https://www.facebook.com/chothyn.lay'
   // }, 
   // {
   //   text: 'Instagram',
   //   link: 'https://www.instagram.com/january_cho/'
   // },
    {
        text:'Admin',
        link: '/admin'
    }
    ],
    social: {
     // twitter: 'https://twitter.com',
     // facebook: 'https://www.facebook.com/chothyn.lay',
     // instagram: 'https://www.instagram.com/january_cho/',
    }
  }
}