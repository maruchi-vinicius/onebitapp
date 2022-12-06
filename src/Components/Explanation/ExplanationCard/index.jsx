import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function ExplanationCard(){
    return (

        <View style={styles.container}>

            <Text style={styles.tittle}>
                Através desse App, você vai consolidar {"\n"} hábitos de 4 áreas fundamentais:
            </Text>

            <View style={styles.explanationContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/educationIcon.png")}
                />
                <Text style={styles.description}>
                    <Text style={styles.mind}>Mente: </Text>
                    Hábitos para melhorar sua inteligência e sabedoria
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/moneyIcon.png")}
                />
                <Text style={styles.description}>
                    <Text style={styles.money}>Financeiro: </Text>
                    Hábitos para ajudar com controle financeiro
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/bodyIcon.png")}
                />
                <Text style={styles.description}>
                    <Text style={styles.body}>Corpo: </Text>
                    Hábitos para te deixar mais forte e saudável
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/funIcon.png")}
                />
                <Text style={styles.description}>
                    <Text style={styles.fun}>Diversão: </Text>
                    Hábitos para controlar o stress e aumentar a felicidade
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: 350,
        borderRadius: 25,
        padding: 30
    },
    tittle: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 16
    },
    explanationContainer: {
        flexDirection: "row",
        marginTop: 30
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5
    },
    mind: {
        color: "#90B7F3",
        fontWeight: "bold"
    },
    money: {
        color: "#85BB65",
        fontWeight: "bold"
    },
    body: {
        color: "#FF0044",
        fontWeight: "bold"
    },
    fun: {
        color: "#FE7F23",
        fontWeight: "bold"
    },
    description: {
        color: "white"
    }
});