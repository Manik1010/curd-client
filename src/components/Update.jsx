import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUsers = useLoaderData();

    const handelUpdateUser = event => {
        event.preventDefault();
    // client site theke nichi
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const updatedUser = { name, email };
        console.log(updatedUser)

    // server site e pathaci
        fetch(`http://localhost:4000/users/${loadedUsers._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
             if(data.modifiedCount > 0){
                alert('User Update successfully!')
             }
            })
    
      }
    return (
        <div>
            <h3>Update information of {loadedUsers.name} </h3>

            <form onSubmit={handelUpdateUser}>
                <input type="text" name="name" defaultValue={loadedUsers?.name} /><br />
                <input type="email" name="email" defaultValue={loadedUsers?.email} /><br />
                <input type="submit" value="Update" /><br />
            </form>
        </div>
    );
};

export default Update;