import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { Pesquisar } from './components/Pesquisar'
import { Sugestao } from './components/Sugestao'
import { Fotos } from './components/Fotos'

export default function Loja() {
  return(
    <SafeAreaView>
      <Text style={styles.titulo}>EXPLORAR</Text>

      <Pesquisar/>
      <Sugestao/>
      <Fotos/>
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  titulo: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  }
})