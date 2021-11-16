import React, { Component } from "react";
import propTypes from "prop-types";


// import "../App.css";
const user = (props) => {
  console.log(props);
  alert(props.x.fullName);
  return (
    <div>
      <p className="Name" >
        <h1 style={{color:"red"}}> Name :</h1>
        <span> {props.x.fullName}</span>
      </p>
      <p className="bio">
        <h1 style={{color:"red"}}> Bio :</h1> <span>{props.x.bio}</span>
      </p>
      <p className="Profession">
        <h1 style={{color:"red"}}> Profession :</h1> <span>{props.x.profession}</span>
      </p>
      <img className="img" src={props.x.image} alt={"dddd"} width="400px" />
    </div>
  );
};
export default user;
Component.DefaultProps = {
    Name : "Gomycode",
    bio  : "We train the next tech generation on the most innovative and recent technologies. We help them get ready for the jobs of the future and prepare them for their professional endeavour while reinforcing their employability",
    profession : "private institute for basic computer training",
    img : "Myimage"
}

user.propTypes = {
  Type: propTypes.object,
};