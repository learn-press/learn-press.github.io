
module.exports = {
  title: 'Learn development',
  description: 'A website to learn development',
  themeConfig: {
    sidebar: [{
      path: '/learn/web/',
      children: [
        'http',
        'client-vs-server-frameworks'
      ]
    }]
    // sidebar: {
    //   '/learn/web': [
    //     '/learn/web/client-vs-server-frameworks'
    //   ],
    //   '/learn/': [
    //     'web',
    //   ],
    //   '/': [
    //   ],
    // }
  }
}
