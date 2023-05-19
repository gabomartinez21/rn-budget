import React, {useState, useEffect} from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import { formatCount } from '../helpers';

import CircularProgress  from 'react-native-circular-progress-indicator'

export const BudgetControl = ({budget, expenses}) => {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => Number(expense.quantity) + total, 0)
    const totalAvailable = budget - totalSpent;

    const newPercentage = (budget - totalSpent)  / budget * 100
    setPercentage(newPercentage)
    setSpent(totalSpent)
    setAvailable(totalAvailable)
  }, [expenses])

  return (
    <View style={styles.container}>
      <View style={styles.centerImage}>
        <CircularProgress
          value={percentage}
          duration={800}
          radius={120}
          valueSuffix={'%'}
          inActiveStrokeColor='#f5f5f5'
          inActiveStrokeWidth={20}
          maxValue={100}
          activeStrokeColor='#3b82f6'
          activeStrokeWidth={20}
          title='Total budget'
          titleStyle={{fontSize: 16, fontWeight: '700'}}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.value}>
          <Text style={styles.label}>Budget: {''} </Text>
          {formatCount(budget)}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Available: {''} </Text>
          {formatCount(available)}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Spent: {''} </Text>
          {formatCount(spent)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container
  },
  centerImage: {
    alignItems: 'center',
  },
  image: {
    width:250,
    height: 250
  },
  textContainer: {
    marginTop: 50,
  },
  label: {
    fontWeight: '700',
    color: '#3b82f6'
  }, 
  value: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  }
})
