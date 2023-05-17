import React, {useState, useEffect} from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import { formatCount } from '../helpers';

export const BudgetControl = ({budget, expenses}) => {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    console.log(expenses)
    const totalSpent = expenses.reduce((total, expense) => Number(expense.quantity) + total, 0)
    const totalAvailable = budget - totalSpent;

    setSpent(totalSpent)
    setAvailable(totalAvailable)
  }, [expenses])

  return (
    <View style={styles.container}>
      <View style={styles.centerImage}>
        <Image 
          source={require('../img/grafico.jpg')}
          style={styles.image}
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
