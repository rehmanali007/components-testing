import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography'
import PrimarySearchAppBar from './components/Appbar'
import MyContainer from './components/Container'

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <MyContainer>
        <Typography variant='h2'>Control Panel</Typography>
      </MyContainer >
    </>
  );
}

export default App;
