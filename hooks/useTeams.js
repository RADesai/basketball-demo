import { useQuery } from 'react-query';

export default function useTeams() {
    return useQuery(
        'teams',
        getTeams,
        {
            retry: 3,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    )
}


const getTeams = async () => {
    const response = await fetch('/api/teams')

    if (!response.ok) {
        throw new Error('Something went wrong when fetching teams.')
    }

    return response.json();
}
