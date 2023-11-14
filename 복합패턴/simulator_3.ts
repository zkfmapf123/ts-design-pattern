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

  ////////////////////////////////////////////////////////////////////////////////////
  // quack Counter
  ////////////////////////////////////////////////////////////////////////////////////
  class QuackCounter implements QuackAble {
    // static으로 사용해서 모든 인스턴스에서 접근할 수 있는 (공용)
    static quackCount: number
    q: QuackAble

    constructor(q: QuackAble) {
      this.q = q
      QuackCounter.quackCount = 0
    }

    quack(): void {
      this.q.quack()
      QuackCounter.quackCount++
    }
  }

  // ts overloading -> X
  class DuckSimulator {
    // simulate() {

    // }

    simulate(q?: QuackAble) {
      if (!q) {
        // QuackCounter Proxy
        const mDuck = new QuackCounter(new MallarDuck())
        const rDuck = new QuackCounter(new ReadHeadDuck())

        // Adapter를 추가
        const goose = new Goose()
        const gooseAdpater = new QuackCounter(new GooseAdapter(goose))

        this.simulate(mDuck)
        this.simulate(rDuck)
        this.simulate(gooseAdpater) // Adpater를 대신 호출
        console.log('횟수는 ? ', QuackCounter.quackCount)
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
