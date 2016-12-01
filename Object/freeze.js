const obj={name:'yang'}
Object.freeze(obj)
obj.name='xiao'
console.log(obj)
/*功能是无法修改 中文的意思是freeze*/