import { View, Image, StyleSheet } from 'react-native'

export function Fotos() {
  return (
    <View>

      <Image style={styles.logo} source={require('../assets/meia.jfif')}/>
      <Image style={styles.bola} source={require('../assets/bola.jfif')}/>
      <Image style={styles.joelheira} source={require('../assets/joelheira.jfif')}/>
      <Image style={styles.seta} source={require('../assets/seta-esquerda.png')}/>
      <Image style={styles.perfil} source={require('../assets/pessoas.png')}/>
      <Image style={styles.carrinho} source={require('../assets/carrinho-de-compras.png')}/>
      <Image style={styles.casa} source={require('../assets/botao-home.png')}/>
      <Image style={styles.lupa} source={require('../assets/lupa (1).png')}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 128,
    width: 128,
    marginTop: 45,
  },

  bola: {
    height: 130,
    width:128, 
    marginLeft: 15,
    marginTop: 35,
  },

  joelheira: {
    height: 128,
    width: 128,
    marginLeft: 15,
    marginTop: 45,
  },

  seta: {
    height: 40,
    width: 40,
    marginTop: -668,
    marginLeft: 10,
  },

  perfil: {
    height: 40,
    width: 40,
    marginTop: 735,
    marginLeft: 10,
  },

  carrinho: {
    height: 40,
    width: 43,
    marginLeft: 105,
    marginTop: -40,
  },

  casa: {
    height: 34,
    width: 30,
    marginTop: -40,
    marginLeft: 340
  },

  lupa: {
    height: 36,
    width: 35,
    marginTop: -33,
    marginLeft: 220,
  },

});