import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/UserSlice';

const User = () => {
    const navigation = useNavigation();
    const users = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log(users);
    return (
        <View style={{ flex: 1 }}>
            {/* users.length==0?{(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>
                    No data available
                </Text>
            </View>

            )}: */}
            <FlatList data={users.data} renderItem={({ item, index }) => {
                return (

                    <View style={{
                        width: '100%', height: 80, borderWidth: 1, alignSelf: 'center', marginTop: 20, borderRadius: 10, paddingLeft: 20, flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text>{"Name: " + item.userName}</Text>
                            <Text>{"Email:" + item.userEmail}</Text>
                            <Text>{"Mobile:" + item.userMobile}</Text>
                            <Text>{"Address:" + item.userAddress}</Text>
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Text style={{ padding: 5, borderWidth: 1, borderColor: 'black', }} onPress={() => navigation.navigate('AddUsers', { type: 'edit', data: item, index: index })}>
                                Edit
                            </Text>
                            <Text style={{ padding: 5, borderWidth: 1, borderColor: 'black', marginTop: 10 }}
                                onPress={()=>dispatch(deleteUser(index))}
                            >
                                Delete
                            </Text>
                        </View>
                    </View>
                )
            }} />
            <TouchableOpacity style={{ position: 'absolute', bottom: 0, width: '100%', height: 50, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 22, }} onPress={() => navigation.navigate('AddUsers', { type: 'add' })}>
                    Add Users
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default User