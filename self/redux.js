/**
 * Redux 本身不处理异步行为，需要依赖中间件。结合 redux-actions 使用，Redux 有两个推荐的异步中间件：

 redux-thunk
 redux-promise
 */


/**
 只负责 UI 的呈现，不带有任何业务逻辑
 没有状态（即不使用this.state这个变量）
 所有数据都由参数（this.props）提供
 不使用任何 Redux 的 API
 总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
 你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
 React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。
 /
const Title =
    value => <h1>{value}</h1>
    //因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。
 /**
 Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
 Redux 提供createStore这个函数，用来生成 Store。
 Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
 当前时刻的 State，可以通过store.getState()拿到
 Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store

 3.4 Action Creator
 View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。

 const ADD_TODO = '添加 TODO';

 function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

 const action = addTodo('Learn Redux');
 上面代码中，addTodo函数就是一个 Action Creator。
 store.dispatch()是 View 发出 Action 的唯一方法。
 3.6 Reducer
 Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
 store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。

 import { createStore } from 'redux';
 const store = createStore(reducer);
 上面代码中，createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。

 */
 /*
 *  Action Creator 的唯一功能就是返回一个Action供 dispatch 进行调用。
  */


