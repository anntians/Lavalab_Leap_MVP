import { Box, Heading, FlatList, HStack, Avatar, VStack, Spacer, NativeBaseProvider, ScrollView, Button} from 'native-base';
import React, {useState, useRef,useCallback, useMemo, useEffect} from 'react';
import { Image, View,StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import warningIcon from '../assets/warningIcon.png';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';

import { initializeApp } from 'firebase/app';
import {getFirestore, setDoc, doc, collection, query, getDoc} from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';



function ProfileScreen(props) {

  useEffect(() => {
    // write your code here, it's like componentWillMount
    onScreenLoad();
  }, [])

  const onScreenLoad = async()=>{
    const firestore = getFirestore(app);
    const docRef = doc(firestore, "users", "features");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().childSpendingLimit);
      setLimitValue(docSnap.data().childSpendingLimit/300);
      setRange(docSnap.data().childSpendingLimit/300);
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [limitValue, setLimitValue] = useState(0);

  const snapPoints = ['47%','80%'];
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
        <Text style = {styles.overview_text}>Tommy's Credit Score:</Text>
        <LinearGradient
        // Button Linear Gradient
        colors={['#4CACBC', '#A0D995']}
        end = {{x:.9, y:.1}}
        style={styles.circle}>
          <Text style={styles.score}>714</Text>
      </LinearGradient>
        <Text style = {styles.overview_text}>Adjust Tommy's Credit Limit:</Text>
            
        <LinearGradient
        // Button Linear Gradient
        colors={['#A0D995', '#4CACBC']}
        end = {{x:0.1, y:.9}}

        style={styles.square}>
          <Text style={styles.dollar_text}>${Math.floor(range*300)}</Text>
      </LinearGradient>

        <Slider
            value={limitValue}
            style={styles.slider_style}
            onValueChange = {(value)=>setRange(value)}
            minimumValue = {0}
            maximumValue = {1}
            thumbTintColor = 'white'
            maximumTrackTintColor='#A0D99530'
            minimumTrackTintColor='#4CACBC'
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
          style = {styles.bottomSheetShadow}
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
    id: "bd7acbea-c1b1-46c2-aed4-3ad53abb28ba",
    fullName: "Review Action from Nov 28, 12:47 PM",
    timeStamp: "",
    recentText: "You made a purchase at Dulce, you are now in the Red Zone for food!",
    image: warningIcon
  }, {
    id: "3ac68afc-c601-48d3-a4f8-fbd91aa97f63",
    fullName: "Review Action from Nov 23, 8:32 PM",
    timeStamp: "",
    recentText: "Transaction above limit attempted at Target!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Review Action from Nov 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "bd7acbea-c1b1-46c2-aed5-3ad54abb28ba",
    fullName: "Review Action from Nov 18, 12:47 PM",
    timeStamp: "",
    recentText: "You made a purchase at Dulce, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "3ac68afc-c605-46d3-a4f8-fbd91aa97f63",
    fullName: "Review Action from Nov 12, 8:32 PM",
    timeStamp: "",
    recentText: "Transaction above limit attempted at Apple!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    fullName: "Review Action from Nov 10, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are approaching the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Review Action from Oct 28, 12:47 PM",
    timeStamp: "",
    recentText: "You made a purchase at Dulce, you are now in the Red Zone for food!",
    image: warningIcon
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Review Action from Oct 23, 8:32 PM",
    timeStamp: "",
    recentText: "Transaction above limit attempted at Target!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-245571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-345571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-445571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-545571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-645571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-745571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-845571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }, {
    id: "58694a0f-3da1-471f-bd96-945571e29d76",
    fullName: "Review Action from Oct 20, 11:32 AM",
    timeStamp: "",
    recentText: "You made a purchase at Starbucks, you are now in the Yellow Zone for food!",
    image: warningIcon
  }];
  return <Box height='500' p="5" pb="2">
        <FlatList data={data} renderItem={({
        item
      }) => <Box style={{backgroundColor:'#F6E3C5'}} borderBottomWidth="4" borderBottomColor="white" borderRadius="2xl" _dark={{
        borderColor: "light.50"
      }} borderColor="muted.800" pl={["2", "5"]} pr={["100", "10"]} py="2">
              <HStack space={[3, 0]} justifyContent="space-between">
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
        backgroundColor: '#4CACBC',
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
        backgroundColor: '#4CACBC',
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
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        textAlign: 'center',
        alignItems:'center'
    },
    button:{
      height: 30,
      borderRadius: 5,
      backgroundColor:'#4CACBC',
      width:100,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonText:{
      color: 'white',
      fonSize:20
    },
    bottomSheetShadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    alert:{
      backgroundColor: 'red'
    }

 
})

export default ProfileScreen;