import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './app';

const rootEl = document.getElementById('root')

if (!rootEl) {
  throw new Error("Missing root el")
}

const root = createRoot(rootEl)

root.render(<App />)