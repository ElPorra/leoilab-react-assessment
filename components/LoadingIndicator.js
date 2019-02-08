import React from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View,

} from 'react-native';

export default class LoadingIndicator extends React.Component {

    _keyExtractor = (item, index) => String(item.id);

    render() {
        return (

            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50
    }
})