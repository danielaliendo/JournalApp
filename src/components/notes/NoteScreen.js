import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset ] = useForm(note)
    const { body, title, id } = formValues

    const activeId = useRef( note.id ) 
    const dispatch = useDispatch()

    useEffect(() => {
        if ( note.id !== activeId.current ) {
            reset(note)
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
       
        dispatch(activeNote( formValues.id, {...formValues}))

    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(id))
    }

    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    name="title"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                name="body"
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {note.url &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen"
                        />
                    </div>}
                <button
                    className="btn btn-danger"
                    onClick={ handleDelete }
                >
                    Delete
                </button>

            </div>

        </div>
    )
}
