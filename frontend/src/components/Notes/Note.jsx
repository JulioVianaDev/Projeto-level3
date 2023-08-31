import React from 'react'
import trash from '../../svgs/trash.svg'
import edit from '../../svgs/edit.png'
import "./Note.css"
import {BsTrash3Fill} from 'react-icons/bs';
import {BiSolidEdit} from 'react-icons/bi'
function Note({n,abrirOModal}) {
  return (
    <div className='note'>
      <div>
        <h1>{n.title}</h1>
        <div className='desc'>{n.description}</div>
      </div>
      <div className='noteRodape'>
        <div className="dataNote">
          {n.date}
        </div>
        <div className='div-svgs'>
          <div><BsTrash3Fill size={26} color='red'/></div>
          <div onClick={()=>abrirOModal()}><BiSolidEdit size={26} color="purple"/></div>
        </div>
      </div>
    </div>
  )
}

export default Note