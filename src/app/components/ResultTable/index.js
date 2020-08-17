import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';

import {Text, View, Image} from 'react-native';

import {useOrientation} from '../../hooks/useOrientation';
import LamfoContext from '@context/LamfoContext';

import styles from './styles';

const LAMFOURL = "http://www.lamfo.club/";

const ResultTable = ({id}) => {
  const {torneo} = useContext(LamfoContext);
  const tabla = torneo.ultima[id].data;
  const titulo = torneo.ultima[id].torneo;
  //console.warn(LAMFOURL + tabla[0].local.escudo);

  const orientation = useOrientation();

  return (
    <View>
      <View style={styles.table}>
        <View style={styles.tableTitle}>
          <Text >{titulo}</Text>
        </View>
        {tabla.map(({local, visitante}, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.shield}>
              <Image 
                style={styles.shieldImage}
                resizeMode="contain"
                source={{uri: LAMFOURL + local.escudo}} 
              />
            </View>
            <View style={styles.teamName}>
              <Text>{local.nombre}</Text>
            </View>
            <View style={[styles.goals, styles.borderLeft, styles.borderRight]}>
              <Text style={styles.goalsText}>{local.goles}</Text>
            </View>
            <View style={[styles.goals, styles.borderRight]}>
              <Text style={styles.goalsText}>{visitante.goles}</Text>
            </View>
            <View style={styles.teamName}>
              <Text style={styles.alignRight}>{visitante.nombre}</Text>
            </View>
            <View style={styles.shield}>
              <Image 
                style={styles.shieldImage}
                resizeMode="contain"
                source={{uri: LAMFOURL + visitante.escudo}} 
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default ResultTable;