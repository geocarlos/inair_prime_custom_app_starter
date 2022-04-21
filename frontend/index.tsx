import { initializeBlock } from '@airtable/blocks/ui';
import React from 'react';
import './index.scss';
import { Panel } from 'primereact/panel';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

const App = () => (
    <Panel header="Hello from InAir Studio!">
        <p>Let's start building a custom app with PrimeReact! <FAIcon color="#0077dd" icon={faChalkboardUser} /><FAIcon icon={faCoffee} /></p>
    </Panel>
);

initializeBlock(() => <App />);
