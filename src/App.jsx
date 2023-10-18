// const Sample = () => {
//   return(
//     <div>
//       <p>This is sample text</p>
//     </div>
//   )
// }

// const app = () => {
//   const date = new Date(); 
//   return(
//     <div>
//       <p>Hello world..! today's date is {date.toString()}</p>
//       < Sample />
//     </div>
//   )
// }

import React from 'react'

function App(props) {
  console.log(props)
    const {notes} = props;
    console.log(notes)
        return(
          <div>
        <h3>Content</h3>
        <ul>
        {
    notes.map((data) => {
      return <li key = { notes.id}>{ data.content}</li>
    })
     }
        </ul>
  </div>
        )
};

export default App


