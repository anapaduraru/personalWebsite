import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';
import Resume from '../Components/Resume/Resume';
import Projects from '../Components/Projects/Projects';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
                <Route path='/projects' component={Projects} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
