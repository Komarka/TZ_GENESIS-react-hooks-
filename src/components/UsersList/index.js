import React, { useMemo, useCallback } from "react";
import TouchableScale from 'react-native-touchable-scale'; 
import LinearGradient from 'react-native-linear-gradient';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements'

export default UsersList = ( {userObj:{users, cityValue, navigation, ageRange: { min, max } } }) => {
    
    //filter users due to age range and city
    const filteredUsers = useMemo (
        () => {
           return users.filter((user)=>{
                return user.city === cityValue
                         && (user.age >= min && user.age <= max);
            })
        },
        [users,cityValue,min,max]
    )


    const goToDetails = useCallback(
        (city,name,age) => {
            navigation.navigate('DetailsPage',{city, name, age}) 
        } ,
        []
    );


    return (
        <Card containerStyle={{padding: "5%"}} >
        {
         filteredUsers.length > 0 ? filteredUsers.map((u, i) => {
            return (
                <ListItem
                    onPress={goToDetails.bind(this,u.city,u.name,u.age)}
                    key={i}
                    style={{marginTop:"5%",marginBottom:"5%"}}
                    Component={TouchableScale}
                    friction={90} 
                    tension={100} 
                    activeScale={0.95} 
                    linearGradientProps={{
                        colors: ['#FF9800', '#F44336'],
                        start:{x:1, y:0},
                        end: {x:0.2, y:0},
                    }}
                    ViewComponent={LinearGradient} 
                    leftAvatar={{ rounded: true, source: { uri: 'http://www.bview.tv/assets/images/avatar.jpg' } }}
                    title={u.name}
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle={`${u.age}, ${u.city}`}
                    chevronColor="white"
                    chevron
                />
            );
          }) : <Text h4 style={{textAlign: "center" }}>Ничего не найдено</Text>
        }
      </Card>
    );
  }

