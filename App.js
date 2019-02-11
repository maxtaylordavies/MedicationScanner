

import React, {Component} from 'react';
import {StyleSheet, View, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StyledButton from "./Components/StyledButton";
import CameraModal from "./Components/CameraModal";

type Props = {};

type State = {
    showModal: boolean
};

export default class App extends Component<Props, State> {
  constructor(props) {
      super(props);
      this.state = {
          showModal: false
      }
  }

  toggleModal = () => {
      this.setState({
          showModal: !this.state.showModal
      });
  };

  render() {
    return (
        <View style={{opacity: (this.state.showModal ? 0.2 : 1)}}>
          <View style={styles.containerTop}>
              <View style={styles.textContainer}>
                  <Text style={styles.text}>Welcome To DrugScan 💊 📸</Text>
              </View>
          </View>
          <View style={styles.containerBottom}>
              <StyledButton
                  text="Scan new drug"
                  backgroundColor="white"
                  textColor="black"
                  textSize={22}
                  height={60}
                  width={250}
                  borderRadius={25}
                  onPress={this.toggleModal}
              />
              <Modal
                  visible={this.state.showModal}
                  animationType="slide"
                  transparent={true}
              >
                  <View style={styles.modal}>
                      <CameraModal closeModal={this.toggleModal}/>
                  </View>
              </Modal>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerBottom: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff3d71"
  },
  textContainer: {
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 50
  },
  text: {
    color: "black",
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 48
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: "white",
    borderRadius: 100,
    //shadowColor: "grey",
    //shadowOpacity: 0.5,
    //shadowRadius: 100
  }
});
