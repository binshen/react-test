import React from 'react';
import createHistory from 'history/createBrowserHistory';

import Test from '../components/Test';
import Test2 from '../components/Test2';
import Test3 from '../components/Test3';
import Test4 from '../components/Test4';
import Clock from '../components/Clock';
import NotFound from '../views/Exception/404';

export const history = createHistory();

export const routes = [
    {
        path: '/',
        redirect: '/test/clock'
    },
    {
        path: '/test',
        children: [{
            path: '/clock',
            component: Clock
        }, {
            path: '/test',
            component: Test
        }, {
            path: '/test2',
            component: Test2
        }, {
            path: '/test3',
            component: Test3
        }, {
            path: '/test4',
            component: Test4
        }]
    },
    {
        path: '*',
        component: NotFound
    }
];
