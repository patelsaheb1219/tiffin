'use strict';
import React, {Component} from 'react';
import firebase from 'firebase';
import uuid from 'react-native-uuid';
import { SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Keyboard } from "react-native";
import { TextInput, Dialog, Portal, Button, RadioButton, Text } from "react-native-paper";

import Header from "./Header";

class AddTiffinMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: '',
            type: '',
            visible: false,
            value: 'Breakfast',
        };
        this.addMember = this.addMember.bind(this);
    }

    async addMember() {
        try {
            await firebase.database().ref('member_list/').push({
                key: uuid(),
                name: this.state.name,
                amount: this.state.amount,
                type: this.state.type
            });
            this.props.navigation.navigate('TiffinMakerList');
        } catch (e) {
            console.log(e)
        }

    }

    _showDialog = () => {
        this.setState({ visible: true });
        Keyboard.dismiss();
    };

    _hideDialog = () => this.setState({ visible: false });

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <Header title="ADD" subtitle="New Member"  showBackArrow={true} navigation={navigation} />
                <KeyboardAvoidingView style={{flex:1, justifyContent: 'center'}} behavior="padding" enabledd>
                    <View style={styles.view} />
                    <View style={styles.view} >
                        <TextInput
                            label='Name'
                            value={this.state.name}
                            onChangeText={name => this.setState({name} )}
                            placeholder='Tiffin holder name'
                            mode='outlined'
                            style={styles.textInput}
                        />
                        <TextInput
                            label='Amount'
                            value={this.state.amount}
                            onChangeText={amount => this.setState({ amount })}
                            placeholder='Enter Amount'
                            mode='outlined'
                            style={styles.textInput}
                        />
                        <Button onPress={this._showDialog}>Select Type</Button>
                        <Portal>
                            <Dialog
                                visible={this.state.visible}
                                onDismiss={this._hideDialog}>
                                <Dialog.Title>Type</Dialog.Title>
                                <Dialog.Content>
                                    <RadioButton.Group
                                        onValueChange={type => this.setState({ type })}
                                        value={this.state.type}
                                    >
                                        <View style={{ flexDirection: 'row' }}>
                                            <RadioButton value="Breakfast" />
                                            <Text style={{ fontSize: 20, marginVertical: 3 }}>Breakfast</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <RadioButton value="Lunch" />
                                            <Text style={{ fontSize: 20, marginVertical: 3 }}>Lunch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <RadioButton value="Dinner" />
                                            <Text style={{ fontSize: 20, marginVertical: 3 }}>Dinner</Text>
                                        </View>
                                    </RadioButton.Group>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={this._hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        <TextInput
                            label='Type'
                            value={this.state.type}
                            placeholder="Type"
                            disabled
                            style={styles.textInput}
                        />
                        <Button mode="contained" style={styles.textInput} onPress={this.addMember}>submit</Button>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    view: {
        flexGrow: 1
    },
    textInput: {
        marginHorizontal: 10, marginBottom: 10
    }
});

export default AddTiffinMember;
