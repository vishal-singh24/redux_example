import { View, Text, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { addUser, editUser } from '../redux/UserSlice'
import { useNavigation, useRoute } from '@react-navigation/native'


const AddUsers = () => {

    const route=useRoute();
    console.log(route.params);
    const navigation=useNavigation();

    const [userName, setUserName] = useState(route.params.type=='edit'?route.params.data.userName:'')
    const [userEmail, setUserEmail] = useState(route.params.type=='edit'?route.params.data.userEmail:'')
    const [userMobile, setUserMobile] = useState(route.params.type=='edit'?route.params.data.userMobile:'')
    const [userAddress, setUserAddress] = useState(route.params.type=='edit'?route.params.data.userAddress:'')

    const dispatch=useDispatch();

    const validate = () => {
        let valid = true;
        if (userName == '') {
            valid = false;
        }
        if (userEmail == '') {
            valid = false;
        }
        if (userMobile == '') {
            valid = false;
        }
        if (userAddress == '') {
            valid = false;
        }
        return valid;
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput value={userName} onChangeText={text=>setUserName(text)} placeholder="Enter User Name" style={{ height: 50, width: '90%', borderWidth: 1, borderColor: 'black', alignSelf: 'center', marginTop: 40, borderRadius: 20, paddingLeft: 20 }} />
            <TextInput value={userEmail} onChangeText={text=>setUserEmail(text)} placeholder="Enter User email" style={{ height: 50, width: '90%', borderWidth: 1, borderColor: 'black', alignSelf: 'center', marginTop: 40, borderRadius: 20, paddingLeft: 20 }} />
            <TextInput value={userMobile} onChangeText={text=>setUserMobile(text)} placeholder="Enter User Mobile Number" style={{ height: 50, width: '90%', borderWidth: 1, borderColor: 'black', alignSelf: 'center', marginTop: 40, borderRadius: 20, paddingLeft: 20 }} />
            <TextInput value={userAddress} onChangeText={text=>setUserAddress(text)} placeholder="Enter User Address" style={{ height: 50, width: '90%', borderWidth: 1, borderColor: 'black', alignSelf: 'center', marginTop: 40, borderRadius: 20, paddingLeft: 20 }} />
            <TouchableOpacity style={{ height: 50, width: '80%', backgroundColor: 'black', marginTop: 40, alignSelf: 'center', justifyContent: 'center', alignItems: 'center',  }} onPress={()=>{
                if(validate())
                {
                    if(route.params.type=='edit')
                    {
                        dispatch(editUser({userName:userName,userEmail:userEmail,userMobile:userMobile,userAddress:userAddress,index:route.params.index}))

                    }else{
                        dispatch(addUser({userName,userEmail,userMobile,userAddress}));
                    }
                   
                   navigation.goBack();

                }else{
                    Alert.alert("Please fill all the details")
                }
            }}>
                <Text style={{ color: 'white' }}>
                    Save User
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddUsers