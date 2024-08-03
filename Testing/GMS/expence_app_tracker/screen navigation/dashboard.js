import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Chart from '../components/Mainchart';
import {Menu} from 'react-native-paper';
export default class dashboard extends Component {
    
    render(props) {
        const { navigation } = this.props;
        
//     const [visible, setVisible] = React.useState(false);
        return (
            <View >
                <Chart />
          </View>
            
            
        );
    }
}
const styles = {
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
}
