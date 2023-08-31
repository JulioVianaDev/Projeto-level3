import React from 'react'

function Form() {
  return (
    <form className={"form"}>
      <h1>Adicionar Anotação</h1>
      <label htmlFor="title">Titulo</label>
      <input type="text" placeholder="Titulo da anotação" name="title" id="title"/>
      <label htmlFor="description">Descrição</label>
      <input type="text" placeholder="Descrição da anotação" name="description" id="description"/>
      <button>Cadastrar anotação</button>
    </form>
  )
}

export default Form