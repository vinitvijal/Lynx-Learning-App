import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './App.jsx'
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Search from './pages/Search.js';

root.render(
<MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <Footer />
  </MemoryRouter>,)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
