import * as React from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

import BluetoothList from '../components/BluetoothList';
import Subtitle from '../components/Subtitle';
import Toggle from '../components/Toggle';

const Bluetooth = () => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const DATA = [
        {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        },
        {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        },
        {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        },
    ];    

    const renderItem = ({ item }) => (
        <BluetoothList title={item.title} />
    );

    return(
      <View style = {styles.container}>

        <Text style = {styles.bluetooth}>Bluetooth Manager</Text>              
        
        <Toggle
            isEnabled = {isEnabled}
            toggleSwitch = {toggleSwitch}
        />

        <Subtitle/>

        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>  

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    bluetooth: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 25,
    },
    state: {
        paddingLeft: 50, 
        marginBottom: -17.5
    },
    switchContainer: {
        paddingBottom: 20,
        paddingRight: 50,
    }
});

export default Bluetooth;