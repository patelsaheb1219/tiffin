import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <Appbar.Header>
                {
                    this.props.showBackArrow ? <Appbar.BackAction onPress={ () => {
                        this.props.navigation.navigate('TiffinMakerList');
                    } }/> : null
                }
                <Appbar.Content
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    style={styles.content}
                />
            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
    },
    content: {
        alignSelf: 'center'
    }
});
