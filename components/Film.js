import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


class Film extends React.Component {

    render() {
        const title = "Je suis un film"
        
        return(
            <View style={{backgroundColor:'red'}}>  
            <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({


})

export default Film