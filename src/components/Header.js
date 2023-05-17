
import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

export const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Planificador de gastos</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '700',
    paddingTop: 20,
  }
})