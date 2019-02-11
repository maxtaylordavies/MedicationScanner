import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import StyledButton from "./StyledButton";
import ExitButton from "./ExitButton";

type Props = {
    closeModal: any
};

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

    processBarcode = (e) => {
        this.setState({ result: e });
    };

    renderCamera = () => {
        return (
            <View style={styles.camera}>
                <RNCamera
                    style={{flex: 1}}
                    captureAudio={false}
                    type={RNCamera.Constants.Type.back}
                    onBarCodeRead={this.processBarcode}
                />
            </View>
        );
    };

    renderLoadScreen = () => {
        return (
            <View style={styles.loadScreen}>
                 <ActivityIndicator
                     size={40}
                     color="#ff3d71"
                 />
            </View>
        );
    };

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>{this.state.result ? "Barcode Found" : "Scanning..."}</Text>
                <ExitButton onPress={this.props.closeModal}/>
            </View>
        )
    };

    renderResult = () => {
        return (
            <View style={styles.result}>
                <View style={{alignItems: "center", marginTop: 75}}>
                    <Icon name="check-circle" size={75} color="green" style={styles.icon}/>
                    <Text style={styles.resultText}>{this.state.result.data}</Text>
                </View>
                <StyledButton
                    text="Add"
                    backgroundColor="#ff3d71"
                    textColor="white"
                    textSize={24}
                    height={60}
                    width="100%"
                    borderRadius={25}
                    onPress={this.props.closeModal}
                />
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.state.result ? this.renderResult() : this.renderCamera()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        height: "100%",
        width: "100%"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //marginBottom: "40%",
        //marginTop: 15
    },
    camera: {
        width: "100%",
        height: "90%",
        marginTop: 10
    },
    result: {
        width: "100%",
        height: "85%",
        marginTop: 25,
        justifyContent: "space-between",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 26
    },
    resultText: {
        fontFamily: "Inter",
        fontSize: 22
    },
    icon: {
        marginLeft: 5
    }
});