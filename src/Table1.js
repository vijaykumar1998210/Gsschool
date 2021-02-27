import React from 'react'
import './table1.css'

function Table1() {
    return (
        <div className="table1div">
        <p className="Table1_head1">Report Card</p>
        <h1 className="Table1_head2">ACADEMIC SESSION : 2020-2021</h1>
        <p></p>
        <table className="table1">

            <tr>
                <th className="w1">name of the student</th>
                <th colSpan="3" className="w2"><input className="input_field" type="text"/></th>
                <th className="adm">adm. no</th>
                <th><input className="input_field24" type="text"/></th>
                {/* <th><input className="input_field1" type="text"/></th> */}
                {/* <th colSpan=""></th>
                <th><input className="input_field1" type="text"/></th> */}
                
            </tr>
            <tr>
                <td className="w1">class & sec.</td>
                <td colSpan=""><input className="input_field" type="text"/></td>
                <td colSpan="2">Roll no.</td>
                <td colSpan="2"><input className="input_field1" type="text"/></td>
            </tr>
            <tr>
                <td className="w1">mother's name</td>
                <td colSpan="6"><input className="input_field" type="text"/></td>
                
            </tr>
            <tr>
                <td className="w1">father's name</td>
                <td colSpan="2"><input className="input_field" type="text"/></td>
                <td className="w1" colSpan="">d.o.b</td>
                <td colSpan="2" className="ch1"><input className="input_field ch2" type="text"/></td>
            </tr>
            {/* <tr>
                <td className="w1">d.o.b</td>
                <td colSpan="6"><input className="input_field" type="text"/></td>
            </tr> */}
        </table>
            
        </div>
    )
}

export default Table1
