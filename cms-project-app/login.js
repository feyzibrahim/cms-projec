import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function login() {
  return (
    <View style={styles.container}>
      <View style={styles.user}><TextInput placeholder='enter your username '/></View>

      <View style={styles.pass} ><TextInput placeholder='Password'/></View>

      <View style={styles.hello} >
        <Button title="sign in" />
      </View>
      <view><Text> or continue with</Text></view>

      <View styles={styles.bottam}>
      <Text>Not a memember?register now</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFDFDf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    margin: 30,
  },
  hello :{
    backgroundColor: 'pink',
    padding: 10,
    
  },
  pass : {
    backgroundColor: '#fff',
    padding:10,
    margin: 40,
  }

});