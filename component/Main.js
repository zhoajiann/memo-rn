import { useNavigation } from '@react-navigation/core';
import React,{useEffect,useState} from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Image,AsyncStorage ,Alert, TextInput, TouchableHighlight, TouchableHighlightComponent} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QuanBu from './QuanBu';
// import Tab from './Tab';
import Wenjianjia from './Wenjianjia';

const Main = () => {
    useEffect(()=>{
        AsyncStorage.getItem('list',function(error,list){
            setData(JSON.parse(list))
        })
    },[])

    const [data,setData] = useState('');
    const nav = useNavigation()


    
    return (
        <ScrollView>
            

            <View style={styles.tab}>
                <TouchableHighlight 
                    style={styles.oneTab}
                    onPress={()=>setTab(0)}
                >
                    <Text 
                        style={
                            [
                                {height:'100%',fontSize:22},
                                {color:id==0?'yellow':'#000'},
                                {borderBottomColor:id==0?'yellow':'#ddd'},
                                {borderBottomWidth:id==0?2:0}
                            ]
                                
                        }>
                            全部
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={[styles.oneTab]}
                    onPress={()=>setTab(1)}
                >
                    <Text style={
                        [
                            {height:'100%',fontSize:22},
                            {color:id==1?'yellow':'#000'},
                            {borderBottomColor:id==1?'yellow':'#ddd'},
                            {borderBottomWidth:id==1?2:0}
                        ]
                    }>
                        文件夹
                        
                    </Text>
                </TouchableHighlight>            
                
                
            </View>
            

            {
                    id == 0
                    ?
                        <QuanBu data={{}}/>
                    :
                    <TouchableOpacity 
                            style={styles.wenjianjia}
                            onPress={()=>{nav.navigate('quanbu')}}
                        >
                            <Icon name="wallet-membership"  size={35} color="#aaa" />
                            <Text style={styles.note}>便签</Text>
                            <Text style={styles.num}>{data.length}</Text>
                            <Icon name="chevron-right" color="#aaa" size={30} style={{position:'absolute',right:12}} />
                        </TouchableOpacity>
                        

            }



        </ScrollView>
    )
}


const styles = StyleSheet.create({
    tab:{
        height:50,
        width:'100%',
        fontSize:20,
        backgroundColor:'#fff',
        flexDirection: "row",
    },
    oneTab:{
        width:'50%',
        height:50,
        fontSize:20,
        alignItems:'center'
    },
    wenjianjia:{
        width:'100%',
        height:70,
        flexDirection: "row",
        position:'relative',
        alignItems:'center',
        backgroundColor:'#F6F6F6',
    },
    note:{
        marginLeft:10,
        fontSize:25
    },
    num:{
        color:"#aaa",
        fontSize:25,
        position:'absolute',
        right:40
    }

})
export default Main
