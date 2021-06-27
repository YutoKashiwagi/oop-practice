class Singleton {
  private static singleton: Singleton = new Singleton()

  private constructor() {
    console.log('インスタンスを作成しました')  
  }

  static getIncetance = () => {
    return Singleton.singleton
  }
}

class SingletonUsecase {
  constructor() {
    const singletonA = Singleton.getIncetance()

    const singletonB = Singleton.getIncetance()

    if (singletonA === singletonB) {
      console.log('同一インスタンスです')
    } else {
      console.log('異なるインスタンスです')
    }
  }
}

new SingletonUsecase()

// インスタンスを作成しました
// 同一インスタンスです
