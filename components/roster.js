import React from 'react'

import Player from './player'

export default function Roster({ name, roster, tradeBlock, setTradeBlock }) {
    return (
        <div className="xs:col-span-1 lg:col-span-2 shadow-md w-3/4">
            <div className="text-lg tracking-widest uppercase text-NBA-RED">{name}</div>
            <div className="max-h-96 overflow-y-scroll mx-auto">
                {roster.map(player =>
                    <Player
                        key={player.pid}
                        player={player}
                        tradeBlock={tradeBlock}
                        setTradeBlock={setTradeBlock}
                    />
                )}
            </div>
        </div>
    );
}
