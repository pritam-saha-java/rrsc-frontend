import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import EventsClub from "../projects/club/EventsClub.jsx";
import EventsManagement from "../projects/management/EventsManagement.jsx";
import EventsComplex from "../projects/complex/EventsComplex.jsx";

export default function EventsPage() {
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) return <p>Select a project first.</p>;

  switch (currentProject.key) {
    case "red-riders-club":
      return <EventsClub />;
    case "red-riders-management":
      return <EventsManagement />;
    case "red-riders-complex":
      return <EventsComplex />;
    default:
      return <p>No content available for this project.</p>;
  }
}
