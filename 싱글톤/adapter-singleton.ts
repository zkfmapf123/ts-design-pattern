//////////////////////////////////////////
/////// Adpater Instance
//////////////////////////////////////////
class Arepository {
  constructor() {
    console.log('hi i am Arepository')
  }

  hello(msg: string) {
    console.log('hello world\t', msg)
  }
}

export class AdapterInstance {
  private static Arepository: Arepository | null = null

  private constructor() {}

  static getInstance(): Arepository {
    if (!AdapterInstance.Arepository) {
      AdapterInstance.Arepository = new Arepository()
    }

    return AdapterInstance.Arepository
  }
}
