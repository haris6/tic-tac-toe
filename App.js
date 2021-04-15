import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const [getTurn,setTurn] = useState(true);

  const pressed =()=>{
    if(turn){

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ptext}>Player 1 : X</Text>
      <Text style={styles.ptext}>Player 2 : O</Text>
      <View style={styles.rowss}> 
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>1</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>2</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>3</Text>
        </Pressable>
      </View>
      
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>4</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>5</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>6</Text>
        </Pressable>
      </View>
      
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={""}>
          <Text style={{fontSize:"30px"}}>7</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>8</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={""}>
          <Text style={styles.fortext}>9</Text>
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"400px",
    display:"flex",
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowss:{
    flex:1,
    flexDirection:"row",
  },

  press:{
    justifyContent:"center",
    alignItems:"center",
    width:"80px",
    height:"80px",
    
    backgroundColor:"firebrick",
    border:"3px solid black",
  },

  fortext:{
    fontSize:30,
  },

  ptext:{
    marginBottom:"30px",
    fontSize:30,
  }
});


