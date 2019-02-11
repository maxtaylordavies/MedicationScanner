import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
    onPress: any
}

export default class ExitButton extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.container}
            >
                <Icon
                    name="times"
                    color="black"
                    size={15}
                />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    }
});