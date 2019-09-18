import React, {Component} from 'react';
import { SafeAreaView, View, Image, AsyncStorage } from "react-native";
import { Title, Text, TextInput, Subheading, Button } from "react-native-paper";
import Header from "./Header";

class TiffinCount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tiffinNumber: null
        }
    }

    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title');
        const subtitle = navigation.getParam('subtitle');
        const amount = navigation.getParam('amount');
        const showImage = navigation.getParam('showImage');
        return (
            <SafeAreaView>
                <Header title="Tiffin Count" subtitle="" showBackArrow={true} navigation={navigation} />
                <View style={{flexGrow:1}}/>
                <View style={{ flexGrow:1, alignItems: 'center', marginVertical: 20 }} >
                    <Title>{title}</Title>
                    <Subheading>{subtitle}</Subheading>
                </View>
                <View style={{ flexGrow:1, alignItems: 'center', marginVertical: 20 }}>
                    { showImage === 'lunch' ? <Image source={require('../assets/lunch.jpeg')} /> : null }
                    { showImage === 'dinner' ? <Image source={require('../assets/dinner.jpeg')} /> : null }
                    { showImage === 'breakfast' ? <Image source={require('../assets/breakfast.jpeg')} /> : null }
                </View>
                <View>
                    <TextInput
                        label='Amount'
                        value={amount.toString()}
                        disabled
                        mode='outlined'
                        style={{ marginHorizontal: 10 }}
                    />
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1 }}>
                            <Button mode="contained" onPress={() => console.log('Pressed')}>
                                -
                            </Button>
                        </View>
                        <View style={{ flexGrow: 2 }}>
                            <TextInput
                            value={this.state.tiffinNumber ? this.state.tiffinNumber : 0}
                            mode='outlined'
                            disabled
                            style={{ marginHorizontal: 10 }}
                        />
                        </View>
                        <View style={{ flexGrow: 1 }}>
                            <Button mode="contained" onPress={() => console.log('Pressed')}>
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
