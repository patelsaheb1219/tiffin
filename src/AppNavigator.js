import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import TiffinMakerList from './TiffinMakerList';
import TiffinCount from './TiffinCount';
import AddTiffinMember from "./AddTiffinMember";

const RootStack = createSwitchNavigator({
    TiffinMakerList: {
        screen: TiffinMakerList
    },
    TiffinCount: {
        screen: TiffinCount
    },
    AddTiffinMember: {
        screen: AddTiffinMember
    },
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
