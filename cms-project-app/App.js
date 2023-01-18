import { StyleSheet, View } from 'react-native';
import Sub from './Sub';

export default function App() {
  
  return (
   <View style={styles.container}>
    <Sub/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDFDf',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
