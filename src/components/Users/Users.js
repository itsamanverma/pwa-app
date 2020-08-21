import React,{useState,useEffect} from 'react';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) =>{
            response.json().then((result) => {
                console.warn("result", result)
            })
        })
    },[])

    return (
        <div>
            Users
        </div>
    )
}

export default Users;
