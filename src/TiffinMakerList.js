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
                    onPress={
                        () => { this.props.navigation.navigate('TiffinCount' , {
                            title: 'Aman Shah',
                            subtitle: 'Lunch',
                            amount: 50,
                            navigation: this.props.navigation,
                            showImage: 'lunch'
                        })
                     }}
                />
                <List.Item
                    title="Sangita Ben"
                    description="Breakfast"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward" />}
                    onPress={
                        () => { this.props.navigation.navigate('TiffinCount' , {
                            title: 'Sangita Ben',
                            subtitle: 'Breakfast',
                            amount: 30,
                            navigation: this.props.navigation,
                            showImage: 'breakfast'
                        })
                        }}
                />
                <List.Item
                    title="Sangita Ben"
                    description="Lunch"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward" />}
                    onPress={
                        () => { this.props.navigation.navigate('TiffinCount' , {
                            title: 'Sangita Ben',
                            subtitle: 'Lunch',
                            amount: 70,
                            navigation: this.props.navigation,
                            showImage: 'lunch'
                        })
                        }}
                />
                <List.Item
                    title="Sangita Ben"
                    description="Dinner"
                    left={props => <List.Icon {...props} icon="person" />}
                    right={props => <List.Icon {...props} icon="arrow-forward" />}
                    onPress={
                        () => { this.props.navigation.navigate('TiffinCount' , {
                            title: 'Sangita Ben',
                            subtitle: 'Dinner',
                            amount: 60,
                            navigation: this.props.navigation,
                            showImage: 'dinner'
                        })
                        }}
                />
            </SafeAreaView>
        );
    }
}

export default TiffinMakerList;
