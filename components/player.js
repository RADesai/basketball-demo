import React from 'react'
import Image from 'next/image'

const displayStat = (stat) => stat ? Number(stat).toFixed(1) : 'N/A'

const getStats = ({ pts, reb, ast, stl }) => (
    <div className="hidden md:inline-block text-xs mx-auto">
        PTS: {displayStat(pts)} &middot; REB: {displayStat(reb)} &middot; AST: {displayStat(ast)} &middot; STL: {displayStat(stl)}
    </div>
)

export default function Player({ player, tradeBlock, setTradeBlock }) {
    const isOnTradeBlock = !!tradeBlock.find(p => p.pid === player.pid)
    return (
        <button
            key={player.pid}
            className={ `flex w-full align-middle my-1 border-l-4 border-r-4 hover:bg-gray-100 ${isOnTradeBlock ? 'bg-gray-100 border-NBA-RED' : ''}` }
            onClick={() => setTradeBlock(isOnTradeBlock ? tradeBlock.filter(p => p.pid !== player.pid) : [...tradeBlock, player])}
        >
            <Image src={player.headshot} alt={player.slug || 'player-headshot'} height="64" width="64" className="float-left absolute" />
            <div className="mx-auto">
                <span className="text-md text-left float-left">{player.fn} {player.ln}</span>
                <span className="text-sm md:float-right text-NBA-RED block">{player.pos} | {player.num}</span>
                <span className="hidden md:block"><br/></span>
                {getStats(player)}
                </div>
        </button>
    )
}
