import { Child, Girl, Man, Repository } from './stuffs'

type factoryKeys = 'man' | 'girl' | 'child'

export class RepositoryFactory {
  constructor() {}

  create(tag: factoryKeys): Repository {
    if (tag === 'child') return new Child()
    if (tag === 'man') return new Man()
    if (tag === 'girl') return new Girl()

    throw new Error('Not Exists')
  }
}
