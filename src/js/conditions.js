import "../css/style.css";
import "../css/conditions.css";

import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { setHeaderFooter} from "./setHeaderFooter.mjs";
import {alertTemplate, visitorCentersTemplate, activityTemplate } from "./templates.mjs";

function setAlerts(alerts){
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  const centers = await getVisitorCenterData(parkData.parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(centers);
  setActivities(parkData.activities);
}

function setVisitorCenters(centers) {
  const centersContainer = document.querySelector('.visitor details[name="current-details"] summary');
  const html = centers.map(visitorCentersTemplate);
  centersContainer.insertAdjacentHTML("afterend", html.join(""));
}

function setActivities(activities){
  const activityContainer = document.querySelector('.activities ul');
  const html = activities.map(activityTemplate);
  activityContainer.insertAdjacentHTML("beforeend", html.join(""));
}

init();