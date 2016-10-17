/*
从react中的demo说起
Facebook最近一次更新react时，将es6中的class加入了组件的创建方式当中。Facebook也推荐组件创建使用通过定义一个继承自 React.Component 的class来定义一个组件类。官方的demo：
*/

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
//写在这里也是一种react的优化方式
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({liked: !this.state.liked});
    }
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
}
ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);
/*上面的demo中有大量this的使用，在 class LikeButton extends React.Component 中我们是声明该class，因为this具体是由其上下文决定的，因此在类定义中我们无法得知this用法。 相当于是new了上面定义的类，首先调用 constructor() 函数， this.state 的this上下文就是该实例对象；同理，render() 函数中 this.state.liked 的this上下文也是该对象。问题在于 onClick={this.handleClick} ，获取该函数引用是没有问题，这里的this上下文就是该对象。*/
//这就是为什么要改变this指向的原因   函数执行的时候里面的this 必须是组件本身
// 这时问题来了，在原来 React.createClass 中， handleClick() 在onClick事件触发的时候，会自动绑定到LikeButton实例上，这时候该函数的this的上下文就是该实例。不过在ES6的class的写法中，Facebook取消了自动绑定，实例化LikeButton后，handleClick()的上下文是div的支撑实例（ backing instance ），而 handleClick() 原本要绑定的上下文是LikeButton的实例。对于该问题，我们有多种解决方案。
/*
使用bind()函数改变this的上下文
可以在class声明中的constructor()函数中，使用

this.handleClick = this.handleClick.bind(this);
该方法是一个bind()绑定，多次使用。在该方法中，我们在声明该实例后，可以在该实例任何地方使用 handleClick() 函数，并且该 handleClick() 函数的this的上下文都是LikeButton实例对象。

除此我们也可以在具体使用该函数的地方绑定this的上下文到LikeButton实例对象，代码如下

<div onClick={this.handleClick.bind(this)}>
You {text} this. Click to toggle.
</div>
这种方法需要我们每次使用bind()函数绑定到组件对象上。

es6的箭头函数
es6中新加入了箭头函数=>，箭头函数除了方便之外还有而一个特征就是将函数的this绑定到其定义时所在的上下文。这个特征也可以帮助我们解决这个问题。使用如下代码：

<div onClick={() => this.handleClick()}>
    You {text} this. Click to toggle.
</div>
这样该 this.handleClick() 的上下文就会被绑定到LikeButton的实例对象上。个人认为，使用箭头函数使得JavaScript更加接近面向对象的编程风格。*/
