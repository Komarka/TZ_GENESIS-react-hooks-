import React from "react";
import { View, Text } from "react-native";
import { Card } from 'react-native-elements'


export default DetailsPage = ( { navigation } ) => {
    const age = navigation.getParam('age');
    const city = navigation.getParam('city');
    const name = navigation.getParam('name');

    return (
        <View>
            <Card
                title={name}
                image={{uri: 'http://www.bview.tv/assets/images/avatar.jpg'}}>
                <Text>
                   {`${city}, ${age}`}
                </Text>
            </Card>
        </View>
    )
}

//header setup
DetailsPage.navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };


