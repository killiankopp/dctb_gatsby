import * as React from "react"
import  { useEffect, useState } from "react";
import "./ApiCall.css";

const ApiCall = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.pebble.solutions/v5/activity/");
        if (!response.ok) {
          throw new Error("Erreur : " + response.status);
        }
        const data = await response.json();
        setActivityData(data);
      } catch (error) {
        console.error("Erreur lors de la requête", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div id="ApiTargetContainer">
      {activityData.map((activity, index) => (
        <div key={index} className="activity-card">
          {activity.label && <h2>{activity.label}</h2>}
          {activity.start && activity.end && (
            <p>{formatActivityTime(activity.start, activity.end)}</p>
          )}
          {activity.description && <p>{activity.description}</p>}
        </div>
      ))}
    </div>
  );
};

function formatActivityTime(startDateTime, endDateTime) {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const startFormated = startDate.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let formatedTime = ` ${startFormated}`;

  if (endDateTime) {
    const endFormated = endDate.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const isSameDay = startDate.toDateString() === endDate.toDateString();

    if (isSameDay) {
      formatedTime += `  > ${endDate.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } else {
      formatedTime += `  > ${endFormated}`;
    }
  } else {
    formatedTime += " En cours ";
  }

  return formatedTime;
}

export default ApiCall

