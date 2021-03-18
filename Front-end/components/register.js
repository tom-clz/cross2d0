import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';


export default function Register({navigation}) {
    return (<View>
       <Text style={styles.text}>Create an Account</Text>
       <TextInput style={styles.input} placeholder='First Name' placeholderTextColor='#ccc'/> 
       <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor='#ccc'/>
       <TextInput style={styles.input} placeholder='Birthdate' placeholderTextColor='#ccc'/>
       <TextInput style={styles.input} placeholder='Email' placeholderTextColor='#ccc'/>
       <TextInput style={styles.input} placeholder='Password' placeholderTextColor='#ccc' secureTextEntry={true}/>
       <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor='#ccc' secureTextEntry={true}/>
       <TextInput style={styles.input} placeholder='Gender' placeholderTextColor='#ccc'/>

       <TouchableOpacity style={styles.myButton} >
            <Text onPress={() => navigation.navigate('Tasks')}> CONFIRM </Text>
        </TouchableOpacity>
    </View>)
};

const styles= StyleSheet.create({

    input: {
        backgroundColor: '#e8e8e8',
        marginTop: 20,
        padding: 10,
        borderRadius: 15,
        

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
    },
    myButton: {
        backgroundColor: 'coral',
        borderRadius: 15,
        textShadowColor: 'white',
        padding: 14,
        fontWeight: 'bold', 
        alignItems: 'center',
        top: 50,
    }
})

