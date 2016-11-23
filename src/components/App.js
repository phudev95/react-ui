import React from 'react';

import { Button } from 'office-ui-fabric-react';

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            fishes: {},
            order: {}
        };
    }

    render () {
        return (
            <div>
                <p>Hello...</p>
                <Button>I am a button.</Button>
            </div>
        );
    }
}

export default App;