import React from 'react'
import "./Modal.css"
import {AiFillCloseCircle} from 'react-icons/ai'
function Modal(props) {
  return (
    <div className='fundo'>
      <div className="closeModal" onClick={()=>props.fecharOModal()}>
        <AiFillCloseCircle size={40} color='white'/>
      </div>
      <div>
        <form className={"form"}>
          <label htmlFor="title">Titulo</label>
          <input type="text" placeholder="Titulo da anotação" name="title" id="title"/>
          <label htmlFor="description">Descrição</label>
          <input type="text" placeholder="Descrição da anotação" name="description" id="description"/>
          <button>Cadastrar anotação</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
