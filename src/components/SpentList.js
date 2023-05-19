
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Expense } from './Expense'

export const SpentList = ({expenses, setModal, setSpent}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>

      {expenses.length === 0 ? (
      <Text style={styles.noExpenses}>No expenses yet.</Text> 
      ) : (
        <>
          {expenses.map(expense => (
            <Expense
              expense={expense} 
              key={expense.id}
              setModal={setModal}
              setSpent={setSpent}
            />
          ))}
        </>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 100
  },
  title: {
    color: '#64748b',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  },
  noExpenses: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  }
})
