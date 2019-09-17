import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import TiffinMakerList from './TiffinMakerList';
import TiffinCount from './TiffinCount';

const RootStack = createSwitchNavigator({
    TiffinMakerList: {
        screen: TiffinMakerList
    },
    TiffinCount: {
        screen: TiffinCount
    }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
