import {observable, computed, action} from 'mobx'

// let appstore = observable.box({
//   num: 0,
//   todos: [1, 2, 3],
//   get todotext () {
//     return this.todos.join('T')
//   }
// })
// var handle1 = action((num) => {
//   appstore.todos.push(num)
// })
// handle1(Math.random().toFixed(2))
// console.log('----', appstore.todotext)



// Proxy对象转普通js
// console.log(appstore.todos.toJS())

// 日志打印
// autorun(() => {
//   console.log(appstore.todos.length)
// })
// appstore.todos.push(...[4, 5])
// appstore.todos.pop()


// 首先Mobx并不强制所有state的改变必须通过action来改变，这主要适用于一些较小的项目
// 对于较大型的，需要多人合作的项目来说，可以使用Mobx提供的api configure来强制
// Mobx.configure({enforceActions: true})


// 采用装饰器的语法 
// 装饰器的语法也有多种写法

//----------------------------------------使用mobx内部提供的
// var person = observable({
//   // observable 属性:
//   name: "John",
//   age: 42,
//   showAge: false,
//   // 计算属性:
//   get labelText() {
//     return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
//   },
//   // 动作:
//   setAge(age) {
//     this.age = age;
//   }
// }, {
//   setAge: action,
//   labelText: computed
// });
// 对象属性没有暴露 'observe' 方法,
// 但不用担心, 'mobx.autorun' 功能更加强大
// autorun(() => console.log(person.labelText));
// person.showAge = true
// person.name = "Dave";
// 输出: 'Dave'
// person.setAge(21);

//----------------------------------------使用编译器
class Appstore {
  @observable store = {
    num: 0,
    todos: [1, 2, 3]
  }
  @computed get todotext () {
    return this.store.todos.join('T')
  }
  @action add (num) {
    this.store.todos.push(num)
  }
}
let appstore = new Appstore()

// 这里的todotext和最开始没有用任何装饰器的那个todotext都有实现同样的效果 有啥区别呢 
// 详见 https://github.com/mobxjs/mobx/issues/161
// 使用@computed的意义在于它能够由MobX进行更智能的优化
// 如果我不使用computed属性，直接使用自定义的getTheValue函数的话，那么只要value改变，所有用到getTheValue函数的地方都将重新计算
// 如果使用了@computed get getValue，那么getValue将会被缓存，如果value没有改变，那么getValue也不会改变，其它组件也不会收到通知
// 此外如果你读取getValue的值，你通常会得到一个缓存的值，而不带@computed装饰器，则会重新计算

//-----------------------------------------异步action

// import {observable, action} from 'mobx';
// class MyState {
//   @observable data = null;
//   @observable state = null;
//   @action initData = async () => {
//     try {
//       const data = await getData("xxx")
//       runInAction("说明一下这个action是干什么的。不写也可以", () => {
//         this.state = "success"
//         this.data = data
//       })
//     } catch (error) {
//       runInAction(() => {
//         this.state = "error"
//       })
//     }
//   }
// }

// ----------------------------使用runInAction
// @action
// changeA() {
//   this.a = 0
//   setTimeout(
//     runInAction(() => {
//       this.a = 1000
//     }),
//     1000
//   )
// }

// -----------------------------需要注意的一些点

// 后增属性无法收集的问题
// const Mobx = require('mobx')
// const { observable, autorun } = Mobx
// let ob = observable({ a: 1, b: 1 })
// autorun(() => {
//   if(ob.c){
//     console.log("ob.c:", ob.c)
//   }
// })
// ob.c = 1
// 可以通过 内部方法解决
// const Mobx = require("mobx")
// const { observable, autorun, computed, extendObservable } = Mobx
// var numbers = observable({ a: 1, b: 2 })
// extendObservable(numbers, { c: 1 })
// autorun(() => console.log(numbers.c))
// numbers.c = 3

// 回调函数若依赖外部环境，则无法进行收集
// const Mobx = require("mobx")
// const { observable, autorun } = Mobx
// let ob = observable({ a: 1, b: 1 })
// let x = 0
// autorun(() => {
//   if(x == 1){
//     console.log("ob.c:", ob.b)
//   }
// })
// x = 1
// ob.b = 2


export default appstore

// toJS 工具函数