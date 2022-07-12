import { React, useState, useEffect } from "react";
import "../Styles/App.css";

const Data = () => {
  const [user, setuser] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setuser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <table>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Role</td>
            <td>Team</td>
          </tr>
          {user.map((item) => (
            <tr key={item.id}>
              <td> {item.id} </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Data;
