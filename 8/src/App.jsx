import React from 'react';
import Poster from './Poster';
import BoxShadowWrapper from './Wrapper';

import './index.css';

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
        <BoxShadowWrapper>
            <div className="wrapper">
                {MOVIES.map((movie) => (
                    <BoxShadowWrapper key={movie.id}>
                        <Poster
                            name={movie.name}
                            description={movie.description}
                            author={movie.author}
                            img={movie.img}
                        />
                    </BoxShadowWrapper>
                ))}
            </div>
        </BoxShadowWrapper>
    );
};

export default App;
