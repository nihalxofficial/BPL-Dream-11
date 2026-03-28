import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const players = use(playerPromise)  
    
    const [selectedType, setSelectedType] = useState("available")
    
    return (
        <div className='w-11/12 mx-auto'>

            <div className='flex justify-between items-center mb-6'>
                {selectedType === "available"? <h2 className='font-bold text-2xl'>Available Players</h2>
                : <h2 className='font-bold text-2xl'>Selected Players (0/6)</h2>}
                <div className='flex items-center'>
                    <button onClick={()=>setSelectedType("available")} className={`btn ${selectedType ==="available"? "btn-primary" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType ==="selected"? "btn-primary" : ""} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                </div>
            </div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>

    );
};

export default Players;