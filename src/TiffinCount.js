import React, {Component} from 'react';
import { SafeAreaView } from "react-native";
import Header from "./Header";

class TiffinCount extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header title="Tiffin Count" subtitle="" showBackArrow={true} />
            </SafeAreaView>
        );
    }
}

export default TiffinCount;
