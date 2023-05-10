import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handelDeleteUser = _id => {
        console.log('delete person: ', _id);

        fetch(`http://localhost:4000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!!!');

                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }
    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p
                        key={user._id}
                    >{user.name} : {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button
                            onClick={() => handelDeleteUser(user._id)}
                        >X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;