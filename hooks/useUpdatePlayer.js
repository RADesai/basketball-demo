import axios from 'axios';
import { useMutation, queryCache } from 'react-query';

export default function useSavePlayer() {
    return useMutation((newPlayer) =>
        axios.patch(`/api/players/${newPlayer.pid}`, newPlayer).then((res) => res.data),
        {
        onMutate: (newPlayer) => {
            // update the data
            queryCache.setQueryData(['players', newPlayer.pid], newPlayer);
        },
        onSuccess: (newPlayer) => {
            queryCache.setQueryData(['players', newPlayer.pid], newPlayer);

            if (queryCache.getQueryData('players')) {
                queryCache.setQueryData('players', (old) =>
                    old.map((d) => {
                        if (d.pid === newPlayer.pid) {
                            return newPlayer;
                        }
                        return d;
                    })
                );
            } else {
            queryCache.setQueryData('players', [newPlayer]);
            queryCache.invalidateQueries('players');
            }
        },
    });
}
