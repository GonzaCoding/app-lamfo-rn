import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';

import {Tab, Tabs, Content, Container, Text, Header, Footer} from 'native-base';
import {SafeAreaView, ScrollView, View, Image} from 'react-native';
import ResultTable from '@components/ResultTable';
import PositionTable from '@components/PositionTable';
import Torneo from '@components/Torneo';

import {useOrientation} from '../../hooks/useOrientation';
import LamfoContext from '@context/LamfoContext';
import styles from './styles';

const Torneos = () => {
  const {torneo} = useContext(LamfoContext);

  return (
    <Container>
      <Tabs>
        <Tab heading={torneo.posiciones[0].torneo}>
          <Torneo id={0}/>
        </Tab>
        <Tab heading={torneo.posiciones[1].torneo}>
          <Torneo id={1}/>
        </Tab>
        <Tab heading={torneo.posiciones[2].torneo}>
          <Torneo id={2}/>
        </Tab>
      </Tabs>
    </Container>
  );
};
export default Torneos;