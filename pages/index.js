import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Error from '../components/error'
import Layout from '../components/layout'
import Loader from '../components/loader'
import TradeSetup from '../components/tradeSetup'

import usePlayers from '../hooks/usePlayers'
import useTeams from '../hooks/useTeams'

const history = createMemoryHistory();

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Route path="/" exact render={() => <Home/>} />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

function Home() {
  const playersQuery = usePlayers()
  const teamsQuery = useTeams()

  if (playersQuery.isLoading || teamsQuery.isLoading) return <Loader />;
  if (playersQuery.isError || teamsQuery.isError) return <Error />

  return (
    <Layout players={playersQuery.data} teams={teamsQuery.data} query={queryClient}>
      <TradeSetup/>
    </Layout>
  )
}

// ENHANCE
// - trim stats decimals
// - team #color themes
// - draft picks, cash considerations for trading
// - extract imgs

// NBA color scheme
  // Philippine Red - Hex: #C9082A
  // Dark Cornflower Blue - Hex: #17408B
// trade bank
