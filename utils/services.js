export const getAllPlayers = async () => {
    const playerResponse = await fetch('api/players')

    if (!playerResponse.ok) {
        throw new Error("Couldn't fetch players.");
    }

    return playerResponse.json();
}

export const getAllTeams = async () => {
    const teamResponse = await fetch('api/teams')

    if (!teamResponse.ok) {
        throw new Error("Couldn't fetch teams.");
    }

    return teamResponse.json();
}
