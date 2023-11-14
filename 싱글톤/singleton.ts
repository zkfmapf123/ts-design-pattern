//////////////////////////////////////////
/////// 자체적인 인스턴스
//////////////////////////////////////////
export class Instace {
  private static isInit: boolean = false

  private constructor() {}

  // 생성을 Static method로 구성
  static getInstance() {
    if (!Instace.isInit) {
      console.log('init >> ', new Date())
      Instace.isInit = true
      return new Instace()
    }
  }
}
