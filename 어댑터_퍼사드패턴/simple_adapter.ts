class Human {
  speak(msg: string) {
    return msg;
  }
}

class AdpaterHuman {
  private readonly human: Human;

  constructor(human: Human) {
    this.human = human;
  }

  speak(name: string, msg: string) {
    return `${name} >> ${this.human.speak(msg)}`;
  }
}

(() => {
  const family = new Human();
  const ad = new AdpaterHuman(family);

  console.log(ad.speak("father", "hello"));
  console.log(ad.speak("mother", "hello"));
  console.log(ad.speak("sister", "hello"));
})();
