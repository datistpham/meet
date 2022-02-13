import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ContextApp } from "./Components/Context/Context"
// import { Provider } from "react-redux"
// import { store } from "./redux/store/index"
import i18n from "./locale/translation/i18n"
import { I18nextProvider } from "react-i18next"

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ContextApp>
        <App />
      </ContextApp>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('_382jfewasa')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
