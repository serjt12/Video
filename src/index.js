import React, {Component} from 'react';
import { render } from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDPqFS8Ms4RTbocgX9dPNBfZPQQDWcS_ns'



const App = () => (
   <div>
  <SearchBar />
  </div>
  
);

render(<App />, document.getElementById('root'));
