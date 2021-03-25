import React, { useState } from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Error from '../components/error'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
  const playersMutation = usePlayers()
  const teamsQuery = useTeams()

  if (playersMutation.isLoading || teamsQuery.isLoading) return <Loader />;
  if (playersMutation.isError || teamsQuery.isError) return <Error />

  return (
    <>
      <div className="text-center text-purple-800 pb-40">
        <Header isFetching={queryClient.isFetching()} />
        { playersMutation.data && teamsQuery.data && <TradeSetup players={playersMutation.data} teams={teamsQuery.data} /> }
        <Footer />
      </div>
    </>
  )
}

// TODO:
// FUNCTIONALITY
//   - trade redirect?/summary?
////   - trade confirmation/cancellation
// ENHANCE
// - extract common style patterns
// - extract header+footer to common layout component
// - DRY code
// - common responsive trade layout
// - team #color themes
// - draft picks, cash considerations for trading
// - data viz
// - lazy loading
// - extract imgs
// - 3/4 way trades
