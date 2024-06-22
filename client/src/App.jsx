import { useContext, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import {
    Masthead, 
    Home, 
    About,
    Factions,
    Creators, 
  } from './components/PublicStructure.jsx'

import { CommentSection } from './components/PrivateStructure.jsx'

import { ProtectedRoute } from './components/ProtectedRoute.jsx'
   
import { CreatorDetails, FactionDetails } from './components/DetailPages.jsx'

import './App.css'
import { AuthPage } from './components/AuthPage.jsx'
import { UserContext } from './components/context/UserContext.jsx'

function App() {
  const {token} = useContext(UserContext)  

  return (
    <>
      <Masthead/>

      
      
      
    {/*  For Each Route Make two: a Public Page (Public View(pv)) for non-token bearers and a Private Page (Private View(priv)) for users who bear a token */}
      <Routes>

        {/* Public Home */}
        <Route path={'/'} element={ <Home/>}/>
        
        {/* Sign Up Page */}
        <Route path={'/signup'} element={<AuthPage/>}/>
        
        {/* Public About */}
        <Route path={'/about'} element={<About/>}/>
        
        {/* Public Faction List */}
        <Route path={'/factions'} element={<Factions/>}/>
        
        {/* Public Faction Details */}
        <Route path={'/factions/:factionId'} element={<FactionDetails/>}/>
        
        {/* Public Creators List */}
        <Route path={'/creators'} element={<Creators/>}/>
        
        {/* Public Creator Details */}
        <Route path={'/creators/:creatorId'} element={<CreatorDetails/>}/>
        
        {/* Public Comment Section Details */}
        <Route path={'/comment-section'} element={<CommentSection/>}/>
        
        {/* Public Creator Details
        <Route path={`/comment-section`} element={
            <ProtectedRoute token={token}>
              <CommentSection/>
            </ProtectedRoute>
          }/> */}

      </Routes>
    </>
  )
}

export default App
