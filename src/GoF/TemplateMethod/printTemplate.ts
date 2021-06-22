abstract class AbstractDisplay {
  abstract open: () => void
  abstract print: () => void
  abstract close: () => void

  display = (): void => {
    this.open()

    for (let index = 0; index < 4; index++) {
      this.print()
    }

    this.close()
  }
}

class CharDisplay extends AbstractDisplay {  
  private char: string

  constructor(char: string) {
    super()
    this.char = char
  }

  open = () => {
    process.stdout.write('<<<')
  }

  print = () => {
    process.stdout.write(this.char)
  }

  close = () => {
    process.stdout.write('>>>' + '\n')
  }
}

class StringDisplay extends AbstractDisplay {
  private text: string
  private width: number

  constructor(text: string) {
    super()

    this.text = text
    this.width = text.length
  }

  open = () => {
    this.pringLine()
  }

  print = () => {
    console.log('|' + this.text + '|')
  }

  close = () => {
    this.pringLine()
  }

  private pringLine = (): void => {
    process.stdout.write('+')

    for (let index = 0; index < this.text.length; index++) {
      process.stdout.write('-')
    }

    process.stdout.write('+' + '\n')
  }
}

// TemplateMethodパターンを用いることで、charDisplayとstringDisplayで振る舞いを共通化できた
const charDisplay = new CharDisplay('H')
charDisplay.display()

const stringDisplay = new StringDisplay('Hello, World')
stringDisplay.display()

// <<<HHHH>>>
// +------------+
// |Hello, World|
// |Hello, World|
// |Hello, World|
// |Hello, World|
// +------------+
