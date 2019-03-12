import React, { useState, useCallback } from "react";

//components
import { Container, AgeSlider, UsersList } from "@components";
import { Button, Input, Icon } from "react-native-elements";
import { View } from "react-native";

//api
import getUsers from "@api";


export default SearchPage = ( { navigation } ) => {

  //state
  [cityValue, setCity] = useState("");
  [ageRange, setAgeRange] = useState({min: 18, max: 100});
  [userObj, setUserObj] = useState({users:[], error:[], loading:false, show:false})

  const onChangeCity = useCallback(
    value => {
      setCity(value);
    },
    [cityValue]
  );


  const onAgeChange = useCallback(
    (min, max, fromUser) => {
      fromUser ? setAgeRange({min, max}) : null;
    },
    [ageRange]
  );

  const onFind = useCallback(
    async () => {
      setUserObj({...userObj, loading: true, show: false});

      const { users, error } = await getUsers('https://my-json-server.typicode.com/Komarka/users/db');

     setUserObj({users, error, cityValue, ageRange, navigation, loading: false, show: true });

    },
    [userObj]
  );


  const clearInput = useCallback(
    () => setCity(''),
    [cityValue]
  );


  return (
    <Container>
      <View >
      <View>
          <Input
            value={cityValue}
            placeholder={'Введите город'}
            onChangeText={onChangeCity}
            rightIcon={
              <Icon
                name="close"
                size={24}
                color="black"
                onPress={clearInput}
              />
            }
          />
        </View>
       <AgeSlider onValueChanged={onAgeChange} />
       <View>
          <Button
           title={'НАЙТИ'}
           onPress={onFind}
           loading={userObj.loading}
            />
        </View>
      </View>
    {  userObj.show  && <UsersList userObj={userObj} /> } 
    </Container>
  );
};


//header setup
SearchPage.navigationOptions = () => {
  return {
    headerTitle: "Поиск",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    }
  };
};




