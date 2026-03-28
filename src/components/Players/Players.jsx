import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const players = use(playerPromise)    
    
    return (
        <div className='w-11/12 mx-auto'>
            <AvailablePlayers players={players}></AvailablePlayers>
            
        </div>
    );
};

export default Players;