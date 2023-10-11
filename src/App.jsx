const Sample = () => {
  return(
    <div>
      <p>This is sample text</p>
    </div>
  )
}

const app = () => {
  const date = new Date(); 
  return(
    <div>
      <p>Hello world..! today's date is {date.toString()}</p>
      < Sample />
    </div>
  )
}

export default app;
