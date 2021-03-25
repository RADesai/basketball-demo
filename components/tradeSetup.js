import React, { useState } from 'react'
import Image from 'next/image'
import { QueryClient } from 'react-query'

import Error from '../components/error'
import useUpdatePlayer from '../hooks/useUpdatePlayer'

const findTeam = (teams, teamId) => (
    teams.filter(team => team.tid === Number(teamId))[0]
);
const queryClient = new QueryClient()
function TradePreview({tradeBlock, leftCode, rightCode, setTradeBlock}) {
    const playerMutate = useUpdatePlayer() // useMutation() returns: { mutate, status, reset }
    // status: string
    //     Will be:
    //     idle initial status prior to the mutation function executing.
    //     loading if the mutation is currently executing.
    //     error if the last mutation attempt resulted in an error.
    //     success if the last mutation attempt was successful.
    // isIdle, isLoading, isSuccess, isError
    // console.log('playerMutate:', playerMutate)

    const trade = async (newPlayer) => {
        await playerMutate.mutateAsync(newPlayer)
    }

    const executeTrade = (tradeBlock) => {
        // console.log('** executing trade **', tradeBlock);
        tradeBlock.forEach(tradedAway => {
            const playerWithNewTeam = { ...tradedAway, ta: tradedAway.ta === leftCode ? rightCode : leftCode }

            trade(playerWithNewTeam)
            queryClient.invalidateQueries('players');
        });
    }

    return (
        <div>
            {/* { playerMutate.isError ? <Error /> : */}
                    <button
                        disabled={playerMutate.isLoading}
                        onClick={() => executeTrade(tradeBlock)}
                        className="text-2xl uppercase mb-2 p-2 w-60 hover:bg-purple-50 duration-150 font-bold tracking-wide focus:tracking-widest hover:tracking-widest"
                    >
                        Execute Trade
                    </button>
            {/* } */}
        </div>
    )
}

const getPlayer = (player, tradeBlock, setTradeBlock) => {
    const isOnTradeBlock = !!tradeBlock.find(p => p.pid === player.pid)
    return (
        <button
            key={player.pid}
            className={ `p-2 m-1 hover:bg-purple-100 border w-full text-nba-${player.ta} ${isOnTradeBlock ? 'bg-purple-200 border-purple-400 border-l-4 border-r-4' : ''}` }
            onClick={() => setTradeBlock(
                isOnTradeBlock ? tradeBlock.filter(p => p.pid !== player.pid) : [...tradeBlock, player]
            )}
        >
            {player.fn} {player.ln}, {player.pos} | {player.num}
            <Image src={player.headshot} alt={player.slug || 'player-headshot'} height="64" width="64" className="float-right" />
            <span className="hidden md:block">PTS: {player.pts} REB: {player.reb} AST: {player.ast} STL: {player.stl}</span>
        </button>
    )
}

const getRoster = (team, players, side) => {
    console.log(team.name, '- rendering roster...');
    return players
        .filter(player => player.ta === team.ta)
        .map(player => ({ ...player, color: team.color, side }));
}

const Roster = (roster, tradeBlock, setTradeBlock) => {
    return (
        <div className="xs:col-span-1 lg:col-span-2">
            <div className="max-h-96 overflow-y-scroll p-2">
                {roster.map(player => getPlayer(player, tradeBlock, setTradeBlock))}
            </div>
        </div>
    );
}

const Team = (team, setTeam, teams) => (
    <div className="xs:col-span-1 lg:col-span-2 text-lg text-purple-900">
        <img src={team.logo} className="mx-auto"/>
        <select className="border rounded-md p-1 border-purple-400 bg-purple-50 font-bold" onChange={(e) => setTeam(findTeam(teams, e.target.value))} placeholder="Select Team">
            <option value="" disabled selected>Select Team</option>
            { teams.map((team) => <option value={team.tid} key={team.tid}>{team.city} {team.name}</option>) }
        </select>
    </div>
);

function TradeSetup({ players, teams }) {
    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const [isTrading, setIsTrading] = useState(false)
    const [tradeBlock, setTradeBlock] = useState([]);

    const tradeEligible = tradeBlock.length > 0;

    const teamsSet = left && right && (left.tid !== right.tid);
    return (
        <div className="text-center">
            <div className="grid place-items-center xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 font-light bg-purple-50 p-10 shadow-xl">
                { isTrading ? Roster(getRoster(left, players, 'left'), tradeBlock, setTradeBlock)
                    : Team(left, setLeft, teams) }
                <div className="col-span-1 my-10">
                { teamsSet && !tradeEligible &&
                    <Image src="/assets/bounce.png" alt="scroll-down-icon" height="64" width="64" />
                }
                { tradeEligible && <TradePreview
                    tradeBlock={tradeBlock}
                    setTradeBlock={setTradeBlock}
                    leftCode={left.ta}
                    rightCode={right.ta}
                /> }
                </div>
                { isTrading ? Roster(getRoster(right, players, 'right'), tradeBlock, setTradeBlock)
                    : Team(right, setRight, teams) }
            </div>
            <div className="mt-10">
            {
                !isTrading && teamsSet &&
                    <button onClick={() => setIsTrading(true)} className="text-2xl uppercase mb-2 p-2 w-60 hover:bg-purple-50 duration-150 font-bold tracking-wide focus:tracking-widest hover:tracking-widest">
                        <div className="mr-2 inline align-top">Continue</div>
                    </button>
            }
            </div>
        </div>
    )
}

export default TradeSetup
