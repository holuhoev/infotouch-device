import React from "react";
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';

import './src/utils/axios';
import store from "./src/store";


import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenuScreen from "./src/components/screens/MainMenuScreen";
import PersonListScreen from "./src/components/screens/PersonListScreen";
import NewsListScreen from "./src/components/screens/NewsListScreen";
import EventsScreen from "./src/components/screens/EventsScreen";
import BuildingMapScreen from "./src/components/screens/map/BuildingMapScreen";
import ServiceListScreen from "./src/components/screens/ServiceListScreen";
import UnitListScreen from "./src/components/screens/UnitListScreen";



const MainNavigator = createStackNavigator({
  MainMenu:    { screen: MainMenuScreen },
  PersonList:  { screen: PersonListScreen },
  NewsList:    { screen: NewsListScreen },
  Events:      { screen: EventsScreen },
  BuildingMap: { screen: BuildingMapScreen },
  ServiceList: { screen: ServiceListScreen },
  UnitList:    { screen: UnitListScreen }
}, {
  initialRouteName: 'MainMenu'
});

const AppContainer = createAppContainer(MainNavigator);

moment.locale('ru');

const App = () => (
    <Provider store={ store }>
      <AppContainer/>
    </Provider>
);

export default App