import {ADD_TODO, INPUT_VALUE, DONE_TODO, SHOW_MODAL, FIND, FIND_VALUE} from './actions';

const initialState = {
    todos: [
        {id: 1, text: 'Number 1', done: false, show: true},
        {id: 2, text: 'Number 2', done: true, show: true},
        {id: 3, text: 'Number 3', done: false, show: true},
    ],
    inputValue: '',
    findValue: '',
    showModal: false,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                inputValue: '',
                showModal: false,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        done: false,
                        text: action.payload.content,
                        show: true,
                    }
                ]
            }
        case INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.payload.text
            }
        }

        case DONE_TODO: {
            console.log(state.todos);
            return {
                ...state,
                todos: state.todos.map(i => {
                    if (i.id === action.payload.id) {
                        return {...i, done: !i.done}
                    }
                    return i
                })
            }
        }

        case SHOW_MODAL: {
            console.log(state.showModal);
            return {
                ...state,
                showModal: !state.showModal
            }
        }

        case FIND_VALUE: {
            return {
                ...state,
                findValue: action.payload.text
            }
        }

        case FIND: {
            return {
                ...state,
                todos: state.todos.map(i => {
                    if (i.text.toLowerCase().startsWith(state.findValue.toLowerCase())) {
                        console.log(i);
                        return {...i, show: true}
                    } else {
                        return {...i, show: false}
                    }
                })
            }
        }

        default:
            return state
    }
}

export default reducer