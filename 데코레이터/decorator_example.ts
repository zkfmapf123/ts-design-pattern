/**
 * @Class Parent
 * @Name Beverage
 * @Description 최상위 클래스
 * @Properties 추상클래스
 */
abstract class Beverage {
  protected description?: string

  public getDescription(): string {
    return this.description ?? ''
  }

  // 자식클래스에서 구현
  public abstract cost(): number
}

/**
 * @Class Decorator
 * @Name 데코레이터 클래스
 * @Description 첨가물을 나타내는 데코레이터
 * @Properties 추상클래스
 */
abstract class CondimentDecorator extends Beverage {
  protected beverage?: Beverage

  // 자식클래스에서 구현
  public abstract getDescription(): string

  // 자기자신이 누구인지?
  public abstract whoareyou(): string
}

/**
 * @Class 음료 클래스
 * @Name Espresso
 * @Description 에스프레소를 만드는 클래스
 */
class Espresso extends Beverage {
  constructor() {
    super()
    this.description = '에스프레소'
  }

  public cost(): number {
    return 1.99
  }
}

/**
 * @Class 음료 클래스
 * @Name HouseBlend
 * @Description HouseBlend를 만드는 클래스
 */
class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = '하우스 블랜드 커피'
  }

  public cost(): number {
    return 0.89
  }
}

/**
 * @Class 모카 클래스
 * @Name Mocha
 * @Description 모카클래스를 첨가하는 데코레이터 클래스
 * 모카 자체는 Beverage에 의해서 ++
 */
class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage?.getDescription() + ' 모카'
  }

  public cost(): number {
    return (this.beverage?.cost() ?? 0) + 0.2
  }
}
