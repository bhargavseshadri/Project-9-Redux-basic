import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);


  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}

      <Counter />
    </Fragment>
  );
}

export default App;


//REDUX STEP = 6 (so here we are rendering the counter component so we can use our REDUX in "counter component")  go to counter.js