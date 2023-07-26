import React, { useState } from 'react';

// useState, useEffect, useCallback, useRef, useMemo, useContext

import './index.css';

const App = () => {
    // const [isDark, setIsDark] = useState(false);

//    let isDark = true;

//    const onClickHandler = () => {
//     setIsDark(!isDark);
//     setIsDark((value) => {
//         console.log(value, isDark)
//         return !value;
//     });
//     // console.log(isDark);
//     // isDark = false;
//     // console.log(isDark);
//    };
   
    // return (
    //     <div className={isDark ? 'dark' : 'light'}>
    //         <button onClick={onClickHandler}>Переключить тему</button>
    //     </div>
    // );


    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');

    const [data, setData] = useState({ name: '', password: '' });

    const onChangeName = (event) => {
        setData((currentData) => ({
            ...currentData,
            name: event.target.value,
        }));
        // setName(event.target.value);
    };

    const onChangePassword = (event) => {
        // setData((currentData) => {
        //     return { name: currentData.name, password: event.target.value };
        // });
        
        setData((currentData) => ({
            ...currentData,
            password: event.target.value
        }));

        // setPassword(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={onChangeName} />
            <input type="password" onChange={onChangePassword} />

            <p>Ваше имя: {data.name}</p>
            <p>Ваш пароль: {data.password}</p>
        </div>
    )
};

export default App;
