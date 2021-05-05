import { useNavigation ,useRoute} from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, TextInput, AsyncStorage, Alert } from 'react-native';
import { useState } from 'react/cjs/react.development';

const Detail = ({  route }) => {
        
    const nav = useNavigation()

    useEffect(() => {
        nav.setOptions({

            headerRight: () => (
                <TouchableOpacity onPress={saveANote}>
                    <Text>
                        保存
                    </Text>

                </TouchableOpacity>
            )
        })
    }, [title, content])

    let atitle, acontent;
    if (route.params !== undefined) {

        atitle = route.params.data.title
        acontent = route.params.data.content
    } else {

        atitle =""
        acontent = ""

    }

    const [title, setTitle] = useState(atitle)
    const [content, setContent] = useState(acontent)

    const saveANote = () => {
        AsyncStorage.getItem('list', function (error, list) {
            if (list !== null) {
                setCon(list)

            } else {
                AsyncStorage.setItem('list', JSON.stringify([]), function (error) {
                       AsyncStorage.getItem('list', function (error, notesNotNull) {
                          setCon(notesNotNull)
                     })
                })
                }
        })


    }


    const setCon = (note) => {
        

        var time = (new Date()).toLocaleString()
        if (route.params) {
            for (var i = 0; i < JSON.parse(note).length; i++) {
                if (JSON.parse(note)[i].time == route.params.data.time) {
                    JSON.parse(note)[i].time = time;
                    JSON.parse(note)[i].title = title;
                    JSON.parse(note)[i].content = content;
                    
                }
            }
        } else {
            var array = JSON.parse(note)
            console.log(title);
            array.push({
                title: title,
                content: content,
                time: time
            })
        }
        AsyncStorage.setItem('list', JSON.stringify(array),() =>{
            nav.navigate('main', { data: {} })
        })
        setTitle('')
        setContent('')
    }

    return (
        <View>
            <View>
                <Text style={{ fontSize: 25, marginTop: 8 }}>
                    请输入标题:
                </Text>
            </View>
            <TextInput
                id='title'
                value={title}
                style={{ borderWidth: 0.5, fontSize: 20 }}
                onChangeText={(value) => setTitle(value)}
            />
            <View>
                <Text style={{ fontSize: 15, marginTop: 8 }}>
                    请输入正文:
                </Text>
            </View>
            <TextInput
                id='content'
                value={content}
                style={{ marginTop: 5, borderWidth: 0.5, fontSize: 15 }}
                onChangeText={(value) => setContent(value)}
            />
        </View>
    )
}

export default Detail
