import React, { useState, useEffect } from "react";
import loadingIcon from '../FetchUser/loadingIcon.png'

const UsersDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
    
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <div className="text-center">
          <img src={loadingIcon} alt="Loading..." />
        </div>
      ) : (
        <div>
          
          <div className="row">
            {users.map((user, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm border p-4 rounded">
                  <h5 className="card-title mb-3">{user.firstName} {user.lastName}</h5>
                  <p className="card-text mb-2">
                    <strong>Age:</strong> {user.age}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Address:</strong> {user.address.address},{" "}
                    {user.address.city}
                  </p>
                  <p className="card-text">
                    <strong>Role:</strong> {user.company.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersDetails;
