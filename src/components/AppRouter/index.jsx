import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import APropos from '../../pages/APropos';
import Error from '../../pages/Error';
import FicheLogement from '../../pages/FicheLogement';
import Home from '../../pages/Home';
import Layout from '../Layout';

function AppRouter() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/APropos" element={<APropos />} />
                        <Route path="/Error" element={<Error />} />
                        <Route
                            path="/FicheLogement"
                            element={<FicheLogement />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default AppRouter;
