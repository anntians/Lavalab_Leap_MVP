import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView} from 'native-base';
import React, {useState} from 'react';
import { Image, View,StyleSheet, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import warningIcon from '../assets/warningicon.svg';

function ProfileScreen(props) {

    const [range,setRange] = useState(0)


    return (
        <NativeBaseProvider>
          <View style = {styles.container}>
            <Text style = {styles.title}>Profile</Text>
            <Text style = {styles.overview_text}>Current Credit Score</Text>
            <View style={styles.circle}> 
                <Text style={styles.score}>714</Text>
            </View>
            <Text style = {styles.overview_text}>Adjust Tommy's Credit Limit</Text>
            
            <View style={styles.square}> 
                <Text style={styles.dollar_text}>${Math.floor(range*300)}</Text>
            </View>
            <Slider
            style={styles.slider_style}
            onValueChange = {(value)=>setRange(value)}
            minimumValue = {0}
            maximumValue = {1}
            thumbTintColor = 'white'
            maximumTrackTintColor='#A0D99530'
            minimumTrackTintColor='#A0D995'
            />
            {/* <Text style = {styles.overview_text}>Recent Notifications</Text> */}
            <Example/>
            
          </View>
            
        </NativeBaseProvider>

        
    );
}

const Example = () => {
    const data = [{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Review Action",
      timeStamp: "12:47 PM",
      recentText: "Child in Yellow Zone for food!",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Review Action",
      timeStamp: "11:11 PM",
      recentText: "Child in Red Zone for clothing!",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Child in Yellow Zone for food!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Review Action",
      timeStamp: "8:56 PM",
      recentText: "Transaction above limit attempted!",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Review Action",
        timeStamp: "8:56 PM",
        recentText: "Transaction above limit attempted!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Review Action",
        timeStamp: "8:56 PM",
        recentText: "Transaction above limit attempted!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Review Action",
        timeStamp: "8:56 PM",
        recentText: "Transaction above limit attempted!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Review Action",
        timeStamp: "8:56 PM",
        recentText: "Transaction above limit attempted!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, 
    ];
    return(
        <Box height ={200}>
        <Text style= {styles.box_textTitle}>Recent Notifications</Text>
        <FlatList data={data} renderItem={({item
      }) => <Box borderWidth="0" mbackgroundColor="muted.200" _dark={{
        borderColor: "muted.300"
      }} borderColor="muted.300" borderRadius= "10" pl={["1", "1"]} pr={["1", "1"]} py="1">
              <HStack space={[3, 3]} justifyContent="space-between">
                <Avatar size="30px" source={{
            uri: item.avatarUrl
          }} />
                <VStack>
                  <Text _dark={{
              color: "muted.300"
            }} color="muted.300" bold>
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
      </Box>);
    
  };

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        left: 20,
        alignSelf: 'left',
        paddingBottom: 5
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center'
    },
    circle:{
        width: 150,
        height: 150,
        paddingTop:20,
        paddingBottom:30,
        borderRadius: 150 / 2,
        backgroundColor: '#A0D995',
        justifyContent: 'center',
        alignItems:'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    square:{
        width: 50,
        height: 30,
        borderRadius: 20 / 8,
        backgroundColor: '#A0D995',
        justifyContent: 'center'
    },
    overview_text: {
        paddingTop: 10,
        paddingBottom:10,
        color:"grey",
        alignItems:'left',
        paddingLeft: 20,
        alignSelf: 'left',
    },
    box_textTitle: {
        paddingTop: 10,
        paddingBottom:10,
        color:"grey",
        alignItems:'left',
        alignSelf: 'left',
    },
    dollar_text:{
        fontSize:15,
        color:'white',
        textAlign:'center'
    },
    slider_style:{
        width:300,
        height:50, 
        color:"#C2D76E",
        paddingTop: 10
    },
    score:{
        fontSize:35,
        color:'white',
        textAlign: 'center',
        alignItems:'center'
    }
 
})

export default ProfileScreen;