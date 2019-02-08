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

export default class UsersList extends React.Component {

    _keyExtractor = (item, index) => String(item.id);

    render() {
        return (
            <FlatList
                data={this.props.users}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) =>
                <View style={styles.container}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: item.avatar }}
                    />
                    <Text style={styles.item}>
                        {item.first_name}
                    </Text>
                </View>}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})