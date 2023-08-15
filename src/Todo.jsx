import React, { useState } from "react";


export default function Todo() {
    let [count,setCount]=useState(["일"]);
    let [work, setWork] = useState([]);
    let [userinput, setUserInput] = useState();
    let [usertime, setUserTime]= useState();
    
    
    return (
        <div className="page-container">
            <div className="page-body">
                <div className="page-elements">
                    {
                        <TodoList work={work} count={count} setWork={setWork} />
                    }
                </div>
                <div className="input-create">
                    <input onChange={(e) => {
                        setUserInput(e.target.value);                       
                    }} />
                    <button onClick={() => {
                        let now = new Date();
                        let year = now.getFullYear();
                        let month = now.getMonth()+1;
                        let day = now.getDate();
                        let usertime= `${year}-${month}-${day}`
                        let temp={title:userinput, time:usertime};
                        setWork(work.concat(temp));
                        console.log(work);
                    }}>생성버튼</button>
                </div>
            </div>
        </div>
    );
}

//ToDo 요소하나만드는 컴포넌트 
function TodoCard(props) {
    return (
        <div className="element" key={props.index}>
            <div className="element-detail">
               {
                 props.work[props.index].title
               }
            </div>
            <div className="element-detail2">
                <div className="element-time"> 
                    작성시간: {props.work[props.index].time}
                </div>
                <div className="delete-update">
                    <div className="element-delete">
                        <button onClick={()=>{
                            let deletework=[...props.work];
                            deletework.splice(props.index,1);
                            props.setWork(deletework);
                                                                                                                  
                        }}>삭제하기</button>
                    </div>
                    <div className="element-update">
                        <button >수정하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
//Todo를 리스트형식으로 관리 
function TodoList(props) {
    return (
        props.work.map((a, i) => {
            return (
                <TodoCard work={props.work} index={i} setWork={props.setWork}/>
            )
        })

    )
}

