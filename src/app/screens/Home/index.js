import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';

import {Button, Text, Container, Content, Header, Footer, Spinner} from 'native-base';
import {SafeAreaView, ScrollView, View, Image} from 'react-native';
import {useOrientation} from '../../hooks/useOrientation';

import styles from './styles';
import logo from '@assets/img/lamfo_l.png';

import LamfoContext from '@context/LamfoContext';

const Home = ({navigation}) => {
  const {torneo} = useContext(LamfoContext);
  //console.warn(torneo);

  const handleNavigateToRanking = () =>
    navigation.navigate('Ranking');

  const handleNavigateToTorneos = () =>
    navigation.navigate('Torneos');
    

  const orientation = useOrientation();

  return (
    <Container>
      <Content padder contentContainerStyle={[styles.container, orientation !== 'PORTRAIT' && styles.containerRow]}>
        <View style={styles.block}>
          <Image style={styles.logo} source={logo} resizeMode='contain' />
        </View>
        {(torneo.posiciones.length >=2) &&
          <View style={styles.block}>
          <Button block onPress={handleNavigateToRanking}>
            <Text>Ranking</Text>
          </Button>
          <Button block onPress={handleNavigateToTorneos}>
            <Text>Torneos</Text>
          </Button>
        </View>
        }
        {(torneo.posiciones.length <2) &&
          <Spinner color='blue' />
        }
        
      </Content>
    </Container>
  );
};
export default Home;
