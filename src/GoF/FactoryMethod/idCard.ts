abstract class Product {
  abstract use: () => void
}

abstract class Factory {
  create = (owner: string): Product => {
    const product = this.createProduct(owner)

    this.registerProduct(product)

    return product
  }

  protected abstract createProduct: (owner: string) => Product
  protected abstract registerProduct: (product: Product) => void
}

/**
 * Product, Factoryを使ってIDカードを作る
 */
class IDCard extends Product {
  private owner: string

  constructor(owner: string) {
    super()

    console.log(owner + 'のカードを作ります')
    this.owner = owner
  }

  use = () => {
    console.log(this.owner + 'のカードを使います')
  }

  getOwner = (): string => {
    return this.owner
  }
}

class IDCardFactory extends Factory {
  private owners: string[]

  constructor() {
    super()
    this.owners = []    
  }

  protected createProduct = (owner: string) => {
    return new IDCard(owner)
  }

  protected registerProduct = (product: Product) => {
    // FIXME ここのasは良くない
    this.owners.push((product as IDCard).getOwner())
  }
}

class IDCardUsecase {
  constructor() {
    const idCardFactory = new IDCardFactory()
    const cardA = idCardFactory.create('owner A')
    const cardB = idCardFactory.create('owner B')
    const cardC = idCardFactory.create('owner C')

    cardA.use()
    cardB.use()
    cardC.use()
  }
}

// owner Aのカードを作ります
// owner Bのカードを作ります
// owner Cのカードを作ります
// owner Aのカードを使います
// owner Bのカードを使います
// owner Cのカードを使います

new IDCardUsecase()
