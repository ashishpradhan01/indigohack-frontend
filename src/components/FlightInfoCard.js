import React from "react";
import "./FlightInfoCard.css";

const FlightInfoCard = ({ flight }) => {
  return (
    <div className={`flight-info-card ${flight.status.toLowerCase()}`}>
      <h2>
        {flight.flightId} - {flight.airline}
      </h2>
      <p>
        <strong>Status:</strong> {flight.status}
      </p>
      <p>
        <strong>Departure Gate:</strong> {flight.departureGate}
      </p>
      <p>
        <strong>Arrival Gate:</strong> {flight.arrivalGate}
      </p>
      <p>
        <strong>Scheduled Departure:</strong>{" "}
        {new Date(flight.scheduledDeparture).toLocaleString()}
      </p>
      <p>
        <strong>Scheduled Arrival:</strong>{" "}
        {new Date(flight.scheduledArrival).toLocaleString()}
      </p>
      {flight.actualDeparture && (
        <p>
          <strong>Actual Departure:</strong>{" "}
          {new Date(flight.actualDeparture).toLocaleString()}
        </p>
      )}
      {flight.actualArrival && (
        <p>
          <strong>Actual Arrival:</strong>{" "}
          {new Date(flight.actualArrival).toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default FlightInfoCard;
