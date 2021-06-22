interface IPrint {
  printWeak: () => void
  printStrong: () => void
}

class Banner {
  private text: string

  constructor(text: string) {
    this.text = text
  }

  showWithParan = (): void => {
    console.log('(' + this.text + ')')
  }

  showWithAster = (): void => {
    console.log('*' + this.text + '*')
  }
}

/**
 * Adapter
 */
class PrintBanner implements IPrint {
  private banner: Banner

  constructor(banner: Banner) {
    this.banner = banner
  }

  printWeak = (): void => {
    this.banner.showWithParan()
  }

  printStrong = (): void => {
    this.banner.showWithAster()
  }
}

/**
 * MainPrinterクラスはAdapterパターンによって振る舞いを変えずに済む
 */
class MainPrinter {
  constructor(print: IPrint) {
    print.printWeak()
    print.printStrong()
  }
}

const banner = new Banner('sample text')

const printBanner = new PrintBanner(banner)

new MainPrinter(printBanner)

// (sample text)
// *sample text*
