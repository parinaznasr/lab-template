import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
    Home,
    News
} from '../Components/index';

const PublicRoutes = () => {
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/news' element={<News/>} />
        </Routes>
    </Router>
  );
}

export default PublicRoutes;
