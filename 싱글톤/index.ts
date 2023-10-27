import { AdapterInstance } from './adapter-singleton'
import { nodejsSingleton } from './nodejs-singleton'
;(() => {
  // Error
  //   const ins1 = new Instace()

  // Single Instance
  //   for (let i = 0; i < 10; i++) {
  //     console.log(i)
  //     Instace.getInstance()
  //   }

  // Adapter Instance
  AdapterInstance.getInstance().hello('a')
  AdapterInstance.getInstance().hello('b')
  AdapterInstance.getInstance().hello('c')
  AdapterInstance.getInstance().hello('d')

  // Nodejs Singleton
  nodejsSingleton.speak()
  nodejsSingleton.speak()
  nodejsSingleton.speak()
})()
