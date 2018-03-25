import * as React from "react";
import {Text, View,StyleSheet} from 'react-native'

export default Header = ({cols}) =>
    <View style={styles.headerContainer}>
        {cols.map(col=>
            <View key={col.label} style={{flex:col.flexWidth, alignItems:'center'}}>
                <Text style={styles.textStyle}>{col.label}</Text>
            </View>
        )}
    </View>


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#352F3C',
        height:'5%'
    },

    textStyle:{
        color:'#FFF',
        fontWeight:'400'
    }
})