import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./pages/Landing.jsx";
import SportsClubPage from "./pages/SportsClubPage.jsx";
import SportsComplexPage from "./pages/SportsComplexPage.jsx";
import ProjectPageRenderer from "./pages/ProjectPageRenderer.jsx";

// common wrappers
import AboutPage from "./pages/common/AboutPage.jsx";
import ManagementPage from "./pages/common/ManagementPage.jsx";
import MembersPage from "./pages/common/MembersPage.jsx";
import EventsPage from "./pages/common/EventsPage.jsx";
import ContactPage from "./pages/common/ContactPage.jsx";

export default function App() {
  return (
    <ProjectProvider>
      <div
        className="min-h-screen text-white"
        style={{ backgroundImage: "var(--rr-gradient)" }}
      >
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/club/*" element={<SportsClubPage />} />
            <Route path="/complex/*" element={<SportsComplexPage />} />
            <Route path="/project/:slug" element={<ProjectPageRenderer />} />

            {/* Common nav routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ProjectProvider>
  );
}
