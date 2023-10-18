import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
    {id:1,
     content: "first",
     importent: true,   
    },
    {
        id:2,
        content:"second",
        importent:false,
    },
    {
        id:3,
        content: "third",
        importent: true,   
    },
    {
        id:4,
        content: "fourth",
        importent: false,   
       },
       {
        id:5,
        content: "fifth",
        importent: true,   
       },
];
ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
