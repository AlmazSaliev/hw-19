import { useState } from "react"
import { Button } from "./Button"


export const Input=()=>{
    let[value, setValue]=useState('')
    
    function getValue(e){ 
        setValue(e.target.value)
    }
   
    let[value2, setValue2]=useState('')
    function getValue2(e){
        setValue2(e.target.value)
    }
    let[result,setResult] = useState([])
    let[isModal, setModal]=useState(false)
    let[isModal2, setModal2]=useState(false)
    
    function allData(e) {
        e.preventDefault()
        if(value.trim().length=== 0){
            setModal(true)
            return
         }
         if(value2.trim().length=== 0){
             setModal2(true)
             return
         }
        setResult([...result,{name:value,age:value2, id: Math.random().toString()}])
    }

    

    function delet(a){
        setResult(
            result.filter((el) => el.id !== a.target.id 
            )
        )
    }
    function name(){
        return setModal(false)
    }
    function age(){
        return setModal2(false)
    }

    function Textage(a){
        return(
            <div className="modal">
                <div className="div">
                    <h3>Заполните возраст пользователья</h3>
                    <button onClick={a}>Да</button>
                </div>
            </div>
        )
    }
    function Textname(a){
        return(
            <div className="modal">
                <div className="div">
                    <h3>Заполните имя пользователья</h3>
                    <button onClick={a}>Да</button>
                </div>
            </div>
        )
    }
    return(
        <div>
            <form className="box" onSubmit={allData}>
                    {isModal2 && Textage(age)}
                    {isModal && Textname(name)}
                <h2>To Do list</h2>
                <div className="box1">
                    <input type="text" onChange={getValue} value={value} placeholder='Как вас зовут?'/>
                    <input type="number" onChange={getValue2} value={value2} placeholder='Сколько вам лет?'/>
                    <input type="submit" value="Добавить" className="button"/>
                </div>   
            </form>
              
            <div className="box2" key={Math.random().toString()}>
                {result.map((i)=><Button func={delet}  id={i.id}><span key={i.id}>Ваше имя: {i.name} , вам {i.age} лет.</span></Button>)}

            </div>
        </div>
    )
}