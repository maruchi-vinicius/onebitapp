import React from "react";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Start() {
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require("../../assets/icons/logo3.png")} ></Image>
            </ScrollView>
        </View>
    );
}