import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="text-xl bg-blue-300">React App</div>
  </StrictMode>,
);
