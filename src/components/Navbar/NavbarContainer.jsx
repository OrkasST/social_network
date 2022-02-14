import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';

const NavbarContainer = () => {
  
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState();
        return (
          <Navbar data={state.navbar} />
        )
      }
    }</StoreContext.Consumer>
  )
}
export default NavbarContainer;
