import React, {Component} from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { List, Text } from 'react-native-paper';
import firebase from 'firebase';

import Header from "./Header";

class TiffinMakerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
    }

    async componentWillMount() {
        await firebase.database().ref('/member_list').on('value', data => {
            this.setState({ members: Object.values(data.val()) });
        });
    }


    render() {
        let items = null;
        if (this.state.members.length > 0) {
            items = this.state.members.map(member => {
                return (
                    <List.Item
                        key={member.key}
                        title={member.name}
                        description={member.type}
                        left={props => <List.Icon {...props} icon="person"/>}
                        right={props => <List.Icon {...props} icon="arrow-forward"/>}
                        onPress={
                            () => {
                                this.props.navigation.navigate('TiffinCount', {
                                    title: member.name,
                                    subtitle: member.type,
                                    amount: member.amount,
                                    navigation: this.props.navigation,
                                    key: member.key
                                })
                            }}
                    />
                )
            });
        }
        return (
            <SafeAreaView style={{ flex:1 }} >
                <Header title="Menu" subtitle="People" />
                {items}
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => { this.props.navigation.navigate('AddTiffinMember') }}
                >
                    <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
   plusButton: {
       width: 60,
       height: 60,
       borderRadius: 30,
       backgroundColor: '#6200EE',
       position: 'absolute',
       bottom: 20,
       right: 20,
   },
   plusText: {
       fontSize: 30,
       alignSelf: 'center',
       top: 8,
       color: '#fff'
   }
});

export default TiffinMakerList;
