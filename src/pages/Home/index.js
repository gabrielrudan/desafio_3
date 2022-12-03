import { useState } from 'react'
import style from './style.module.scss'

export default function Home() {
  const [name, setName] = useState('')
  const [nameList, setNameList] = useState([])
  const [error, setError] = useState('')

  function handleAddNameInList() {
    if (!name) {
      setError('Digite um nome primeiro...')
      return
    }

    const findName = nameList.findIndex((item) => item === name)

    if (findName !== -1) {
      setError('Esse nome já está na lista')

      return
    }

    setNameList([...nameList, name])
    setName('')
    setError('')
  }

  return (
    <div className={style.container}>
      <div>
        {nameList.length ? (
          <ul>
            {nameList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <span id="empty-list">Lista de Nomes Vazia...</span>
        )}
      </div>
      <div>
        <h2>Inserindo nomes</h2>
        <input
          type="text"
          placeholder="Name"
          id="input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className={style.btnInsert}
          onClick={() => handleAddNameInList()}
        >
          Adicionar
        </button>
        <span id="same-error">{error}</span>
      </div>
    </div>
  )
}
