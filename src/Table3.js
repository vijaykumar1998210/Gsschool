import React from "react";
import "./table3.css";

function Table3() {
  return (
    <div className="table3div">
      <table className="table3">
        <tr>
          <th>CO-SCHOLASTIC AREAS</th>
          <th className="t3">TERM 1</th>
          <th className="t3">TERM 2</th>
          <th>EXTRA CURRICULAR SUBJECTS</th>
          <th className="t3">OVERALL</th>
        </tr>
        <tr>
          <th></th>
          <th className="t3">GRADE</th>
          <th className="t3">GRADE</th>
          <th></th>
          <th className="t3">GRADE</th>
        </tr>
        <tr>
            <td>Work Education</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td>Computer Science</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
        </tr>
        <tr>
            <td>Art Education</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td>General Knowledge</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
        </tr>
        <tr>
            <td>Health & Physical Education</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td>Moral Science</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
        </tr>
        <tr>
            <td>Discipline</td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td className="t3"><input className="input_field2" type="text"/></td>
            <td></td>
            <td className="t3"></td>
        </tr>
      </table>
    </div>
  );
}

export default Table3;
