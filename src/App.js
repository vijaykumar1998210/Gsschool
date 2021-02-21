import React from "react";
import "./App.css";
import Header from "./Header";
import Photo from "./Photo";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import TeacherRemarks from "./TeacherRemarks";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="photo_container">
        <Photo />
      </div>
      <Table1 />
      <Table2 />
      <Table3 />
      <TeacherRemarks />
      <Table4 />
      <div
        className="bg_gradient"
        style={{
          backgroundImage: `Url(${
            process.env.PUBLIC_URL +
            "/Images/IMG-20210216-WA0010-removebg-preview.png"
          })`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default App;
