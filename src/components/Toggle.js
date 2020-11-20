import * as React from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';

const Toggle = ({isEnabled, toggleSwitch}) => {
    return (
        <View>
            <View style={styles.state}>
                {isEnabled ? <Text>Activado</Text> : <Text>Desactivado</Text>}
            </View>

            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    state: {
        paddingLeft: 50, 
        marginBottom: -17.5
    },
    switchContainer: {
        paddingBottom: 20,
        paddingRight: 50,
    }
});

export default Toggle;