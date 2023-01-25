import './App.css'

function App() {
  const user = {
    username: '',
    password: ''
  }

  function handleClick() {
    console.log(user);
  }

  return (
    <div className="App">
      <input type="text" placeholder='Användarnamn' 
      onKeyUp={ (event) => { user.username = event.target.value; } } />
      <input type="password" placeholder='Lösenord'
      onKeyUp={ (event) => { user.password = event.target.value; } } />
      <button onClick={ handleClick }>Klicka på mig</button>
    </div>
  )
}

export default App
