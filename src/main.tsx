import './styles/global.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/page';
import Host from './pages/host/page';
import Player from './pages/player/page';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Layout> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/host" element={<Host />} />
                    <Route path="/player" element={<Player />} />
                </Routes>
            {/* </Layout> */}
        </BrowserRouter>
    </React.StrictMode>
);
