import { useQuery } from 'react-query';

export default function usePlayers() {
    return useQuery(
        'posts',
        () => fetch('/api/players').then((res) => res.json()),
    )
}
