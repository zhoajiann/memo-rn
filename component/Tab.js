import React,{useEffect,useState} from 'react'

import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Image,AsyncStorage ,Alert, TextInput, TouchableHighlight, TouchableHighlightComponent} from 'react-native';


const Tab = () => {
    
    const [id,setTab] = useState('');

    return (
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
})
export default Tab
