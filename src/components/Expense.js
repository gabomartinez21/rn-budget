import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles';

export const Expense = ({expense}) => {
  
  const {spent, category, quantity, id} = expense;

  return (
    <View style={styles.container}>
      <Text>{spent}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container
  }
})
