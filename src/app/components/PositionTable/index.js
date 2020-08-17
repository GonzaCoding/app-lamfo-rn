import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';

import {Text, View, Image} from 'react-native';

import {useOrientation} from '../../hooks/useOrientation';
import LamfoContext from '@context/LamfoContext';

import styles from './styles';

const dataPos = [
  {
    pos: 1,
    equipo: "River",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 2,
    equipo: "Unión",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 3,
    equipo: "Aldosivi",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 4,
    equipo: "Central",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 5,
    equipo: "River",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 6,
    equipo: "Unión",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 7,
    equipo: "Aldosivi",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 8,
    equipo: "Central",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 9,
    equipo: "River",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 10,
    equipo: "Unión",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 11,
    equipo: "Aldosivi",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 12,
    equipo: "Central",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 13,
    equipo: "River",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 14,
    equipo: "Unión",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 3,
    pts: 3
  },
  {
    pos: 15,
    equipo: "Aldosivi",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
  {
    pos: 16,
    equipo: "Central",
    pg: 1,
    pe: 0,
    pp: 0,
    dg: 2,
    pts: 3
  },
];


const PositionTable = ({id}) => {
  const orientation = useOrientation();

  const {torneo} = useContext(LamfoContext);
  const tabla = torneo.posiciones[id].data;

  return (
    <View>
      <View style={styles.table}>
        <View style={styles.tableTitle}>
          <Text >Posiciones</Text>
        </View>
        <View style={[styles.tableTitle, styles.tableRow]}>
          <Text style={{flex: 5}} >EQUIPO</Text>
          <Text style={{flex: 1}}>PTS</Text>
          <Text style={{flex: 1}}>PG</Text>
          <Text style={{flex: 1}}>PE</Text>
          <Text style={{flex: 1}}>PP</Text>
          <Text style={{flex: 1}}>DG</Text>
        </View>
        {tabla.map((team, index) => (
          <View key={team.pos} style={styles.tableRow}>
            <View style={styles.teamName}>
              <Text>{team.equipo}</Text>
            </View>
            <View style={styles.value}>
              <Text style={{fontWeight: 'bold'}}>{team.pts}</Text>
            </View>
            <View style={styles.value}>
              <Text>{team.pg}</Text>
            </View>
            <View style={styles.value}>
              <Text>{team.pe}</Text>
            </View>
            <View style={styles.value}>
              <Text>{team.pp}</Text>
            </View>
            <View style={styles.value}>
              <Text>{team.dg}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default PositionTable;


/*
this.requestAnimationFrame is not a function

*/