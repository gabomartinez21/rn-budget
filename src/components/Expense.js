import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles';
import { formatCount, formatDate } from '../helpers';


const arrayIcons = {
  savings: require('../img/icono_ahorro.png'),
  food: require('../img/icono_comida.png'),
  home: require('../img/icono_casa.png'),
  otherThings: require('../img/icono_ocio.png'),
  health: require('../img/icono_salud.png'),
  suscriptions: require('../img/icono_suscripciones.png'),
}

export const Expense = ({expense, setModal, setSpent}) => {
  
  const {spent, category, quantity, id, date} = expense;

  const handleActions = () => {
    setModal(true);
    setSpent(expense)
  }
  return (
    <Pressable
      onPress={handleActions}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <Image 
              source={arrayIcons[category]}
              style={styles.image}
            />

            <View style={styles.contentText}>
              <Text style={styles.category}>{category}</Text>
              <Text style={styles.spent}>{spent}</Text>
              <Text style={styles.date}>{formatDate(date)}</Text>
            </View>
          </View>

          <Text style={styles.quantity}>{formatCount(quantity)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: 20
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentImage: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  contentText: {
    flex: 1
  },
  category: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5
  },
  spent: {
    fontSize: 22,
    color: '#64748b',
    marginBottom: 5
  },
  quantity: {
    fontSize: 24,
    fontWeight: '700',
  },
  date: {
    fontWeight: '700',
    color: '#db2777'
  }
})
