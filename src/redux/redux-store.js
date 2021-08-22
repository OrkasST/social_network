import { combineReducers, createStore }  from 'redux';
import profileReducer from './profile_reducer';
import messagesReducer from './messages_reducer';
import navbarReducer from './navbar_reducer';
import newsReducer from './news_reducer';
import musicReducer from './music_reducer';
import settingsReducer from './settings_reducer';


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    newsPage : newsReducer,
    musicPage : musicReducer,
    settingsPage : settingsReducer,
    navbar : navbarReducer
})

let store = createStore(reducers);

export default store;