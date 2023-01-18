import { StyleSheet, View, Text } from 'react-native';
import Sub from './Sub';

export default function Homepage() {
  
  return (
   <View style={styles.container}>
    <Text>project</Text>
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
  