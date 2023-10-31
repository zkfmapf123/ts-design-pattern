{
  //////////////////////////////////////////////////////////
  // Duck Interface
  //////////////////////////////////////////////////////////
  interface Duck {
    quack: () => void;
    fly: () => void;
  }

  interface Turkey {
    gobble: () => void;
    fly: () => void;
  }

  /**
   * @class MallarDuck
   * @impl Duck
   */
  class MallarDuck implements Duck {
    quack() {}

    fly() {}
  }

  /**
   * @class WildTurkey
   * @impl Turkey
   */
  class WildTurkey implements Turkey {
    gobble() {}

    fly() {}
  }

  /**
   * @class AdapterTurkey
   */
  class AdapterTurkey implements Duck {
    private turkey: Turkey | null = null;

    setTurkey(t: Turkey) {
      this.turkey = t;
    }

    quack() {
      this.turkey?.gobble();
    }

    fly() {}
  }

  (() => {
    const duck1 = new MallarDuck();
    duck1.quack();
    duck1.fly();

    const turkey2 = new WildTurkey();
    turkey2.gobble();
    turkey2.fly();

    const adTurkey = new AdapterTurkey();
    adTurkey.setTurkey(turkey2);
    adTurkey.quack();
    adTurkey.fly();
  })();
}
