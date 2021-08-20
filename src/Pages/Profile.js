import React from "react";

const Profile = () => {
  return (
    <div style={{ color: "red" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        profile page👀
      </h1>
      <img
        style={{
          border: "1px solid #ddd",
          bordeRadius: "4px",
          padding: "5px",
          display: "block",
          margiLeft: "auto",
          margiRight: "auto",
          width: "50%",
        }}
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile"
      />

      <p style={{ padding: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        temporibus. Tempora recusandae reiciendis alias repellendus facilis
        tempore ad quam eos.0
      </p>
    </div>
  );
};

export default Profile;
