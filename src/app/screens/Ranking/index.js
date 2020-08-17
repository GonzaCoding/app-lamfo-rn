import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';

import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import RankingTop10 from '@components/RankingTop10';

import styles from './styles';

const Ranking = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <RankingTop10 />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Ranking;