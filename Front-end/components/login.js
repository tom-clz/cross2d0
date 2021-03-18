import React from 'react';
import { StyleSheet,TouchableOpacity, Text, TextInput, View, Image} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png"}


export function Login({navigation}) {
    return ( 
        
      <View style={styles.screen}>
       
        <Text style={styles.title}>Welcome to NoteApp</Text>
        <Image style={styles.img} source={{
          uri: 'https://image.flaticon.com/icons/png/512/1363/1363564.png',
        }}/>
        <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#ccc'/> 
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#ccc'/>

      
        <TouchableOpacity style={styles.myButton} >
            <Text onPress={() => navigation.navigate('Tasks')}> LOGIN </Text>
        </TouchableOpacity>
        <View style={styles.txt}>
          <TouchableOpacity>
          <Text  onPress={() => navigation.navigate('RegisterPage')}> Don't have an account ? create one </Text>

          </TouchableOpacity>
        </View>
        
    </View>
   
    )    
};


const styles = StyleSheet.create({
screen: {
    flex: 1,
    alignItems:'center',
    
},
   img: {
    width: 100,
    height: 100,
    
   },
   title: {
        fontSize: 30,
        fontWeight: 'bold', 
        alignSelf: 'center',
        marginBottom: 150,
        marginTop: 20,
    },
    input: {
        
        backgroundColor: '#e8e8e8',
        width: '95%',
        height: '9%',
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center'

    },

    myButton: {
        
        backgroundColor: 'coral',
        borderRadius: 15,
        textShadowColor: 'white',
        padding: 14,
        fontWeight: 'bold', 
        alignItems: 'center',
        top: 50,
        width:'95%',
        height: '7%'
    },

    txt: {
      position: 'absolute',
      bottom: 60,
      marginBottom: 10,
    },

    
})


export default Login;
