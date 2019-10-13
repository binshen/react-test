import React from 'react'
import createHistory from 'history/createBrowserHistory';

import Clock from '../components/Clock';
import NotFound from '../views/Exception/404';

export const history = createHistory();

export const routes = [
    {
        path:'/',
        redirect:'/test/clock'
    },
    {
        path:'/test',
        redirect:'/test',
        children:[{
            path:'/clock',
            component:Clock
        }]
    },
    {
        path:'*',
        component:NotFound
    }
]
