import React,{useState} from 'react'
import "./Notes.css"
import AddNewButton from '../components/UI/AddNewButton'
import Note from '../components/Notes/Note'
import Modal from '../components/Modal/Modal'

function Notes() {
  const [notes,setNotes] = useState([{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},])
  const [showModal,setShowModal] = useState(false)

  const mudarModal= ()=>{
    setShowModal((state)=>!state)
  }

  return (
    <div className='notes'>
      <AddNewButton abrirOModal={mudarModal} />
      {
        notes.map(n=> <Note n={n}/>)
      }

      {
        showModal ? <Modal fecharOModal={mudarModal}/> : null
      }
    </div>
  )
}

export default Notes