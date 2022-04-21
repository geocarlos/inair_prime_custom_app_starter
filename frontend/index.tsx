import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './index.scss';

const App = () => <div className="container">Hello from InAir Studio!</div>;

initializeBlock(() => <App/>);
