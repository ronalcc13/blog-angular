import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { CursosYHabilidades } from './cursos-y-habilidades/cursos-y-habilidades';
import { Contactos } from './contactos/contactos';

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
            },
            {
                path: 'sobre-mi',
                component: SobreMi,
                title: 'Sobre mí'
            },
            {
                path: 'cursos-y-habilidades',
                component: CursosYHabilidades,
                title: 'Cursos y Habilidades'
            },
            {
                path: 'proyectos',
                component: Proyectos,
                title: 'Proyectos'
            },
            {
                path: 'contacto',
                component: Contactos,
                title: 'Contacto'
            }
        ]
    }
];
