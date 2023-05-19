import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../styles';

export const SpentForm = ({setModal, handleSpent, setExpense, expense, handleRemove}) => {

  const [spent, setSpent] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if(expense?.spent) {
      setSpent(expense.spent)
      setQuantity(expense.quantity)
      setCategory(expense.category)
    }
  }, [expense])

  const handleSubmit = () => {
    if(expense?.id) {
      handleSpent({ spent, category, quantity, id: expense.id, date: expense.date});
    } else {
      handleSpent({ spent, category, quantity});
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable 
          style={styles.btnCancel}
          onLongPress={() => {
            setModal(false)
            setExpense({})
          }}  
        >
          <Text style={styles.btnCancelText}>Close</Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>{expense?.spent ? 'Update Spent' : 'New Spent'}</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Spent Name</Text>
          <TextInput 
            placeholder='Ex. Food'
            value={spent}
            style={styles.input}
            onChangeText={setSpent}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Quantity</Text>
          <TextInput 
            placeholder='Ex. 25'
            keyboardType='numeric'
            value={quantity}
            onChangeText={setQuantity}
            style={styles.input}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Category</Text>
          <Picker style={styles.input} selectedValue={category} onValueChange={(val) => setCategory(val)}>
            <Picker.Item label="-- Select --" value=""/>
            <Picker.Item label="Savings" value="savings"/>
            <Picker.Item label="Food" value="food"/>
            <Picker.Item label="Home" value="home"/>
            <Picker.Item label="Other things" value="otherThings"/>
            <Picker.Item label="Health" value="health"/>
            <Picker.Item label="Suscriptions" value="suscription"/>
          </Picker>
        </View>

        <Pressable 
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnText}>
            {expense.id ? 'Update' : 'Add spent'}
          </Text>
        </Pressable>
        {expense.id && (
          <Pressable 
            style={[styles.btn, styles.btnDelete]}
            onPress={() => handleRemove(expense.id)}
          >
            <Text style={styles.btnText}>
              Remove
            </Text>
          </Pressable>
          
        )}
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e40af',
    flex: 1,
  },
  form: {
    ...globalStyles.container
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 30,
    color: '#64748b'
  },
  field: {
    marginVertical: 10,
  },
  label: {
    color: '#64748b',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#3b82f6',
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btnCancel: {
    backgroundColor: '#db2777',
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10
  },
  btnCancelText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
  },
  btnDelete: {
    backgroundColor: '#db2777',
  }
})
