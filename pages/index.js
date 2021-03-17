import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Image from 'next/image'

import Loader from './loader'
import TradeSetup from './tradeSetup'
import { getAllTeams, getAllPlayers } from './services'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function Home() {
  const { isLoading: loadingPlayers, error: playerError, data: playerData, isError: isPlayerFetchError } = useQuery('players', getAllPlayers)
  const { isLoading: loadingTeams, error: teamError, data: teamData, isError: isTeamFetchError } = useQuery('teams', getAllTeams)
  if (loadingPlayers || loadingTeams) return <Loader />;
  if (isPlayerFetchError) return 'A Player error has occurred: ' + playerError.message
  if (isTeamFetchError) return 'A Team error has occurred: ' + teamError.message
  // console.log('** DATA RECEIVED **');
  // console.log('players ->', playerData);
  // console.log('teams ->', teamData);
  return (
    <>
      <div className="text-4xl text-center">
        <div className="bg-gradient-to-t from-white via-purple-50 to-purple-500 pb-5">
          <br/>
          NBA TRADE DEMO
        </div>
          <Image src="/assets/logo.png" alt="NBA DEMO logo" height="96" width="96" />
        { playerData && teamData && <TradeSetup players={playerData} teams={teamData} /> }
      </div>
    </>
  )
}
