

import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Modal,
  ScrollView
} from 'react-native';
import { Header } from './src/components/Header';
import { NewBudget } from './src/components/NewBudget';
import { BudgetControl } from './src/components/BudgetControl';
import { SpentForm } from './src/components/SpentForm';
import { generateId } from './src/helpers';
import { SpentList } from './src/components/SpentList';


const App = () => {

  const [isValidBudget, setIsValidBudget] = useState(false);
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [modal, setModal] = useState(false)
  const [spent, setSpent] = useState({})


  const handleNewBudget = budget => {
    if(Number(budget) > 0) {
      setIsValidBudget(true)
    } else {
      Alert.alert('Error', 'Budget cannot be equal or below 0')
    } 
  }

  const handleSpent = spent => {
    if(Object.values(spent).includes('')){
      Alert.alert('Error', 'You need to fill the fields');
      return
    }

    if(spent?.id) {
      const newExpenses = expenses.map(expense => spent.id === expense.id ? spent : expense)
      setExpenses(newExpenses)
    } else {
      spent.id = generateId();
      spent.date = Date.now();
      setExpenses([...expenses, spent])
    }
    setModal(false)

  }

  const handleRemove = id => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(newExpenses)
    setSpent({})
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          {isValidBudget ? (
            <BudgetControl 
              budget={budget}
              expenses={expenses}
            />
          ) : (
            <NewBudget 
              handleNewBudget={handleNewBudget}
              setBudget={setBudget}
              budget={budget}
            />
          )}
        </View>
        {isValidBudget && (
          <SpentList 
            expenses={expenses} 
            setModal={setModal}
            setSpent={setSpent}
          />
        )}

      </ScrollView>


      {modal && (
        <Modal 
          animationType='slide'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <SpentForm 
            setModal={setModal}
            handleSpent={handleSpent}
            setExpense={setSpent}
            expense={spent}
            handleRemove={handleRemove}
          />
        </Modal>
        )}

      {isValidBudget && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image style={styles.image} source={require('./src/img/nuevo-gasto.png')} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    minHeight: '100%'
  },
  header: {
    backgroundColor: '#3b82f6',
    minHeight: 400
  },
  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30
  },
});

export default App;
