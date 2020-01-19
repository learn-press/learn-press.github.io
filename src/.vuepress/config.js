const { kebabCase, last, first } = require('lodash')
const Vue = require('vue')
const { join, resolve } = require('path')
const fs = require('fs')

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

function generateSidebar() {
  const paths = fs.readdirSync('src', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && first(dirent.name) !== '.')
    .map(({ name }) => resolveSection(`/${name}/`))
  return Object.assign({}, ...paths)
}

module.exports = {
  title: 'Learn development',
  description: 'Learning for humans',
  themeConfig: {
    sidebar: generateSidebar(),
  },
  plugins: [
    (options, ctx) => ({
      extendPageData ($page) {
        // ADMIN env var
        if (process.env.ADMIN) {
          $page.admin = true
        }
      },
    }),
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
}
