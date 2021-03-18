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
            <div className="min-h-20">
            {
                teamsSet && <div className="grid grid-cols-7 p-2">
                    <div className="col-span-3 text-2xl font-light pt-1">
                        {left.city} {left.name}
                    </div>
                    <div className="col-span-1">
                        <Image src="/assets/bounce.png" alt="scroll-down-icon" height="64" width="64" className="" />
                    </div>
                    <div className="col-span-3 text-2xl font-light pt-1">
                        {right.city} {right.name}
                    </div>
                </div>
            }
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 font-light bg-purple-50 p-10">
                <div className="col-span-1 text-lg align-middle px-2 py-8 text-purple-900 mx-auto">
                    <select className="border rounded-md p-1 border-purple-400 bg-purple-50 font-bold" onChange={(e) => setLeft(findTeam(teams, e.target.value))} placeholder="Select Team 1">
                        { teams.map((team) => <option value={team.tid} key={team.tid}>{team.name}</option>) }
                    </select>
                    <img src={left.logo} />
                </div>
                <div className="col-span-1 text-lg align-middle px-2 py-8 text-purple-900 mx-auto">
                    <select className="border rounded-md p-1 border-purple-400 bg-purple-50 font-bold" onChange={(e) => setRight(findTeam(teams, e.target.value))} placeholder="Select Team 2">
                        { teams.map((team) => <option value={team.tid} key={team.tid}>{team.name}</option>) }
                    </select>
                    <img src={right.logo} />
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
                    <Image src="/assets/logo.png" alt="NBA DEMO logo" height="256" width="256" />
                </div>
            </div>
        </div>
    )
}

// TradeSetup.propTypes = {
//     players:
// }

export default TradeSetup
