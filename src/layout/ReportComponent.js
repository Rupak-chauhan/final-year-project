import React from "react";
import { Table, Tag } from "reactstrap";
import "../App.css";

const ReportComponent = (props) => {
  console.log("Inside report Component");
  let ele;
  ele =
    localStorage.getItem("isLoggedIn") === "true" ? (
      <div className="report">
        <h2>Final report.</h2>
        <h3>Total number of appointments: {props.location.state.total}</h3>
        <h3>
          Appointments which can be canceled: {props.location.state.no_shows}
        </h3>
        <table>
          <th>No Shows Table</th>
          <tr>
            <th>S.No.</th>
            <th>No Shows Id</th>
          </tr>
          {props.location.state.missed_appointments.map((noShowsId, index) => {
            return (
              <tr>
                <th>{index}</th>
                <td>{noShowsId}</td>
              </tr>
            );
          })}
        </table>
      </div>
    ) : (
      <div>You are not authorized to this route</div>
    );
  return <React.Fragment>{ele}</React.Fragment>;
};

export default ReportComponent;
