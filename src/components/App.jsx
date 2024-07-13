import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom"; 
import { Root, Toolbar, Content } from "./styles";
import { Actors, Movies, MovieInformation, NavBar, Profile } from "./"

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <NavBar />
      <Content>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
    </Root>
  )
}

export default App
