import React from "react";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function Header(props) {
    return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: "center",
        marginBottom: 12,
    },
});