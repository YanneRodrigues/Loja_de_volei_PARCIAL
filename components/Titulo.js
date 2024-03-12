import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default function Titulo() {
  return(
    <SafeAreaView>
      <Text style={styles.titulo}>EXPLORAR</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  titulo: {
    color: 'orange',
    fontWeight: 'medium',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  }
})