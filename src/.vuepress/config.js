const Vue = require('vue')
const { join, resolve } = require('path')
const fs = require('fs')

Vue.mixin({
  computed: {
    admin: () => 'hi',
  },
})

function ensureSlash(path) {
  const first = path[0] === '/' ? '' : '/'
  const last = path[path.length - 1] === '/' ? '' : '/'
  return first + path + last
}

function readDir(path) {
  return fs.readdirSync(join('src', path), { withFileTypes: true })
    .filter(({ name }) => name !== 'README.md')
}

function getChildren(path, files) {
  const children = files
    .filter(file => !file.isDirectory())
    .map(({ name }) => name)
  return { path: ensureSlash(path), children }
}

function getGrandChildren(path, files) {
  const dirs = files
    .filter(file => file.isDirectory())
  const grandChildren = dirs
    .map(({ name }) => ({ name: path + name, childFiles: readDir(path + name) }))
    .map(({ childFiles, name }) => getChildren(name, childFiles))
  return grandChildren
}

function resolveSection(path) {
  const files = readDir(path)
  const grandChildren = getGrandChildren(path, files)
  return {
    [path]: [
      getChildren(path, files),
      ...grandChildren,
    ]
  }
  // Example:
  // '/web': [{
  //   path: '/web/',
  //   children: readDir('/web')
  // }]
}

module.exports = {
  title: 'Learn development',
  description: 'Learning for humans',
  themeConfig: {
    sidebar: {
      ...resolveSection('/software-terms/'),
      ...resolveSection('/web/'),
      ...resolveSection('/html/'),
      ...resolveSection('/sgml-like-markup-langs/'),
      ...resolveSection('/vue/'),
      ...resolveSection('/vue-cli/'),
    }
  },
  plugins: [
    (options, ctx) => ({
      extendPageData ($page) {
        const {
          regularPath, // current page's default link (follow the file hierarchy)
          path, // current page's real link (use regularPath when permalink does not exist)
        } = $page
        if (process.env.ADMIN) {
          $page.admin = true
        }
      },
      clientRootMixin: resolve(__dirname, 'mixin.js'),
      define: {
        ADMIN: process.env.ADMIN,
      }
    }),
  ],
}
