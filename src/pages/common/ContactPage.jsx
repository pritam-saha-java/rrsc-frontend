import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import ContactClub from "../projects/club/ContactClub.jsx";
import ContactManagement from "../projects/management/ContactManagement.jsx";
import ContactComplex from "../projects/complex/ContactComplex.jsx";

export default function ContactPage() {
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) return <p>Select a project first.</p>;

  switch (currentProject.key) {
    case "red-riders-club":
      return <ContactClub />;
    case "red-riders-management":
      return <ContactManagement />;
    case "red-riders-complex":
      return <ContactComplex />;
    default:
      return <p>No content available for this project.</p>;
  }
}
