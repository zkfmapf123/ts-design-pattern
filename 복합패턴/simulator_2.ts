{
  ////////////////////////////////////////////////////////////////////////////////////
  // 오리
  ////////////////////////////////////////////////////////////////////////////////////
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

  ////////////////////////////////////////////////////////////////////////////////////
  // 거위
  ////////////////////////////////////////////////////////////////////////////////////
  class Goose {
    honk() {
      console.log('난 거위 꽉꽉')
    }
  }

  class GooseAdapter implements QuackAble {
    private g: Goose

    constructor(g: Goose) {
      this.g = g
    }

    quack(): void {
      this.g.honk()
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

        // Adapter를 추가
        const goose = new Goose()
        const gooseAdpater = new GooseAdapter(goose)

        this.simulate(mDuck)
        this.simulate(rDuck)
        this.simulate(gooseAdpater) // Adpater를 대신 호출
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
