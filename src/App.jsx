import './App.css'

function App() {
  const handelAddUser = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name, email);
    const user = { name, email };
    console.log(user)

    fetch('http://localhost:4000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('User added successfully!!!')
          form.reset();
        }
      })
  }
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" placeholder='Name here...' /><br />
        <input type="email" name="email" placeholder='Email here...' /><br />
        <input type="submit" value="Add User" /><br />
      </form>
    </>
  )
}
export default App
