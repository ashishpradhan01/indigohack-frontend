import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";
import "./FlightInfoTable.css";

const FlightInfoTable = () => {
  const [flightInfo, setFlightInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/api/v1/flights")
      .then((response) => {
        setTimeout(() => {
          setFlightInfo(response.data);
          setLoading(false);
        }, 5000);
      })
      .catch((error) => {
        setError("There was an error fetching the flight info!");
        setLoading(false);
      });
  }, []);

  const getStatusChipClass = (status) => {
    switch (status.toLowerCase()) {
      case "on time":
        return "chip on-time";
      case "delayed":
        return "chip delayed";
      case "cancelled":
        return "chip cancelled";
      default:
        return "chip";
    }
  };

  const renderShimmerRows = () => {
    const shimmerRows = Array.from({ length: 10 }).map((_, index) => (
      <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
        {Array.from({ length: 9 }).map((_, cellIndex) => (
          <td key={cellIndex}>
            <div className="shimmer"></div>
          </td>
        ))}
      </tr>
    ));
    return shimmerRows;
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="table-container">
      <table className="flight-info-table">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Airline</th>
            <th>Departure Gate</th>
            <th>Arrival Gate</th>
            <th>Scheduled Departure</th>
            <th>Scheduled Arrival</th>
            <th>Actual Departure</th>
            <th>Actual Arrival</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? renderShimmerRows()
            : flightInfo.map((flight, index) => (
                <tr
                  key={flight.flightInfoId}
                  className={index % 2 === 0 ? "even" : "odd"}
                >
                  <td width={"100px"}>
                    <b>{flight.flightId}</b>
                  </td>
                  <td>{flight.airline}</td>
                  <td>{flight.departureGate}</td>
                  <td>{flight.arrivalGate}</td>
                  <td>
                    {new Date(flight.scheduledDeparture).toLocaleString()}
                  </td>
                  <td>{new Date(flight.scheduledArrival).toLocaleString()}</td>
                  <td>
                    {flight.actualDeparture
                      ? new Date(flight.actualDeparture).toLocaleString()
                      : "N/A"}
                  </td>
                  <td>
                    {flight.actualArrival
                      ? new Date(flight.actualArrival).toLocaleString()
                      : "N/A"}
                  </td>
                  <td>
                    <span className={getStatusChipClass(flight.status)}>
                      {flight.status}
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightInfoTable;
