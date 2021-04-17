import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const Block = ({ id, description }) => (
 <View style={styles.container}>
   <Text style={styles.title}>{id.padStart(3, '0')}</Text>
   <Text style={styles.description}>{description}</Text>
 </View>
)

Block.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blocksBackground,
    borderRadius: 2,
    padding: 8,
    marginTop: 5
  },
  title: {
    color: colors.blue,
    fontSize: 10,
    fontWeight: '700',
    paddingBottom: 6,
    letterSpacing: 1.5,
  },
  description: {
    color: colors.text,
    fontSize: 14,
    letterSpacing: 0.25
  }
})

export default Block;