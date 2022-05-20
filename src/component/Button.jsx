import { useState } from "react"
import { Modal } from "./Modal"

export const Button=(props)=>{
    const [modal,setModal] = useState(false)
       return(
        <div key={props.id} className='cont'>
            {props.children}
            <button  onClick={() =>setModal(true)}>Удалить</button>
            {modal && <Modal net={setModal} id={props.id} yes={props.func}/>}
            
        </div>
    )
}