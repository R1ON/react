import React, { useEffect, useState } from 'react';

const Children = (props) => {
    const [delivery, setDelivery] = useState(false);

    console.log(props);
    // useEffect(() => {
    //     // fetch()
    //     // startAnimation
    //     console.log('Я отрисовался');

    //     return () => {
    //         // delete
    //         // stopAnimation
    //         console.log('Я удалился');
    //     }
    // }, []);

    useEffect(() => {
        if (props.count >= 10) {
            // const isOk = fetch()
            // if (isOk) {
                setDelivery(true);
            // }
        }
    }, [props.count]);

    return (
        <div>
            I'm a children {props.count}

            {delivery && (
                <p>Вам доступна бесплатная доставка</p>
            )}
        </div>
    )
};

export default Children;
