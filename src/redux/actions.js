export const ADD_TODO = 'ADD_TODO'
export const INPUT_VALUE = 'INPUT_VALUE'
export const FIND_VALUE = 'FIND_VALUE'

export const DONE_TODO = 'DONE_TODO'
export const SHOW_MODAL = 'SHOW_MODAL'
export const FIND = 'FIND'
export const SHOW_DONE_TODOS = 'SHOW_DONE_TODOS'
export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS'




let nextTodoId = Math.random();

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const setInputValue = text => ({
    type: INPUT_VALUE,
    payload: {
        text
    }
})

export const setDoneTodo = (id) => ({
    type: DONE_TODO,
    payload: {
        id
    }
})

export const setShowModal = () => ({
    type: SHOW_MODAL
})

export const setFind = (text) => ({
    type: FIND,
    payload: {
        text
    }
})

export const setFindValue = text => ({
    type: FIND_VALUE,
    payload: {
        text
    }
})

export const setShowDoneTodos = () => ({
    type: SHOW_DONE_TODOS,
})

export const setShowAllTodos = () => ({
    type: SHOW_ALL_TODOS,
})