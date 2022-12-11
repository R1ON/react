import React from 'react';

import './index.css';

// camelCase
// iLoveReact
// className
// megaReactCompoment

const App = () => {
    const name = 'Alex';
    const age = 18;

    let attr;

    if (age === 18) {
        attr = 'good';
    }
    else {
        attr = 'bad';
    }

    function test() {
        if (age === 18) {
            return (
                <div>feqjifoejqoifqe</div>
            );
        }
        else {
            return (
                <div>lpcalpclplppcadp</div>
            );
        }
    }

    return (
        <div>
            {/* <div className={attr}>
                {name} {age}
            </div> */}

            <div>
                {/* if (age === 20)
                
                { console.log('hello') }

                { console.log('1314134') } */}

                {/* {age === 18 ? 'good' : 'bad'}

                {test()} */}
            </div>
        </div>
    );
};

export default App;
