import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './components/09-useContext/MainApp'
//import { TodoApp } from './components/08-useReducer/TodoApp'
//import { CallBackHook } from './components/06-memos/CallBackHook'
//import { CounterApp } from './components/01-useState/CounterApp'
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
//import { FocusScreen } from './components/04-useRef/FocusScreen'
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
//import { HookApp } from './HookApp'
//import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect'
//import { MemoHook } from './components/06-memos/MemoHook'
//import { Memorize } from './components/06-memos/Memorize'
//import { MultipleCustomHooks } from './components/03-example/MultipleCustomHooks'
//import { Padre } from './components/07-tarea-memo/Padre'
//import { RealExampleRef } from './components/04-useRef/RealExampleRef'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
)
