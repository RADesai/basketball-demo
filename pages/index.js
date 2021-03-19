import React, { useState } from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
  const playersQuery = usePlayers()
  const teamsQuery = useTeams()

  if (playersQuery.isLoading || teamsQuery.isLoading) return <Loader />;
  if (playersQuery.isError) return 'Error fetching Player(s) has occurred: ' + playersQuery.error.message
  if (teamsQuery.isError) return 'Error fetching Team(s) has occurred: ' + teamsQuery.error.message

  return (
    <>
      <div className="text-center text-purple-800 pb-40">
        <Header isFetching={queryClient.isFetching()} />
        { playersQuery.data && teamsQuery.data && <TradeSetup players={playersQuery.data} teams={teamsQuery.data} /> }
        <Footer />
      </div>
    </>
  )
}

// TODO:
// FUNCTIONALITY
//   - select/deselect players for trade
//   - execute trade (update teams & players... redirect?, summary?)
// ENHANCE
// - extract common style patterns
// - extract header+footer to common layout component
// - DRY code
// - common responsive trade layout
// - team #color themes
// - data viz
// - lazy loading
// - hosted imgs
