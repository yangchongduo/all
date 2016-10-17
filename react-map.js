//两种迭代输出 {`/user/detail/${item.ids}`
{
    this.state.data.map((item,index)=>{
        return <li key={index} className="list-group-item">
            <Link to={"/user/detail/"+item.ids}>{item.ids}:{item.name}</Link>
        </li>
    })
}


{
    this.state.persons.map((person,index)=> <li key={index} className="list-group-item">
        <Link to={"/user/detail/"+person.id}>{person.id}:{person.name}</Link>
    </li>)
}

{
    this.state.data.map((item,index)=>{
        return <li key={index} className="i">
           <link to={`/user/detail/${item.ids}`}>{item.id}:{item.name}</link>
        </li>
    })
}