import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main'; 
import SignIn from './pages/SignIn';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/main" element={<Main />} />
            
        </Routes>
    );
}

export default MainRoutes;
