import React from 'react';

const SelectedPlayers = ({selectedPlayers}) => {
    return (
        <div>
            {selectedPlayers.map(player=> {
                return <h2>{player.playerName}</h2>
            })}
        </div>
    );
};

export default SelectedPlayers;