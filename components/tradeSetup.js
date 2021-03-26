import React, { useState } from 'react'
import Image from 'next/image'

import Roster from './roster'
import TradePreview from './tradePreview'

const findTeam = (teams, teamId) => teams.filter(team => team.tid === Number(teamId))[0]

const getRoster = (team, players, side) => players
    .filter(player => player.ta === team.ta)
    .map(player => ({ ...player, color: team.color, side }));

function TeamSelect({ team, setTeam, teams }) {
    return (
        <div className="xs:col-span-1 lg:col-span-2 text-lg text-NBA-RED mb-4">
            <img src={team.logo} className="mx-auto"/>
            <select className="border rounded-md p-1 border-NBA-BLUE bg-gray-50 font-bold" onChange={(e) => setTeam(findTeam(teams, e.target.value))} placeholder="Select Team">
                <option value="" disabled selected>Select Team</option>
                { teams.map((team) => <option value={team.tid} key={team.tid}>{team.city} {team.name}</option>) }
            </select>
        </div>
    );
}

function TradeSetup(props) {
    const { players, teams, query } = props;
    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const [isTrading, setIsTrading] = useState(false)
    const [tradeBlock, setTradeBlock] = useState([]);

    const tradeEligible = tradeBlock.length > 0;

    const teamsSet = left && right && (left.tid !== right.tid);

    const resetTradeBlock = () => {
        query.invalidateQueries('players')
        setTradeBlock([])
    }

    return (
        <div className="text-center">
            <div className="grid place-items-center xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 font-light shadow-xl">
                { isTrading
                    ? <Roster name={left.name} roster={getRoster(left, players, 'left')} tradeBlock={tradeBlock} setTradeBlock={setTradeBlock} />
                    : <TeamSelect team={left} setTeam={setLeft} teams={teams} />
                }
                <div className="col-span-1 my-10">
                { teamsSet && !tradeEligible &&
                    <Image src="/assets/logo.png" alt="trade-icon" height="64" width="64" />
                }
                { tradeEligible && <TradePreview
                    tradeBlock={tradeBlock}
                    resetTradeBlock={resetTradeBlock}
                    leftCode={left.ta}
                    rightCode={right.ta}
                /> }
                </div>
                { isTrading
                    ? <Roster name={right.name} roster={getRoster(right, players, 'right')} tradeBlock={tradeBlock} setTradeBlock={setTradeBlock} />
                    : <TeamSelect team={right} setTeam={setRight} teams={teams} />
                }
            </div>
            <div className="mt-10">
            {
                !isTrading && teamsSet &&
                    <button onClick={() => setIsTrading(true)} className="text-2xl uppercase mb-2 p-2 w-60 hover:bg-gray-50 duration-150 font-bold tracking-wide focus:tracking-widest hover:tracking-widest">
                        <div className="mr-2 inline align-top">Continue</div>
                    </button>
            }
            </div>
        </div>
    )
}

export default TradeSetup
