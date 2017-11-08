// ,
// "devDependencies": {
//     "gulp-svgmin": "^1.2.4",
//         "gulp-svgstore": "^6.1.0",
//         "path": "^0.12.7"
// }


import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom'
import {combineReducers} from 'redux';
import {createStore} from 'redux';
// import {Provider} from 'react-redux'

// import * as firebase from 'firebase';

//styles
import './assets/css/styles.css'
import registerServiceWorker from './registerServiceWorker';


// const config = {
//     apiKey: "AIzaSyBt0-iJnLh3Ag0S8-0kI07feWMifneuZik",
//     authDomain: "pushapp-566e2.firebaseapp.com",
//     databaseURL: "https://pushapp-566e2.firebaseio.com",
//     projectId: "pushapp-566e2",
//     storageBucket: "pushapp-566e2.appspot.com",
//     messagingSenderId: "130392082638"
// };
//
// firebase.initializeApp(config);

let todoId = 0;
const todo = (state, action) => {
    switch (action.type) {
        case  'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case "TOGGLE_TODO":
            return state.map(c =>
                todo(c, action));
        default :
            return state;
    }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


const getVisibleTodo = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
};

const todoApp = combineReducers({todos, visibilityFilter});
const store = createStore(todoApp);

const Link = ({active, children, onClick}) => {
    if (active) {
        return (
            <span>{children}</span>
        )
    }
    return (
        <a href="" onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>{children}
        </a>
    );
};

class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <Link active={props.filter === state.visibilityFilter} onClick={ () => {
                store.dispatch({
                    type: "SET_VISIBILITY_FILTER",
                    filter: props.filter
                })
            }}>{props.children} </Link>
        )
    }
}

const Footer = () => {
    return (
        <p>
            Show:
            {' '}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </p>
    )
};

const Todo = ({onClick, completed, text}) => {
    return (
        <li onClick={onClick} style={{
            textDecoration: completed ? "line-through" : "none"
        }}>{text}</li>
    )
};

class VisibleTodoList extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <TodoList todo={ getVisibleTodo(state.todos, state.visibilityFilter)} onTodoClick={
                (id) => {
                    store.dispatch({
                        type: "TOGGLE_TODO",
                        id: id
                    });
                }
            }/>
        )
    }
}

const TodoList = ({todo, onTodoClick}) => {
    return (
        <ul>
            {
                todo.map((todo) =>
                    <Todo key={todo.key} {...todo} onClick={() => onTodoClick(todo.id)}/>
                )
            }
        </ul>
    )
};

const AddTodo = () => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                input = node
            }}/>
            <button onClick={() => {
                store.dispatch({
                    type: "ADD_TODO",
                    text: input.value,
                    id: todoId++
                });
                input.value = "";
            }}>Add item
            </button>
        </div>
    )
};

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('root')
);

registerServiceWorker();
