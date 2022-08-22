import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-row'>
        <div className='todo-container'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed} style={{marginRight:20}}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through',  opacity: 0.4}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)} className='edit-icon todo-button edit' ><Icon icon={edit2} className='icons'/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))} className='delete-icon todo-button'><Icon icon={trash}  className='icons'/></span>
                </>
              )}
        </div>
    </div>
  ))
}
