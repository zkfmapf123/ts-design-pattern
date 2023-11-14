{
  interface QuackAble {
    quack(): void
  }

  class MallarDuck implements QuackAble {
    quack(): void {
      console.log('꽥꽥')
    }
  }

  class ReadHeadDuck implements QuackAble {
    quack(): void {
      console.log('삑삑')
    }
  }

  // ts overloading -> X
  class DuckSimulator {
    // simulate() {

    // }

    simulate(q?: QuackAble) {
      if (!q) {
        const mDuck = new MallarDuck()
        const rDuck = new ReadHeadDuck()

        this.simulate(mDuck)
        this.simulate(rDuck)
      } else {
        q?.quack()
      }
    }
  }

  ;(() => {
    const ds = new DuckSimulator()
    ds.simulate()
  })()
}
