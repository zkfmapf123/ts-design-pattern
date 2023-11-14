interface Users {
  name: string
  age: number
  job: string
}

class userRepository {
  protected name: string
  protected age: number
  protected job: string

  constructor(user?: Users) {
    this.name = user?.name ?? ''
    this.age = user?.age ?? 0
    this.job = user?.job ?? ''
  }
}

// only read
class userRepositoryOnlyRead extends userRepository {
  constructor(user: Users) {
    super(user)
  }

  saymyname() {
    console.log('userRepositoryOnlyRead')
  }
}

// only write
class userRepositoryOnlyWrite extends userRepository {
  constructor(user: Users) {
    super(user)
  }

  saymyname() {
    console.log('userRepositoryOnlyWrite')
  }
}

class UserFactroyRepository {
  private constructor() {}

  static inject(tag: 'read' | 'write', args: Users) {
    if (tag === 'read') return new userRepositoryOnlyRead(args)
    if (tag === 'write') return new userRepositoryOnlyWrite(args)
  }
}

export class UserRepositoryBuilder extends userRepository {
  private tag: 'read' | 'write' | undefined = undefined

  setName(name: string): this {
    this.name = name
    return this
  }

  setAge(age: number): this {
    this.age = age
    return this
  }

  setJob(job: string): this {
    this.job = job
    return this
  }

  setTag(tag: typeof this.tag): this {
    this.tag = tag
    return this
  }

  create() {
    if (this.tag) {
      return UserFactroyRepository.inject(this.tag, {
        name: this.name,
        age: this.age,
        job: this.job,
      })
    }

    // Errro) not exists tag
    throw new Error(`${this.tag} not exits`)
  }
}

;(() => {
  const readUser = new UserRepositoryBuilder().setName('leedonggyu').setAge(999).setJob('programmer').setTag('read').create()
  const writeUser = new UserRepositoryBuilder().setName('leedonggyu').setAge(999).setJob('programmer').setTag('write').create()

  readUser?.saymyname()
  writeUser?.saymyname()
})()
