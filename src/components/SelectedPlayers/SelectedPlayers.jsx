import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";



const SelectedPlayers = ({selectedPlayers}) => {
    return (
        <div className='space-y-5'>
            {selectedPlayers.map((player, index)=> {
                return <div key={index} className='flex items-center justify-between gap-6 p-5 rounded-2xl shadow-sm'>
                    <div className='flex justify-between items-center gap-4'>
                        <img className='w-20 h-20 ' src={player.playerImg} alt="" />
                        <div>
                            <h2 className='font-bold text-xl flex justify-between items-center gap-2'><FaUser /> {player.playerName}</h2>
                            <p className=' text-gray-600 flex items-center gap-2' ><MdOutlineSportsCricket /> {player.playerType}</p>
                        </div>

                    </div>
                    <button>< MdDelete className='cursor-pointer text-2xl text-red-600' /></button>
                </div>
            })}
        </div>
    );
};

export default SelectedPlayers;