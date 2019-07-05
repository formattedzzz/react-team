import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouteView from '@/router/index'
import * as serviceWorker from './serviceWorker'

import Store from '@/mobx'
import {Provider} from 'mobx-react'
console.log('Store:', Store)
import 'antd/dist/antd.css'

ReactDOM.render(<Provider appstore={Store}><RouteView></RouteView></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
