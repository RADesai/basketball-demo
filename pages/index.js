import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/loader'
import TradeSetup from '../components/tradeSetup'
import { getAllTeams, getAllPlayers } from '../utils/services'

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
  if (isPlayerFetchError) return 'Error fetching Player(s) has occurred: ' + playerError.message
  if (isTeamFetchError) return 'Error fetching Team(s) has occurred: ' + teamError.message

  return (
    <>
      <div className="text-4xl text-center">
        <Header />
        { playerData && teamData && <TradeSetup players={playerData} teams={teamData} /> }
        <Footer />
      </div>
    </>
  )
}
