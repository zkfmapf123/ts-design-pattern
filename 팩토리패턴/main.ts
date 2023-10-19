import { repositoryFactory } from './factory'
;(() => {
  const child = repositoryFactory.create('child')
  const man = repositoryFactory.create('man')
  const girl = repositoryFactory.create('girl')

  child.speak()
  man.speak()
  girl.speak()
})()
