import { useState, useEffect } from 'react'

import anecdoteService from '../services/anecdotes'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const attrs = {
    type,
    value,
    onChange,

  }

  return {
    attrs,
    reset
  }
}

export const useAnecdotes = () => {

  const [anecdotes, setAnecdotes] = useState([])

  useEffect(() => {
    anecdoteService.getAll().then(data => setAnecdotes(data))
  }, [])

  const addAnecdote = (anecdote) => {
    console.log(anecdote)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const deleteAnecdote = (id) => {
    anecdoteService.remove(id)
    setAnecdotes(anecdotes.filter(anecdote => anecdote.id != id))
  }

  return {
    anecdotes, addAnecdote, deleteAnecdote
  }
}
