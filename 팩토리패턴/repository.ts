export interface Repository {
  speak(): string
  sayMyName(): string
}

export class Man implements Repository {
  speak(): string {
    throw new Error('Method not implemented.')
  }
  sayMyName(): string {
    throw new Error('Method not implemented.')
  }
}

export class Girl implements Repository {
  speak(): string {
    throw new Error('Method not implemented.')
  }
  sayMyName(): string {
    throw new Error('Method not implemented.')
  }
}

export class Child implements Repository {
  speak(): string {
    throw new Error('Method not implemented.')
  }
  sayMyName(): string {
    throw new Error('Method not implemented.')
  }
}
