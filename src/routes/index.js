import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';
import Detalhes from '../Pages/Detalhes';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detalhes' component={Detalhes} />
            </Switch>
        </BrowserRouter>
    );
};
