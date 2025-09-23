// src/pages/common/AboutPage.jsx
import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import AboutClub from "../projects/club/AboutClub.jsx";
import AboutManagement from "../projects/management/AboutManagement.jsx";
import AboutComplex from "../projects/complex/AboutComplex.jsx";

export default function AboutPage() {
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) return <p>Select a project first.</p>;

  switch (currentProject.key) {
    case "red-riders-club":
      return <AboutClub />;
    case "red-riders-management":
      return <AboutManagement />;
    case "red-riders-complex":
      return <AboutComplex />;
    default:
      return <p>No content available for this project.</p>;
  }
}
