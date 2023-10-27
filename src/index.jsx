import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {store} from './core/store'
import {Provider} from 'react-redux'
import Disciplines from "./components/disciplines/Disciplines";

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
