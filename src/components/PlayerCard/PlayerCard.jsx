import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const PlayerCard = ({player}) => {
    return (
        <div className="card bg-base-100  shadow-sm p-3 ">
              <figure>
                <img className=' '
                  src={player.playerImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <FaUser /> {player.playerName}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-2">
                    <FaFlag /> <p>{player.country}</p>
                  </div>
                  <button className="btn">{player.playerType}</button>
                </div>
                <div className="divider my-1"></div>

                <h2 className="font-bold">Rating ({player.rating})</h2>
                <div className="flex justify-between items-center gap-16 font-bold">
                  <p>{player.battingStyle}</p>
                  <p className='text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Price: ${player.price}</p>
                  <button className="btn btn-soft py-1 px-2">
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
    );
};

export default PlayerCard;