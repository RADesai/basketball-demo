import { useQuery } from 'react-query';

export default function usePlayers() {
    return useQuery(
        'players',
        () => fetch('/api/players').then((res) => res.json()),
    )
}
