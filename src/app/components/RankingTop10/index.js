import React, {useContext} from 'react';

import {View, Text} from 'react-native';

import ManagerPoints from '@components/ManagerPoints';
import LamfoContext from '@context/LamfoContext';
import {Spinner} from 'native-base';

import styles from './styles.js';

const RankingTop10 = () => {
  
  const {datos} = useContext(LamfoContext);

  return(
    <View style={styles.rankingContainer}>
      <Text style={styles.rankingTitle}>Top Ten</Text>
      { datos &&
        datos.map(({posicion, nombre, puntos, imagenes}) =>
          <ManagerPoints
            key={posicion}
            posicion={posicion}
            nombre={nombre}
            puntos={puntos}
            imagenes={imagenes}
          />
        )
      }
      { !datos &&
        <Spinner color='green' />
      }
    </View>
  );
}

export default RankingTop10;
