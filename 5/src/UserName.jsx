import React from 'react';

const UserName = (props) => {
    console.log(props);
    return (
        props.userAge > 20 ? (
            <p className='hfueiqfheq'>
                {props.userName}
                <button>Изменить имя</button>
            </p>
        ): (
            <p className='hfueiqfheq'>{props.userName} {props.userSurname}</p>
        )
    );
};

export default UserName;
