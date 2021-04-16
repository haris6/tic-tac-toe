import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

var symbols = [["", "", ""], ["", "", ""], ["", "", ""]]

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [Turn, setTurn] = useState(true);

  const [Count, setCount] = useState(0);

  const [Winner,setWinner] = useState("");

  const Reset = () =>{
    setModalVisible(false);
    symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
    setTurn(true);
    setWinner("");
    setCount(0);
  }

  const Win = (a) => {
    if ((symbols[0][0] == a) && (symbols[0][1] == a) && (symbols[0][2] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[1][0] == a) && (symbols[1][1] == a) && (symbols[1][2] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[2][0] == a) && (symbols[2][1] == a) && (symbols[2][2] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[0][0] == a) && (symbols[1][0] == a) && (symbols[2][0] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[0][1] == a) && (symbols[1][1] == a) && (symbols[2][1] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[0][2] == a) && (symbols[1][2] == a) && (symbols[2][2] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[0][0] == a) && (symbols[1][1] == a) && (symbols[2][2] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else if ((symbols[0][2] == a) && (symbols[1][1] == a) && (symbols[2][0] == a)) {
      setModalVisible(true);
      setWinner(a);
    }
    else {
      for (var i = 0 ; i < 3 ; i++){
        for (var j = 0 ; j < 3 ; j++){
          if(symbols[i][j] != ""){
            setCount(Count+1);
          }
        }
      }
      if(Count == 8){
        setModalVisible(true);
      }
    }
  }

  const Display = () =>{
    if(Winner == "X"){
      return ("Winner : Player 1")
    }
    if(Winner == "O"){
      return ("Winner : Player 2")
    }
    if(Winner == ""){
      return ("Winner : None, It's a Draw")
    }
  }

  const theTurn = () =>{
    if(Turn){
      return("Player 1")
    }
    else{
      return("Player 2")
    }
  }

  const Pressed = (a, b) => {
    if (symbols[a][b] == "") {
      if (Turn) {
        symbols[a][b] = "X";
        setTurn(false);
        Win("X");
      }
      else {
        symbols[a][b] = "O";
        setTurn(true);
        Win("O");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.ptext}>Player 1 : X</Text>
      <Text style={styles.ptext}>Player 2 : O</Text> 
      <Text style={styles.ptext}>Turn : {theTurn()}</Text> 
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={() => { Pressed(0, 0) }}>
          <Text style={styles.fortext}>{symbols[0][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(0, 1) }}>
          <Text style={styles.fortext}>{symbols[0][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(0, 2) }}>
          <Text style={styles.fortext}>{symbols[0][2]}</Text>
        </Pressable>
      </View>
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={() => { Pressed(1, 0) }}>
          <Text style={styles.fortext}>{symbols[1][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(1, 1) }}>
          <Text style={styles.fortext}>{symbols[1][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(1, 2) }}>
          <Text style={styles.fortext}>{symbols[1][2]}</Text>
        </Pressable>
      </View>
      <View style={styles.rowss}>
        <Pressable style={styles.press} onPress={() => { Pressed(2, 0) }}>
          <Text style={styles.fortext}>{symbols[2][0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(2, 1) }}>
          <Text style={styles.fortext}>{symbols[2][1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => { Pressed(2, 2) }}>
          <Text style={styles.fortext}>{symbols[2][2]}</Text>
        </Pressable>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{Display()}</Text>
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {Reset()}}>
                <Text style={styles.textStyle}>Play Again</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rowss: {
    flexDirection: "row"
  },

  press: {
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 87,
    backgroundColor: "#212F3D",
    margin: 2
  },

  fortext: {
    fontSize: 60,
    color:"#F1C40F",
  },

  ptext: {
    color:"#16A085",
    fontWeight:"bold",
    marginBottom: 10,
    fontSize: 20
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },

  modalView: {
    margin: 20,
    opacity:0.9,
    backgroundColor: "#FDFEFE",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  
  buttonClose: {
    backgroundColor: "#212F3D",
  },

  textStyle: {
    color: "#F1C40F",
    fontWeight: "bold",
    textAlign: "center"
  },

  modalText: {
    color:"",
    fontSize:25,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  }
});


