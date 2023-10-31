interface Remote {
  on(): void;
  off(): void;
}

class Computer implements Remote {
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

class AirConditioner implements Remote {
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

class Monitor implements Remote {
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

class Laundry implements Remote {
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

class Tv implements Remote {
  on(): void {
    throw new Error("Method not implemented.");
  }
  off(): void {
    throw new Error("Method not implemented.");
  }
}

/**
 * @class HomeTheaterFacade
 * @Property Facade
 */
class HomeTheaterFacade {
  private computer: Computer;
  private airConditioner: AirConditioner;
  private monitor: Monitor;
  private laundry: Laundry;
  private tv: Tv;

  private remoteArr: Remote[];

  constructor(c: Computer, a: AirConditioner, m: Monitor, l: Laundry, t: Tv) {
    this.computer = c;
    this.airConditioner = a;
    this.monitor = m;
    this.laundry = l;
    this.tv = t;

    this.remoteArr = [
      this.computer,
      this.airConditioner,
      this.monitor,
      this.laundry,
      this.tv,
    ];
  }

  watchMovie() {
    this.remoteArr.forEach((it) => it.on());
  }

  endMovie() {
    this.remoteArr.forEach((it) => it.off());
  }

  listenToRadio() {}

  endRadio() {}
}
