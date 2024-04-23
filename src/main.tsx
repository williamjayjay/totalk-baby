import { FC } from "react";
import { StatusBar } from "react-native";
import { Home } from "@screens/Home";

export const App = () => {
    return (
        <>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="transparent"
            />
            <Home />
        </>
    );
};
