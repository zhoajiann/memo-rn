import React from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Image,AsyncStorage ,Alert, TextInput, TouchableHighlight, TouchableHighlightComponent} from 'react-native';

import { useNavigation } from '@react-navigation/core';



const Wenjianjia = () => {
    useEffect(()=>{
        AsyncStorage.getItem('list',function(error,list){
            setData(JSON.parse(list))
        })
    },[])

    const [data,setData] = useState('');
    const nav = useNavigation()
    return (
        <TouchableOpacity 
                            style={styles.wenjianjia}
                            onPress={()=>{nav.navigate('quanbu')}}
                        >
                            <Icon name="wallet-membership"  size={35} color="#aaa" />
                            <Text style={styles.note}>便签</Text>
                            <Text style={styles.num}>{data.length}</Text>
                            <Icon name="chevron-right" color="#aaa" size={30} style={{position:'absolute',right:12}} />
                        </TouchableOpacity>
    )
}

export default Wenjianjia
