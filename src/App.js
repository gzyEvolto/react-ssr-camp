import React,{useState} from 'react'

function App(props){
    //使用hooks实现简易累加器
    const [count,setCount] = useState(1)
    return <div>
<h1>哈喽 {props.title} ! {count}</h1>
        <button onClick={()=>setCount(count+1)}>累加</button>
    </div>
}

//服务端客户端共同渲染一个组件
export default <App title="开课吧"></App>