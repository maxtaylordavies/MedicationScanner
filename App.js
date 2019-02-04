

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

  onButtonPressed = () => {
    this.setState({
        showModal: true
    })
  };

  render() {
    return (
      <View style={styles.container}>
          <Icon
              name="pills"
              color="#ffa5bd"
              size={120}
              style={{marginBottom: 20}}
          />
          <StyledButton
              text="Scan new drug"
              backgroundColor="white"
              textColor="#6a6b6a"
              textSize={24}
              height={60}
              width={300}
              borderRadius={25}
              onPress={this.onButtonPressed}
          />
          <Modal
              visible={this.state.showModal}
              transparent={true}
          >
              <View style={styles.modal}>
                  <Text>hi</Text>
              </View>
          </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b916c',
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    marginTop: 150,
    marginBottom: 150,
    backgroundColor: "white",
    borderRadius: 25
  }
});
