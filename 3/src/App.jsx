import React from 'react';

import './index.css';


const App = () => {
    const array = [{ hello: 'world' }, { hello: 'world2' }];

    // for while forEach, map, reduce

    // const arrayReactElements = [];

    // array.forEach((obj) => {
    //     arrayReactElements.push(
    //         <p>{obj.hello}</p>
    //     );
    // });

    // const result = array.map((obj) => {
    //     return (
    //         <p>{obj.hello}</p>
    //     );
    // });

    // console.log(result);

    // for (let i = 0; i < array.length; i++) {
    //     const obj = array[i];

        // arrayReactElements.push(
        //     <p>{obj.hello}</p>
        // );
    // }

    // console.log(array);
    // console.log(arrayReactElements);

    // function testt() {
    //     const name = [];
    //     for () {
    //         name.push()
    //     }

    //     return name;
    // }

    return (
        <div>
            {/* {array.reduce((acc, obj) => {
                acc.push(
                    <p>{obj.hello}</p>
                );

                return acc;
            }, [])} */}

            {/* {testt()} */}
        </div>
    );
};

export default App;
