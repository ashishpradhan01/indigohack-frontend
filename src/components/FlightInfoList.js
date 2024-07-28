import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";
import FlightInfoCard from "./FlightInfoCard";
import "./FlightInfoList.css";

const FlightInfoList = () => {
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
    <div className="flight-info-list">
      {flightInfo.map((flight) => (
        <FlightInfoCard key={flight.flightInfoId} flight={flight} />
      ))}
    </div>
  );
};

export default FlightInfoList;
