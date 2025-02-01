import React from 'react';
import { Routes, Route, Navigate, Outlet, redirect } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import useAuth from './hooks/useAuth';
import TeacherDetail from './pages/TeacherDatail'

type Props = {
    redirectTo: string
}

function ProtectedRoutes({ redirectTo }: Props) {
    const { handleGetToken } = useAuth()
    return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />
}
function MainRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<SignIn />} />

            <Route element={<ProtectedRoutes redirectTo='/login' />}>
                <Route path="/main" element={<Main />} />
                <Route path='/teacher-detail' element={<TeacherDetail />} />
            </Route>

        </Routes>
    );
}

export default MainRoutes;
