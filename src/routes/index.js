import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Detalhes from '../Pages/Detalhes';


export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detalhes' element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    );
};
