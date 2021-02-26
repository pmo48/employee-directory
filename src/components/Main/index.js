import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function Main() {
    const [employeeData, setEmployeeData] = useState([]);
    const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
    const [order, setOrder] = useState("A");

    useEffect(() => {
        //get the data
        API.getEmployees().then((res) => {
            console.log("res*****",res);
            setEmployeeData(res.data.results);
            setFilteredEmployeeData(res.data.results);
        });
    }, []);

    const renderEmployeeRows = () => {
        //map through the data and return jsx into an array
        const mappedArray = filteredEmployeeData.map((employee) => {
            return (
                <tr key={employee.login.uuid}>
                    <th><img src={employee.picture.medium}/></th>
                    <th>{employee.name.first} {employee.name.last}</th>
                    <th>{employee.phone}</th>
                    <th>{employee.email}</th>
                    <th>{employee.dob.date}</th>
                </tr>
            );
        });
        //return this array of jsx
        return mappedArray;
    }

    return (
        <table className="table">
            <tr>
                <th>Image</th>
                <th onClick={(name) => {
                    setOrder(name);
                  }}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            {renderEmployeeRows()}
        </table>
    );
}

export default Main;