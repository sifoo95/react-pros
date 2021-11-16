import React, { Component } from "react";
import "./App.css";
import User from "./profile/componets/profile";
import Myimage from "./profile/image.jpg";

const user = {
  fullName: "Gomycode",
  bio:
    "We train the next tech generation on the most innovative and recent technologies. We help them get ready for the jobs of the future and prepare them for their professional endeavour while reinforcing their employability",
  profession: "private institute for basic computer training",
  image: Myimage,
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <User x={user} />
      </div>
    );
  }
}
export default App;
