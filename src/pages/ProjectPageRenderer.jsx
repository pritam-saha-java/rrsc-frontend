import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext.jsx';
import LiveScoring from '../components/LiveScoring.jsx';
import LiveStreaming from '../components/LiveStreaming.jsx';
import BookCourt from '../components/BookCourt.jsx';
import PaymentHistory from '../components/PaymentHistory.jsx';
import GenericProjectPage from '../components/GenericProjectPage.jsx';

// map slugs -> components
const PAGE_MAP = {
  'live-scoring': LiveScoring,
  'live-stream': LiveStreaming,
  'book-court': BookCourt,
  'payment-history': PaymentHistory,
  'clients': GenericProjectPage,
  'gallery': GenericProjectPage
};

export default function ProjectPageRenderer() {
  const { slug } = useParams();
  const { currentProject } = useContext(ProjectContext);

  if (!currentProject) {
    // If no project selected, redirect home or show a message
    return <Navigate to="/" replace />;
  }

  // verify that this slug is allowed for currentProject
  const allowed = currentProject.extraNav?.some(n => n.slug === slug);
  if (!allowed) {
    return <div className="p-6 bg-white/5 rounded">This page is not available for <strong>{currentProject.name}</strong>.</div>;
  }

  const PageComponent = PAGE_MAP[slug] ?? GenericProjectPage;

  return <PageComponent project={currentProject} slug={slug} />;
}
