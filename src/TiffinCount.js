import React, {Component} from 'react';
import { SafeAreaView, View, Image } from "react-native";
import firebase from "firebase";
import { Title, TextInput, Subheading, Button } from "react-native-paper";
import Header from "./Header";
import uuid from "react-native-uuid";

class TiffinCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiffinNumber: 0,
            key: null,
            title: '',
            type: '',
            amount:'',
            data: []
        };
        this.addData = this.addData.bind(this);
        this.subtractTiffin = this.subtractTiffin.bind(this);
    }

    async componentWillMount() {
        await this.setState({ key: this.props.navigation.getParam('key') });
        await firebase.database().ref('tiffin_number/' + this.state.key)
            .on('value', async data => {
                if (data) {
                    await this.setState({ tiffinNumber: Object.values(data.val())[0] });
                }
            });
    }


    updateTinnfinNumber = async (key, number) => {
        try {
            let tiffinNumberSanpshot = firebase.database().ref('tiffin_number/' + key);
            tiffinNumberSanpshot.update({
                tiffinNumber: number
            });
        } catch (e) {
            console.log(e);
        }
    };

    async addData() {
        await this.setState({ tiffinNumber: this.state.tiffinNumber + 1 });
        await this.updateTinnfinNumber(this.state.key, this.state.tiffinNumber)
    }

    async subtractTiffin() {
        await this.setState({ tiffinNumber: this.state.tiffinNumber - 1 });
        await this.updateTinnfinNumber(this.state.key, this.state.tiffinNumber)
    }


    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title');
        const type = navigation.getParam('subtitle');
        const amount = navigation.getParam('amount');
        return (
            <SafeAreaView>
                <Header title="Tiffin Count" subtitle="" showBackArrow={true} navigation={navigation} />
                <View style={{flexGrow:1}}/>
                <View style={{ flexGrow:1, alignItems: 'center', marginVertical: 20 }} >
                    <Title>{title}</Title>
                    <Subheading>{type}</Subheading>
                </View>
                <View style={{ flexGrow:1, alignItems: 'center', marginVertical: 20 }}>
                    { type === 'Lunch' ? <Image source={require('../assets/lunch.jpeg')} /> : null }
                    { type === 'Dinner' ? <Image source={require('../assets/dinner.jpeg')} /> : null }
                    { type === 'Breakfast' ? <Image source={require('../assets/breakfast.jpeg')} /> : null }
                </View>
                <View>
                    <TextInput
                        label='Amount'
                        value={amount}
                        disabled
                        mode='outlined'
                        style={{ marginHorizontal: 10 }}
                    />
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1 }}>
                            <Button mode="contained" onPress={this.subtractTiffin}>
                                -
                            </Button>
                        </View>
                        <View style={{ flexGrow: 2, alignItems: 'center' }}>
                            <Title>{this.state.tiffinNumber}</Title>
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            <Button mode="contained" onPress={this.addData}>
                                +
                            </Button>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default TiffinCount;
