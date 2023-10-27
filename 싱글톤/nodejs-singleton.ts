class NodejsSingleTon {
  constructor() {
    console.log('nodejs singleton')
  }

  speak() {
    console.log('speak only one')
  }
}

export const nodejsSingleton = new NodejsSingleTon()
