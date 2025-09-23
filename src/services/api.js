import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:8080/api',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('rr_selected_project');
  if (raw) {
    try {
      const p = JSON.parse(raw);
      if (p?.id) config.headers['X-Project-Id'] = p.id;
    } catch {}
  }
  return config;
});

export default api;