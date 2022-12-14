import React from "react";

import HomeCandidate from "../screens/HomeCandidate";
import ProfilCandidate from "../screens/ProfilCandidate";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const StackNav = createStackNavigator();

const StackNavScreenCandidate = ({ navigation }) => {
    return (
        <StackNav.Navigator
            screenOptions={{
                headerLeft: () => (
                    <MaterialIcons
                        name="menu"
                        size={24}
                        color="black"
                        onPress={() => navigation.openDrawer()}
                    />
                ),
            }}
        >
            <StackNav.Screen
                name="HomeCandidate"
                component={HomeCandidate}
                options={{
                    title: "Accueil",
                }}
            />

            <StackNav.Screen
                name="ProfilCandidate"
                component={ProfilCandidate}
            />
        </StackNav.Navigator>
    );
};

export default StackNavScreenCandidate;
