import React,{useState} from 'react'
import "./Notes.css"
import AddNewButton from '../components/UI/AddNewButton'
import Note from '../components/Notes/Note'
function Notes() {
  const [notes,setNotes] = useState([{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},])

  return (
    <div className='notes'>
      <AddNewButton/>
      {
        notes.map(n=> <Note n={n}/>
        )
      }
    </div>
  )
}

export default Notes