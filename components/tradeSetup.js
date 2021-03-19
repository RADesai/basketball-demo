import React, { useState } from 'react'
import Image from 'next/image'

const findTeam = (teams, teamId) => (
    teams.filter(team => team.tid === Number(teamId))[0]
);

const getPlayer = (player) => (
    <button className="p-2 m-1 hover:bg-purple-100 border w-full">
        {player.fn} {player.ln}, {player.pos} | {player.num} <span className="hidden md:block">PTS: {player.pts} REB: {player.reb} AST: {player.ast} STL: {player.stl}</span>
        <Image src={player.headshot} alt={player.slug || 'player-headshot'} height="64" width="64" className="float-right" />
    </button>
);

const getRoster = (team, players) => {
    // console.log('roster ->', players.filter(player => player.ta === team.ta))
    return players
        .filter(player => player.ta === team.ta)
        .map(player => ({ ...player, color: team.color }));
}

const Roster = (roster) => {
    // console.log("roster:", roster);
    return (
        <div className="xs:col-span-1 lg:col-span-2 text-purple-900">
            <div className="max-h-96 overflow-y-scroll">
                {roster.map(player => getPlayer(player))}
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

    const teamsSet = left && right && (left.tid !== right.tid);
    return (
        <div className="text-center">
            <div className="grid place-items-center xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 font-light bg-purple-50 p-10 shadow-xl">
                { isTrading ? Roster(getRoster(left, players))
                    : Team(left, setLeft, teams) }
                <div className="col-span-1 my-10">
                { teamsSet &&
                    <Image src="/assets/bounce.png" alt="scroll-down-icon" height="64" width="64" />
                }
                </div>
                { isTrading ? Roster(getRoster(right, players))
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

// TradeSetup.propTypes = {
//     players:
// }

export default TradeSetup
