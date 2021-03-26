import React from 'react'

import Loader from './loader'
import useUpdatePlayer from '../hooks/useUpdatePlayer'

export default function TradePreview({ tradeBlock, leftCode, rightCode, resetTradeBlock }) {
    const playerMutate = useUpdatePlayer()

    const trade = async (newPlayer) => {
        await playerMutate.mutateAsync(newPlayer)
    }

    const executeTrade = (tradeBlock) => {
        tradeBlock.forEach(tradedAway => {
            const playerWithNewTeam = { ...tradedAway, ta: tradedAway.ta === leftCode ? rightCode : leftCode }
            trade(playerWithNewTeam)
        });
    }

    if (playerMutate.isSuccess) {
        resetTradeBlock()
    }

    return (playerMutate.isLoading
        ? <div className=""><Loader isMini={true} /></div>
        : <button
            disabled={playerMutate.isLoading}
            onClick={() => executeTrade(tradeBlock)}
            className="text-2xl uppercase mb-2 p-2 w-60 hover:bg-gray-50 duration-150 font-bold tracking-wide focus:tracking-widest hover:tracking-widest"
        >
            Execute Trade
        </button>
    )
}
