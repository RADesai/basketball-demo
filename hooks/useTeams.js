import { useQuery } from 'react-query';

export default function useTeams() {
    return useQuery(
        'teams',
        () => fetch('/api/teams').then((res) => res.json()),
    )
}
