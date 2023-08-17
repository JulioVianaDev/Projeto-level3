import React,{useState} from 'react'
import "./Notes.css"
import trash from '../svgs/trash.svg'
import edit from '../svgs/edit.png'
import AddNewButton from '../components/UI/AddNewButton'
function Notes() {
  const [notes,setNotes] = useState([{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023",id: 1},])

  return (
    <div className='notes'>
      <AddNewButton/>
      {
        notes.map(n=><div className='note'>
                      <div>
                        <h1>{n.title}</h1>
                        <div className='desc'>{n.description}</div>
                      </div>
                        <div className='div-svgs'>
                          <div><img className="svgs" src={trash}/></div>
                          <div><img className="svgs-edit" src={edit}/></div>
                        </div>
                      </div>
        )
      }
    </div>
  )
}

export default Notes