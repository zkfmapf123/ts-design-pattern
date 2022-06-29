import { Cheese, Dough, Olive, Pepperoini, Sauce } from "./stuffs";

// 구현은 인터페이스로 진행하자!!!
export interface PizzaIngredient {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createOlive(): Olive;
  createPepper(): Pepperoini;
}

// stuff들을 PizzaFactory에서 합친다 -> 만드는 함수를 합쳐놓는다.
export class PizzaFactory implements PizzaIngredient {
  createDough(): Dough {
    return new Dough();
  }
  createSauce(): Sauce {
    return new Sauce();
  }
  createCheese(): Cheese {
    return new Cheese();
  }
  createOlive(): Olive {
    return new Olive();
  }
  createPepper(): Pepperoini {
    return new Pepperoini();
  }
}
