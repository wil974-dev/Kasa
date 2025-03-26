import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import APropos from '../../pages/APropos';
import Error from '../../pages/Error';
import AccomodationSheet from '../../pages/AccomodationSheet';
import Home from '../../pages/Home';
import Layout from '../Layout';

/**
 * Router du projet
 * @returns {JSX.Element} Le JSX du composant Collapse.
 */
function AppRouter() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/APropos" element={<APropos />} />
                        <Route path="*" element={<Error />} />
                        <Route
                            path="/AccomodationSheet/:id"
                            element={<AccomodationSheet />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default AppRouter;
