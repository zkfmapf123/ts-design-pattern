interface Observer {
  update(temp: number, humidity: number, pressure: number): void
}

//////////////////////////////////////////////////////////////////////////////
// Stuffs
//////////////////////////////////////////////////////////////////////////////
class ObserverA implements Observer {
  num = 10
  constructor() {}

  update(temp: number, humidity: number, pressure: number) {
    this.num = temp * humidity * pressure * this.num
  }
}

class ObserverB implements Observer {
  num = 20
  constructor() {}

  update(temp: number, humidity: number, pressure: number) {
    this.num = temp / humidity / pressure / this.num
  }
}

class ObserverC implements Observer {
  num = 30
  constructor() {}

  update(temp: number, humidity: number, pressure: number) {
    this.num = temp + humidity + pressure + this.num
  }
}

//////////////////////////////////////////////////////////////////////////////
// WeatherData
//////////////////////////////////////////////////////////////////////////////
class WeatherData {
  private observer: Observer[]

  constructor() {
    this.observer = []
  }

  add(ob: Observer[]) {
    this.observer = [...this.observer, ...ob]
  }

  notifiyObserver(temp: number, humidity: number, pressure: number) {
    if (this.observer.length === 0) {
      return
    }

    this.observer.forEach((ob) => ob.update(temp, humidity, pressure))
  }
}

//////////////////////////////////////////////////////////////////////////////
// main
//////////////////////////////////////////////////////////////////////////////
const [a, b, c] = [new ObserverA(), new ObserverB(), new ObserverC()]
const weatherData = new WeatherData()

weatherData.add([a, b, c])
weatherData.notifiyObserver(10, 20, 30)

console.log(a.num, b.num, c.num)
