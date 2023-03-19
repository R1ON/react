// import UserName from './UserName';

// import './index.css';


// let USERS = [
//     { id: 1, name: 'Alex', surname: 'test', age: 20, passportId: 123 },
//     { id: 2, name: 'Alex', surname: 'test2', age: 20, passportId: 66 },
//     { id: 3, name: 'John', surname: 'test2', age: 56, passportId: 123 },
//     { id: 4, name: 'Bob', surname: 'test3', age: 10, passportId: 50 },
// ];

// const App = () => {
//     const [_, forceUpdate] = React.useReducer(x => x + 1, 0);

//     const changeName = (id, newName) => {
//         console.log(id, newName);
//         USERS = USERS.map((user) => {
//             if (user.id === id) {
//                 return {
//                     id: user.id,
//                     name: newName,
//                     surname: user.surname,
//                     age: user.age,
//                     passportId: user.passportId,
//                 };
//             }

//             return user;
//         });

//         console.log(USERS);
//         forceUpdate();
//     };

//     const data = [];
//     USERS.forEach((user) => {
//         const key = generateKey(user);

//         data.push(
//             <div key={key}>
//                 <UserName
//                     userId={user.id}
//                     userName={user.name}
//                     userSurname={user.surname}
//                     userAge={user.age}
//                     changeName={changeName}
//                 />
//             </div>
//         );
//     })

//     return (
//         <div>
//             {data}
//         </div>
//     );
// };

// function generateKey(user) {
//     return `${user.name}_${user.surname}_${user.age}_${user.passportId}`;
// }


import React from 'react';
import Poster from './Poster';

const MOVIES = [
    {
        id: 1,
        name: 'Про мужика',
        description: 'Про какого-то мужика, который что-то сделал',
        img: 'https://festagent.com/system/tilda/tild6137-6632-4661-a361-613336646361__e4fac156b38cab487ec4.jpg'
    },
    {
        id: 2,
        name: 'Про мужика с медведем',
        description: 'Медведь читает газету',
        author: { name: 'John' },
        img: 'https://www.film.ru/sites/default/files/images/crobn_013h_g_spa-ar_70x100_002_nuevo.jpg' 
    },
    {
        id: 3,
        name: 'Про мужика-акулу',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMW66ta222_snvsmRO9GlNgMz2oi9DtDYnT2HpvDFeSrvLANwYu1xjzeS-OjV-MKu3Pk&usqp=CAU'
    },
];

const App = () => {
    return (
        <div>
            {MOVIES.map((movie) => (
                <Poster
                    key={movie.id}
                    name={movie.name}
                    description={movie.description}
                    author={movie.author}
                    img={movie.img}
                />
            ))}
        </div>
    );
};

export default App;
