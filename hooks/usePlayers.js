import { useQuery, useMutation } from 'react-query';

export default function usePlayers() {
    return useQuery(
        'players',
        getPlayers,
        {
            notifyOnChangeProps: ['data', 'error'],
            retry: 3,
            refetchOnWindowFocus: false
        }
    )
}

const getPlayers = async () => {
    const response = await fetch('/api/players')

    if (!response.ok) {
        throw new Error('Something went wrong when fetching players.')
    }

    return response.json();
}
