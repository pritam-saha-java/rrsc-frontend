import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import MembersClub from "../projects/club/MembersClub.jsx";
import MembersManagement from "../projects/management/MembersManagement.jsx";
import MembersComplex from "../projects/complex/MembersComplex.jsx";

export default function MembersPage() {
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) return <p>Select a project first.</p>;

  switch (currentProject.key) {
    case "red-riders-club":
      return <MembersClub />;
    case "red-riders-management":
      return <MembersManagement />;
    case "red-riders-complex":
      return <MembersComplex />;
    default:
      return <p>No content available for this project.</p>;
  }
}
