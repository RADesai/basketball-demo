import React, { useState } from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'

const findTeam = (teams, teamId) => (
    teams.filter(team => team.tid === Number(teamId))[0]
);

function TradeSetup({ players, teams }) {
    const [left, setLeft] = useState('')
    const [right, setRight] = useState('')

    const teamsSet = left && right && (left.tid !== right.tid);
    return (
        <div className="text-purple-800 text-center">
            <div className="grid place-items-center xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 font-light bg-purple-50 p-10 shadow-xl">
                <div className="xs:col-span-1 lg:col-span-2 text-lg text-purple-900">
                    <img src={left.logo} className="mx-auto"/>
                    <select className="border rounded-md p-1 border-purple-400 bg-purple-50 font-bold" onChange={(e) => setLeft(findTeam(teams, e.target.value))} placeholder="Select Team 1">
                        <option value="" disabled selected>Select Team 1</option>
                        { teams.map((team) => <option value={team.tid} key={team.tid}>{team.city} {team.name}</option>) }
                    </select>
                </div>
                <div className="col-span-1 my-10">
                { teamsSet &&
                    <Image src="/assets/bounce.png" alt="scroll-down-icon" height="64" width="64" />
                }
                </div>
                <div className="xs:col-span-1 lg:col-span-2 text-lg text-purple-900">
                    <img src={right.logo} className="mx-auto"  />
                    <select className="border rounded-md p-1 border-purple-400 bg-purple-50 font-bold" onChange={(e) => setRight(findTeam(teams, e.target.value))} placeholder="Select Team 2">
                        <option value="" disabled selected>Select Team 2</option>
                        { teams.map((team) => <option value={team.tid} key={team.tid}>{team.city} {team.name}</option>) }
                    </select>
                </div>
            </div>
            <div className="mt-10">
            {
                teamsSet &&
                <button className="text-2xl uppercase mb-2 p-2 w-60 hover:bg-purple-50 duration-150 font-bold tracking-wide focus:tracking-widest hover:tracking-widest">
                    <div className="mr-2 inline align-top">Continue</div>
                </button>

            }
                <div>
                    <Image src="/assets/logo.png" alt="NBA DEMO logo" height="256" width="256" className="hover:animate-bounce" />
                </div>
            </div>
        </div>
    )
}

// TradeSetup.propTypes = {
//     players:
// }

export default TradeSetup
