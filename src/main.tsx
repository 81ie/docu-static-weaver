
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force refresh the DOM to ensure latest changes are applied
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
