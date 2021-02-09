const { ls, ShellString } = require('shelljs')
const path = require('path')

const dirs = ['src/components', 'src/views', 'src/forms']


const getExportStr = (file) => (
  `export { default as {0} } from './{1}'\n`
    .replace('{0}', path.basename(file, '.vue'))
    .replace('{1}', file)
)
const isTarget = (v) => v[0] != '_' && v.endsWith('.vue')

dirs.forEach((dir) => {
  const text = ls(dir).filter(isTarget).map(getExportStr).join('')
  new ShellString(text).to(path.join(dir, 'index.ts'))
})
