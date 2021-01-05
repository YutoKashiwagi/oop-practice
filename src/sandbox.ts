import { Suite } from 'benchmark'

const suite = new Suite

const users = [
  {
    name: 'hoge',
    age: 13
  },
  {
    name: 'foo',
    age: 13
  },
  {
    name: 'bar',
    age: 14
  }
]
suite.add('filter and map', {
  fn: () => {
    const user13 = users.filter(user => user.age === 13)
    const names = user13.map(user => user.name)
  }
})
  .add('if in forEach', {
    fn: () => {
      const names: Array<string> = []
      users.forEach((user) => {
        if (user.age === 13) {
          names.push(user.name)
        }
      })
    }
  })
  .add('reduce', {
    fn: () => {
      const names = users.reduce((pre: any, cur) => { return (cur.age === 13) ? [...pre, cur.name] : pre}, [])
    }
  })
  .on('cycle', (event: any) => {
    console.log(String(event.target))
  })
  .run({ async: true })
