import { View, Text, StyleSheet } from 'react-native'

export function Pesquisar() {
  return(
    <View>
      <Text style={styles.barraDePesquisa}>Pesquisar</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  barraDePesquisa: {
    backgroundColor: '#D3D3D3',
    marginTop: 25,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 12,
    paddingLeft: 20,
    color: '#808080',
    padding: 3,  
  }
})