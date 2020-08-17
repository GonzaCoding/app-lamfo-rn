import React from 'react';

import {View, Image, Text} from 'react-native';

import styles from './styles';

const LAMFOURL = "http://www.lamfo.club/";

const ManagerPoints = ({posicion, nombre, puntos, imagenes}) => (
  <View style={styles.managerContainer}>
    <Image
      style={styles.managerImageRanking}
      resizeMode="contain"
      source={{uri: LAMFOURL + imagenes[0]}}
    />
    <View>
      <Text style={styles.managerPosition}>{posicion}</Text>
    </View>
    <Image
      style={styles.managerImageAvatar}
      resizeMode="contain"
      source={{uri: LAMFOURL + imagenes[1]}}
    />
    <View style={styles.managerTextContainer}>
      <Text style={styles.managerName}>{nombre}</Text>
      <Text style={styles.managerPoints}>{puntos} puntos</Text>
    </View>
  </View>
);

export default ManagerPoints;

