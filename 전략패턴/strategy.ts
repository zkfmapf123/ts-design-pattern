interface Flyable {
  fly(): string
}

class FlyBird implements Flyable {
  fly() {
    return 'i am fly'
  }
}

class NoneFlyBird implements Flyable {
  fly() {
    return "i don't fly"
  }
}

class StategyRubberDuck implements Flyable {
  public FlyBehavior: Flyable

  // Default Value
  constructor(fly = new FlyBird()) {
    this.FlyBehavior = fly
  }

  setFly(fly: FlyBird) {
    this.FlyBehavior = fly
  }

  fly() {
    return this.FlyBehavior.fly()
  }
}

////////////////////////////////////////////////////////////////////////
// main
////////////////////////////////////////////////////////////////////////
const srd = new StategyRubberDuck()
console.log(srd.fly())

const NotFlyBird = new NoneFlyBird()
srd.setFly(NotFlyBird)
console.log(srd.fly())
