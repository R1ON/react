import React from 'react';

import './index.css';


const USERS = [
    { name: 'Alex', surname: 'test', age: 20, passportId: 123 },
    { name: 'Alex', surname: 'test2', age: 20, passportId: 66 },
    { name: 'John', surname: 'test2', age: 56, passportId: 123 },
    { name: 'Bob', surname: 'test3', age: 10, passportId: 50 },
];

const App = () => {
    const data = [];
    USERS.forEach((user) => {
        const key = generateKey(user);

        data.push(
            <div key={key}>
                <p>{user.name}</p>
            </div>
        );
    })

    return (
        <div>
            {data}
        </div>
    );
};

function generateKey(user) {
    return `${user.name}_${user.surname}_${user.age}_${user.passportId}`;
}

export default App;
