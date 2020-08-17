import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import Home from '@screens/Home';
import Ranking from '@screens/Ranking';
import Torneos from '@screens/Torneos';

import LamfoContext from '@context/LamfoContext';

import {getTop10, getUltimaFecha, getPosiciones} from '@services/lamfoService';

//import styles from './styles';

const AppStack = createStackNavigator();

const App = () => {
  const [rankingData, setRankingData] = useState([]);
  const [ultimaData, setUltimaData] = useState([])
  const [posicionesData, setPosicionesData] = useState([])

  //const getRanking = async () => setRankingData(await getTop10());
  const getUltimas = async () => {
    let ultima = [];
    let posiciones = [];
    for (let i = 1; i < 4; i++) {
      ultima.push(await getUltimaFecha(i));
      posiciones.push(await getPosiciones(i));
    }
    setRankingData(await getTop10());
    setUltimaData(ultima);
    //console.warn("ultima data valeee ?????");
    //console.warn(ultimaData[0]);
    setPosicionesData(posiciones);
    //console.warn(ultimaData[0].torneo);
    //console.warn(posicionesData[0].torneo);
    
  }

  useEffect(()=>{
    //getRanking();
    getUltimas();
  },[]);

  return (
    <LamfoContext.Provider value={
      {
        datos: rankingData.data,
        torneo: {
          ultima: ultimaData,
          posiciones: posicionesData,
        }
      }
    }>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen 
            name="Ranking" 
            component={Ranking} 
            options={{
              title: 'Ranking de Managers',
              headerTitleAlign: {
                alignItems: 'center',
              },
              headerStyle: {
                height: 50,
              }
            }}
          />
          <AppStack.Screen 
            name="Torneos" 
            component={Torneos} 
            options={{
              title: 'Torneos',
              headerTitleAlign: {
                alignItems: 'center',
              },
              headerStyle: {
                height: 50,
              }
            }}
          />
          <AppStack.Screen 
            name="Home"
            component={Home} 
            options={{
              title: 'Lamfo App 0.1.0',
              headerTitleAlign: {
                alignItems: 'center',
              },
              headerStyle: {
                height: 50,
              },
            }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </LamfoContext.Provider>
  );
};
export default App;

// Comandos para iniciar la ejecución:
// npx react-native start
// npx react-native run-android
