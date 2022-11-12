import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React from 'react';
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import Card from '../assets/card.png';



function HomeScreen(props) {
    return (
        <NativeBaseProvider>
          <View style = {styles.container}>
              {/* <Text style = {styles.card_text}>Card: </Text> */}
              <Image resizeMode='contain' style = {styles.card_image} source={Card}/>
              {/* <Text style = {styles.overview_text}>Overview: </Text> */}
              <Example/>
          </View>
        </NativeBaseProvider>

        
    );
}

const Example = () => {
    const data = [{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Starbucks Coffee",
      timeStamp: "12:47 PM",
      recentText: "$4.57",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Delce Coffee",
      timeStamp: "11:11 PM",
      recentText: "$5.47",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "HoneyBird",
      timeStamp: "6:22 PM",
      recentText: "$12.11",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Cava",
      timeStamp: "8:56 PM",
      recentText: "$12.34",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Dulce Club Sandwhich",
      timeStamp: "12:47 PM",
      recentText: "$11.34",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    },{
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Dulce Club Sandwhich",
        timeStamp: "12:47 PM",
        recentText: "$11.34",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      },{
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Dulce Club Sandwhich",
        timeStamp: "12:47 PM",
        recentText: "$11.34",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      },{
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Dulce Club Sandwhich",
        timeStamp: "12:47 PM",
        recentText: "$11.34",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      },{
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Dulce Club Sandwhich",
        timeStamp: "12:47 PM",
        recentText: "$11.34",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }
    ];
    return(
        <ScrollView>
        <Box>
        <Heading fontSize="xl" p="10" pb="3" pl='-2'>
          Transactions
        </Heading>
        <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.800" pl={["0", "0"]} pr={["0", "0"]} py="1">
              <HStack space={[1, 3]} justifyContent="space-between">
                <Avatar size="30px" source={{
            uri: item.avatarUrl
          }} />
                <VStack>
                  <Text _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" bold>
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>} keyExtractor={item => item.id} />
      </Box>
      </ScrollView>);
    
  };



const styles = StyleSheet.create({
    card_image:{
        width: '100%',
        height: '35%',
        // backgroundColor: "green",
        top: 20,
        bottom: 20
    },
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    card_text: {
        left: '-40%',
        top: 5,
        color:"grey"
    },
    overview_text: {
        left: '-36%',
        top: 20,
        color:"grey"
    },
 
})

export default HomeScreen;