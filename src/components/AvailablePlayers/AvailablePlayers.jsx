import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';



const AvailablePlayers = ({players}) => {
    
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {players.map((player) => {
          return <PlayerCard player={player}></PlayerCard>
        })}
      </div>
    );
};

export default AvailablePlayers;