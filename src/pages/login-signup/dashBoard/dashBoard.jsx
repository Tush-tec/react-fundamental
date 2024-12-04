import React from "react";
import UsersDetails from "./FetchUser/Users";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#e9ecef", minHeight: "100vh", paddingTop: "30px" }}>
      <div className="container">
        <h1 className="text-center m-5 text-primary">
          Welcome to Our Community!
        </h1>
        <div
          className="mx-auto border rounded shadow-lg py-4 px-5"
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "800px",
          }}
        >
          <p className="text-muted text-center" style={{ font:"-moz-initial", lineHeight: "1.6" }}>
            This is a community for people who love to learn and share their
            knowledge. We have a variety of resources, discussions, and
            opportunities waiting for you. Feel free to explore the latest
            updates, engage with the community, and enjoy all the features
            we've crafted just for you. Your journey with us is what makes this
            platform special.
          </p>
        </div>

        {/* Call-to-action Buttons */}
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary mx-2">Explore Updates</button>
          <button className="btn btn-outline-secondary mx-2">Join a Discussion</button>
        </div>

        {/* User Details Section */}
        <div className="mt-5">
          <h2 className="text-center text-secondary">Our Members</h2>
          <p className="text-center text-muted">Meet the amazing people who make this community thrive!</p>
          <UsersDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
