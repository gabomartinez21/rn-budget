import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import globalStyles from '../styles';

export const NewBudget = ({handleNewBudget,setBudget,budget}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Define budget</Text>

      <TextInput 
        keyboardType='numeric'
        placeholder='Add your budget: Ex. 300'
        style={styles.input}
        value={budget.toString()}
        onChangeText={setBudget}
      />

      <Pressable 
        onPress={() => handleNewBudget(budget)}
        style={styles.btn}>
        <Text style={styles.btnText}>Add budget</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container
  },
  label: {
    textAlign: 'center',
    fontSize: 26,
    color: '#3b82f6',
  },
  input: {
    marginTop: 30,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center'
  },
  btn: {
    marginTop: 30,
    backgroundColor: '#1048a4',
    padding: 10,
    borderRadius: 10,
  }, 
  btnText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})
