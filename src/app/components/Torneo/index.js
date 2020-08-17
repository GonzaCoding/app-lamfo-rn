import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

import {Tab, Tabs, Content, Container, Text, Header, Footer} from 'native-base';
import {SafeAreaView, ScrollView, View, Image} from 'react-native';
import ResultTable from '@components/ResultTable';
import PositionTable from '@components/PositionTable';

import {useOrientation} from '../../hooks/useOrientation';

import styles from './styles';

const Torneo = ({id}) => {
  return (
    <Content>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <ResultTable id={id} />
        <PositionTable id={id}/>
      </View>
    </Content>
  );
}

export default Torneo;