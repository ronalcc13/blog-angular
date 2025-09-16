import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
                title: 'Home'
            },
            {
                path: 'about',
                component: About,
                title: 'About'
            }
        ]
    }
];
