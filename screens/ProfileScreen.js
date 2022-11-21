import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView, Button} from 'native-base';
import React, {useState, useRef,useCallback, useMemo,} from 'react';
import { Image, View,StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import warningIcon from '../assets/warningIcon.png';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import { initializeApp } from 'firebase/app';
import {getFirestore, setDoc, doc} from 'firebase/firestore';


function ProfileScreen(props) {

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['80%','35%'];
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBrHL2_VU2d1_KjLz_IdQcssYE91pCRO3w",
    authDomain: "lavalableap-29c50.firebaseapp.com",
    projectId: "lavalableap-29c50",
    storageBucket: "lavalableap-29c50.appspot.com",
    messagingSenderId: "811090392177",
    appId: "1:811090392177:web:559ca2825d7c4f915597d0",
    measurementId: "G-WB9KKJS664"
  };

  const app = initializeApp(firebaseConfig);

  const sendDataToFireStore = async() =>{
    const firestore = getFirestore(app);
    await setDoc(doc(firestore, "users", "features"),{
      childSpendingLimit: Math.floor(range*300),
    });
  }

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

        <TouchableOpacity style = {styles.button} onPress={sendDataToFireStore}>
          <Text style = {styles.buttonText}>Change Limit</Text>
        </TouchableOpacity>
        <BottomSheet
          ref={sheetRef}
          // index={1}
          snapPoints={snapPoints}
          // enablePanDownToClose = {true}
          // onChange={handleSheetChanges}
        >
          <BottomSheetView>
            <Example/>
          </BottomSheetView>
        </BottomSheet>
      </View>
      </NativeBaseProvider>

        
    );
}
const Example = () => {
    const data = [{
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Review Action",
      timeStamp: "12:47 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Review Action",
      timeStamp: "11:11 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Dulce",
      timeStamp: "8:56 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "28694a0f-3da1-471f-bd96-142456e29d76",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "68694a0f-3da1-431f-bd56-142371e29d78",
      fullName: "Review Action",
      timeStamp: "8:56 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "28694a0f-3da1-471f-bd96-142456e29d79",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }, {
      id: "28694a0f-3da1-471f-bd96-142456e29d73",
      fullName: "Review Action",
      timeStamp: "6:22 PM",
      recentText: "Transaction above limit attempted!",
      image: warningIcon
    }];
    return <Box height='500' p="5" pb="2">
        <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
              <HStack space={[12, 3]} justifyContent="space-between">
                <Avatar size="48px" source={item.image} />
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
      </Box>;
  };
  


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
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
    },
    button:{
      height: 30,
      borderRadius: 5,
      backgroundColor:'#A0D995',
      width:100,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText:{
      color: 'white',
      fonSize:20
    }

 
})

export default ProfileScreen;