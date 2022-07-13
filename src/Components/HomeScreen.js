import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
// import Animated from 'react-native-reanimated';
// import {animated} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'native-base';

const HomeScreen = ({navigation}) => {
  return (
   <View 
   style={{
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
   }}
   >
    <View style={{...styles.Box}}>
      <Text style={{color: '#fff', fontSize: 15, fontWeight: '600'}}>Total Expense</Text>

      <Text style={{color: '#fff', fontSize: 25, fontWeight: '700'}}>৳5,672.00</Text>
      
        <Text style={{marginTop: 60, backgroundColor: '#333', color: '#fff', width: 130, textAlign: 'center', borderRadius: 5, padding: 8}}
        onPress={()=>{
          navigation.navigate('Add')
        }}
        >Add Expanse</Text>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    flexDirection: 'row',
    padding: 22,
    backgroundColor: 'red',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column'
  },
})

export default HomeScreen;
