import { RepositoryFactory } from './factory'
;(() => {
  const factory = new RepositoryFactory()

  const child = factory.create('child')
  const man = factory.create('man')
  const girl = factory.create('girl')

  child.speak()
  man.speak()
  girl.speak()
})()
