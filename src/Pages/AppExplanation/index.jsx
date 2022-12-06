import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DefaultButton from "../../../Components/Common/DefaultButton";

export default function AppExplanation(){

    function handleSetShowHome(){
        console.log("botao clicado 2");
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.tittle}>
                        Antes, deixa eu {'\n'} te explicar...
                    </Text>

                    <Text style={styles.descriptionCta}>
                        Pronto para subir de nível na vida?
                    </Text>

                    <Text style={styles.description}>
                        Na próxima tela você poderá escolher {'\n'} seus 4 hábitos individualmente.
                    </Text>

                    <DefaultButton
                    buttonText={"Continuar"}
                    handlePress={handleSetShowHome}
                    width={250}
                    height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21, 0.98)",
    },
    tittle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCta: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },
    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    }
});