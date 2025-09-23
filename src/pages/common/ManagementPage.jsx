import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import ManagementClub from "../projects/club/ManagementClub.jsx";
import ManagementManagement from "../projects/management/ManagementManagement.jsx";
import ManagementComplex from "../projects/complex/ManagementComplex.jsx";

export default function ManagementPage() {
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) return <p>Select a project first.</p>;

  switch (currentProject.key) {
    case "red-riders-club":
      return <ManagementClub />;
    case "red-riders-management":
      return <ManagementManagement />;
    case "red-riders-complex":
      return <ManagementComplex />;
    default:
      return <p>No content available for this project.</p>;
  }
}
