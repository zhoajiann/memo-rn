import { useNavigation, useRoute } from '@react-navigation/core';
import React,{useEffect,useState} from 'react'
import { View, StyleSheet,Text, TouchableOpacity, Image,AsyncStorage ,Alert, TextInput,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const QuanBu = () => {

    const nav = useNavigation()
    const rou = useRoute()

    useEffect(()=>{
        AsyncStorage.getItem('list',function(error,list){
            setData(JSON.parse(list))
        })
    },[])

    const [data,setData] = useState([]);

    const deleteNote = (index) =>{


        Alert.alert('alert','删除',
        [
            {
                text:"确定", onPress:()=>{
                        var newlist = JSON.parse(JSON.stringify(data))
                        newlist.splice(index,1)
                        AsyncStorage.setItem('list',JSON.stringify(newlist),function(error){
                                setData(newlist); 
                        })
                    }
                },
        ]
        );

    }

    const seeOne = (item)=>{
        nav.navigate('detail',{data:item})
    }


    return (
        <ScrollView>
        

        {
            rou?.name == 'main' 
            ?
            <View>
                <View style={{height:70,backgroundColor:'#fff',paddingTop:10,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'88%',height:48,backgroundColor:'#ECECEC',borderRadius:20,overflow:'hidden',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <View style={{width:'90%'}}>
                    <TextInput  placeholder="搜索便签" style={{fontSize:15}}/>
            </View>
            </View>

        </View>
            
            
            <View style={styles.list}>

            <TouchableOpacity style={styles.btn}>
                <Icon name="currency-usd-circle" size={35} color="red" />
                <Text>记账单</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.btn} 
                onPress={()=>{nav.navigate('detail')}}
            >
                <Icon name="text-box-multiple" size={35} color="blue" />
                <Text>写清单</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon name="marker" size={35} color="prople" />
                <Text>听写</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Icon name="tshirt-crew"  size={35} color="yellow" />
                <Text>画涂鸦</Text>
            </TouchableOpacity>
            
        </View>
        </View>
        
        :
        <View></View>


        }

        

        <View style={{height:'100%',backgroundColor:'#fff',alignItems:'center'}}>
        {


            data.map((value,index)=>{
                return (
                    <TouchableOpacity 
                        style={styles.note}
                        key={index}
                        onLongPress={()=>deleteNote(index)}
                        onPress={()=>seeOne(value)}
                    >
                        <Text style={{fontSize:30,color:"#222"}}>{value.title}</Text>
                        <Text style={{fontSize:20,color:"#444"}}>{value.time}</Text>
                    </TouchableOpacity>
                )
            })

        }
        </View>
    </ScrollView>
    )


}

const styles = StyleSheet.create({

    list:{
        height:120,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center'
    },
    btn:{
        width:'25%',
        justifyContent:'center',
        alignItems:'center',
    },
    note:{
        height:100,
        width:'95%',
        marginBottom:'3%',
        paddingLeft:'4%',
        backgroundColor:'#ECECEC',
        borderRadius:10,
        justifyContent:'center'
    }
    
})


export default QuanBu

