import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

var symbols = [["","",""],["","",""],["","",""]]

export default function App() {
  
  const [Turn,setTurn] = useState(true);

  const Pressed = (a,b) =>{
    if(symbols[a][b] == ""){
      if(Turn){
        symbols[a][b] = "X";
        setTurn(false); 
      }
      else{
        symbols[a][b] = "O";
        setTurn(true);
      } 
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ptext}>Player 1 : X</Text>
      <Text style={styles.ptext}>Player 2 : O</Text>
      <View style={styles.rowss}> 
        <Pressable style={styles.press} onPress={() => {Pressed(0,0)}}>
          <Text style={styles.fortext}>{symbols[0][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(0,1)}}>
          <Text style={styles.fortext}>{symbols[0][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(0,2)}}>
          <Text style={styles.fortext}>{symbols[0][2]}</Text>
        </Pressable>
      </View>
      
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={() => {Pressed(1,0)}}>
          <Text style={styles.fortext}>{symbols[1][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(1,1)}}>
          <Text style={styles.fortext}>{symbols[1][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(1,2)}}>
          <Text style={styles.fortext}>{symbols[1][2]}</Text>
        </Pressable>
      </View>
      
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={() => {Pressed(2,0)}}>
          <Text style={{fontSize:"30px"}}>{symbols[2][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(2,1)}}>
          <Text style={styles.fortext}>{symbols[2][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => {Pressed(2,2)}}>
          <Text style={styles.fortext}>{symbols[2][2]}</Text>
        </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"300px",
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
    border:"3px solid white",
  },

  fortext:{
    fontSize:30,
  },

  ptext:{
    marginBottom:"30px",
    fontSize:30,
  }
});


