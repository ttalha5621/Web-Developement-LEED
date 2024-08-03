import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

export default class Calender extends Component {
    render(props) {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Calender</Text>
                <Button
                    title="Sidebar"
                    onPress={() => navigation.openDrawer()}
                ></Button>
            </View>
        );
    }
}
const styles = {
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
}
