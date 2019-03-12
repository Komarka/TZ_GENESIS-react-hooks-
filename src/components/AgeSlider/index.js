import React from "react";

import { View } from "react-native";
import RangeSlider from 'rn-range-slider';
import { Text } from "react-native-elements";

export default AgeSlider = (props) => {
    return (
        <View style={{marginBottom:"10%", marginTop:"10%", flexDirection:"row", justifyContent:"space-between"}}>
          <Text h4>Возраст</Text>
          <RangeSlider style={{width:'60%', height:60, marginTop:"-8%"}}
            {...props}
            labelBorderWidth={0}
            labelTextColor="grey"
            labelBackgroundColor="#ffffff"
            labelBorderColor="#ffffff"
            blankColor="grey"
            lowValue={18}
           />
        </View>
    )
}