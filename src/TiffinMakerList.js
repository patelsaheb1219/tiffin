import React, {Component} from 'react';
import { SafeAreaView } from "react-native";
import { List } from 'react-native-paper'
import Header from "./Header";

class TiffinMakerList extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header title="Menu" subtitle="People" showBackArrow={false} />
                <List.Item
                    button
                    title="Aman Shah"
                    description="Lunch"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward"  />}
                    onPress={() => { this.props.navigation.navigate('TiffinCount') }}
                />
                <List.Item
                    title="Sangita Ben"
                    description="Lunch"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward" />}
                />
                <List.Item
                    title="Sangita Ben"
                    description="Dinner"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward" />}
                />
            </SafeAreaView>
        );
    }
}

export default TiffinMakerList;
