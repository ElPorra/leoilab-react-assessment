import React from 'react';
import validators from '../helpers/Validators';
import validate from 'validate.js';
import {
    StyleSheet,
    Image,
    FlatList,
    View,
    Text

} from 'react-native';

export default class UserInfo extends React.Component {
    render() {
        return (
            <View style={styles.columnContainer}>
                <View style={styles.container}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: this.props.user.avatar_url }}
                    />
                    <Text style={styles.name}>
                        {this.props.user.name}
                    </Text>
                </View>
                <Text style={styles.name}>
                   UserId:  {this.props.user.id}
                </Text>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 22
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})