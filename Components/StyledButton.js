import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
    text: string,
    backgroundColor: string,
    textColor: string,
    textSize: number,
    height: number,
    width: number,
    borderRadius: number,
    onPress: any
};

export default class StyledButton extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        let buttonStyle = {
            backgroundColor: this.props.backgroundColor,
            height: this.props.height,
            width: this.props.width,
            borderRadius: this.props.borderRadius,
            justifyContent: "center",
            alignItems: "center"
        };

        let textStyle = {
            fontSize: this.props.textSize,
            color: this.props.textColor
        };

        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={this.props.onPress}
            >
                <Text style={textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}