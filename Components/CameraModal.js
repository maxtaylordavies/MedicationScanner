import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import StyledButton from "./StyledButton";

type Props = {};

type State = {
    showCamera: boolean,
    result: any
}

export default class CameraModal extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            showCamera: true,
            result: null
        }
    }

    renderCamera = () => {
        return (
            <View style={styles.container}>
                <Text>yeet</Text>
            </View>
        );
    };

    renderMessage = () => {

    };

    render() {
        if (this.state.showCamera) {
            return this.renderCamera();
        } else {
            return this.renderMessage();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
});