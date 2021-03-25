import { useMutation, QueryClient } from 'react-query';

const queryClient = new QueryClient()

export default function useUpdatePlayer() {
    return useMutation(updatePlayer)
}

const updatePlayer = async (newPlayer) => {
    const response = await fetch(`/api/players/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer)
    })

    if (!response.ok) {
        throw new Error('Something went wrong during trade.')
    }

    return true;
}
