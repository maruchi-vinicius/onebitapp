import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";
import { useNavigation } from "@react-navigation/native"
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";


export default function Home(){
    const navigation = useNavigation();

    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation(){
        navigation.navigate("AppExplanation");
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyChecks}>
                        20 Dias - 80 Checks
                        <LifeStatus />
                        <StatusBar />
                        
                        {mindHabit ? (
                            <EditHabit habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindHabit?.habitArea}
                            checkColor="#90B7F3"
                            />
                        ): (
                            <CreateHabit habitArea="Mente" borderColor="#90B7F3"/>
                        )}

                        {moneyHabit ? (
                            <EditHabit habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyHabit?.habitArea}
                            checkColor="#85BB65"
                            />
                        ): (
                            <CreateHabit habitArea={"Financeiro"} borderColor="#85BB65"/>
                        )}

                        {bodyHabit ? (
                            <EditHabit habit={bodyHabit?.habitName}
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyHabit?.habitArea}
                            checkColor="#FF0043"
                            />
                        ): (
                            <CreateHabit habitArea={"Corpo"} borderColor="#FF0043"/>
                        )}

                        {funHabit ? (
                            <EditHabit habit={funHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funHabit?.habitArea}
                            checkColor="#FE7F23"
                            />
                        ): (
                            <CreateHabit habitArea={"Humor"} borderColor="#FE7F23"/>
                        )}

                    </Text>
                </View>

                <Text
                style={styles.explanationText}
                onPress={() => {handleNavExplanation();}}
                >
                    Ver explica????o novamente
                </Text>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    }
});