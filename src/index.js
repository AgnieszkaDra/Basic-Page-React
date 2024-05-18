
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import header from '../src/data/header'
import footer from '../src/data/footer';
import main from '../src/data/main';
import Header from './components/layout/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import './styles/reset/reset.css'
import './styles/sass/style.css'

const root = createRoot(document.querySelector('#root'));

const App = () => (
    <Router>
        <Header {...header} className={'header'}/>
        <Main {...main} className={'main'}/>
        <Footer {...footer} className={'footer'}/>
    </Router>
);

root.render(<App/>);





