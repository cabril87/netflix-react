import './App.css';
import React from 'react'
import Row from './components/Row'
import requests from './api/request'
import Banner from './components/Banner'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
       />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  )
}

export default App


