import { View, Text, StyleSheet } from 'react-native'

export function Sugestao() {
  return (
    <View>
      <Text style={styles.sugestao}>SUGESTÕES</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  sugestao: {
    color: 'orange',
    fontWeight: 'medium',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  }
})