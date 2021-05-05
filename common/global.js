import {Dimensions} from 'react-native';

global.w = Dimensions.get('window').width;
global.ptd = (px)=>{
    return px/375*w
}
