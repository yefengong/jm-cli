import path from 'path'
import fs from 'fs-extra'
import { Generator } from './type'
import { message } from '../../utils'

const genGitignore: Generator = (appPath, ownPath) => {
  const dotIgnorePath = path.join(appPath, '.gitignore')
  const ignorePath = path.join(appPath, 'gitignore')
  if (fs.existsSync(dotIgnorePath)) {
    return
  }

  if (fs.existsSync(ignorePath)) {
    fs.moveSync(ignorePath, dotIgnorePath)
    return
  }

  const defaultIgnorePath = path.join(ownPath, 'lib/gitignore')
  fs.copySync(defaultIgnorePath, dotIgnorePath)
  message.info('created .gitignore')
}

export default genGitignore