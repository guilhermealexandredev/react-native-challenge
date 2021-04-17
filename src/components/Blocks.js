import React from 'react';
import Block from './Block';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const Blocks = ({ blocks }) => {

  if(blocks.loading){
    return (
      <ActivityIndicator size="small"/>
    )
  }

  if(blocks.error) {
    return (
      <View>
         <Text style={styles.messageError}>{blocks.error}</Text>
      </View>
    )
  }

  return (
    <View>
      {blocks.data && blocks.data.map(({id, attributes })=> (
        <Block 
          key={`${id}`}
          id={id}
          description={attributes.data}
          />
       )        
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  messageError: {
    color: colors.text,
    fontSize: 14,
  }
})

Blocks.propTypes = {
  blocks: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    data: PropTypes.array
  })
}

export default Blocks;