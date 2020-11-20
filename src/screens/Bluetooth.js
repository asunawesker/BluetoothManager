import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Switch, StyleSheet, ScrollView } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

import BluetoothList from '../components/BluetoothList';
import Subtitle from '../components/Subtitle';
import Toggle from '../components/Toggle';

const Bluetooth = ({ list, boolEnable, enableBluetooth, disableBluetooth}) => {

    const toggleSwitch = (value) => {
        if (value) {
            return enableBluetooth();
        }
        disableBluetooth();
    };          

    const renderItem = ({ item }) => (
        <BluetoothList 
            title={item.name} 
            onPress = {async () => {
                try {
                    console.log(item.id);
                    await BluetoothSerial.connect(item.id);
                } catch {
                    alert('No se pudo conectar con el dispositivo bluetooth');
                }
                
            }}    
        />
    );

    return(
        <>
            <View style = {styles.container}>

                <Text style = {styles.bluetooth}>Bluetooth Manager</Text>              

                <Toggle
                    isEnabled = {boolEnable}
                    toggleSwitch = {toggleSwitch}
                />

                <Subtitle/>     
                    
            </View>

            {boolEnable ? 
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            /> 
            : 
            <Text style = {styles.disable}>Bluetooth no conectado</Text>
            }
        </>
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
    }, 
    disable: {
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 20
    },
});

export default Bluetooth;