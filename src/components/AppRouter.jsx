import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import { CSSTransition } from 'react-transition-group';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => {
                return <Route key={route.path} path={route.path} Component={route.component}/>
            })}
            <Route path="*" element={<Navigate to='/main' />}/>
        </Routes>
    )
}

export default AppRouter;