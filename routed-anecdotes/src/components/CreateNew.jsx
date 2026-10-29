import { useNavigate } from "react-router"
import { useAnecdotes, useField } from "../hooks"

import anecdoteService from "../services/anecdotes"

const CreateNew = () => {

  const { addAnecdote } = useAnecdotes()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newAnecdote = {
      content: content.attrs.value,
      author: author.attrs.value,
      info: info.attrs.value,
      votes: 0
    }

    console.log(newAnecdote)


    const addedAnecdote = await anecdoteService.createNew(newAnecdote)

    addAnecdote(addedAnecdote)

    navigate("/")
  }

  const handleReset = (e) => {
    e.preventDefault()

    content.reset()
    author.reset()
    info.reset()

  }
  console.log(content.attrs)

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            {...content.attrs}
            name="content"
          />
        </div>
        <div>
          author
          <input
            {...author.attrs}
            name="author"
          />
        </div>
        <div>
          url for more info
          <input
            {...info.attrs}
            name="info"
          />
        </div>
        <button>create</button>
        <button type="button" onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
