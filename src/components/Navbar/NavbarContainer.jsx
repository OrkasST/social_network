import React from 'react';
// import StoreContext from '../../StoreContext';
import Navbar from './Navbar';
import {connect} from 'react-redux';


// const NavbarContainer = () => {
  
//   return (
//     <StoreContext.Consumer>{
//       (store) => {
//         let state = store.getState();
//         return (
//           <Navbar data={state.navbar} />
//         )
//       }
//     }</StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    data: state.navbar
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
