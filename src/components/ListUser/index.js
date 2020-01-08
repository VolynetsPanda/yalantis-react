import React from 'react';

const ListUser = ({users}) => (
    <ul className='month-wrap-item-inner'>{
        users.map(elem=>(
            <li key={elem.id}>{elem.firstName}</li>
        ))
    }
    </ul>
)

export default ListUser;
