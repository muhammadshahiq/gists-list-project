
import './App.css';
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { Container } from '@mui/material';
import { useState } from 'react';
import debounce from 'lodash/debounce';
import Footer from './components/footer';

const App = () => {
  //creating a search value state to send searchInput value to gistList
  //This type of passing data is only for this test purpose, otherwise all data wrap up on the redux and than send to components

  const [searchValue, setSearchValue] = useState('');
  const onSearch = debounce((event) => {
    setSearchValue(event.target.value);
  }, 500);

  //I Used two more frameworks material UI and bootstrap to show their skills set in this test otherwise,
  //I will work on the project suitable framework

  return (
    <Wrapper className="App" data-testid="app">
      <Container maxWidth='xl'>
        <Header onChange={onSearch} />
        <GistList username={searchValue} />
        <Footer />
      </Container>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  background-color: #000;
  color: #ffffff;
`;

export default App;
