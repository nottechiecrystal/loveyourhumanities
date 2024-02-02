module.exports = {
    title: "Love Your Humanities by Crystal Ang",
    lang: 'en-US',
    theme: "casper",
    description: "Get started with humanities tuition with Ms Crystal Ang",
  head: [
    ['link', { rel: 'icon', href: '/img/uploads/favicon.ico' }],
    ['link', { rel: 'icon', href: '/img/uploads/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', href: '/img/uploads/favicon-32x32.png', sizes: '32x32' }],
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
    {
      text: 'Media Pack',
      link: '/media.html'
    },
    {
      text: 'Contact Me',
      link: '/contact.html'
     }],

    footer: [{
      text: 'Whatsapp Me',
      link: 'https://api.whatsapp.com/send/?phone=6583245565&text=Hi%21+I%27m+looking+for+a+literature+or+history+tutor+%3A%29+&type=phone_number&app_absent=0'
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
     // github: "https://github.com",
     // twitter: "https://twitter.com",
     // facebook: "https://facebook.com",
     // xing: "https://xing.de",
     // instagram: "https://instagram.com",
     whatsapp: 'https://api.whatsapp.com/send/?phone=6583245565&text=Hi%21+I%27m+looking+for+a+literature+or+history+tutor+%3A%29+&type=phone_number&app_absent=0',
     linkedin: 'https://www.linkedin.com/in/crystal-ang-068b256b/'
    }
  }
}