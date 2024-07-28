import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import "./FlightDisplayTable.css";
import axiosInstance from "../api/axiosConfig";

const FlightDisplayTable = () => {
  const [flightInfo, setFlightInfo] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/v1/flights")
      .then((response) => {
        setFlightInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the flight info!", error);
      });
  }, []);
  return (
    <table className="flight-display-table">
      <thead>
        <tr>
          <th>TIME</th>
          <th>DESTINATION</th>
          <th>FLIGHT</th>
          <th>GATE</th>
          <th>REMARKS</th>
        </tr>
      </thead>
      <FlipMove as="tbody">
        {flightInfo.map((flight) => (
          <tr key={flight.flightInfoId}>
            <td>{new Date(flight.scheduledDeparture).toLocaleTimeString()}</td>
            <td>{flight.destination}</td>
            <td>{flight.flightId}</td>
            <td>{flight.departureGate}</td>
            <td className={`status ${flight.status.toLowerCase()}`}>
              {flight.status}
            </td>
          </tr>
        ))}
      </FlipMove>
    </table>
  );
};

export default FlightDisplayTable;
