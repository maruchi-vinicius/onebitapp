import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {
    return(
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems:"center"}}>
                    <Image style={styles.logo} source={require("../../assets/icons/logo3.png")} ></Image>
                    <LifeStatus />
                    <Text style={styles.description}>
                        Vamos transformar a vida em um jogo,{"\n"} e subir de nível sempre;
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
});