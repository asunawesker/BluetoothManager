import React, { useState, useEffect} from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

import Bluetooth from './src/screens/Bluetooth';

const App = () => {

	const [list, setList] = useState([]);
	const [boolEnable, setBoolEnable] = useState(false); 

  	useEffect(() => {
		initBluetooth();  
		
		return () => {
			async function remove(){
				await BluetoothSerial.stopScanning();
				console.log('Scanner terminado');
			}

			remove();
		}
	}, []); 
	
	const initBluetooth = async () => {
		await BluetoothSerial.requestEnable();
		const list = await BluetoothSerial.list();

		setBoolEnable(true);
		setList(list);

		console.log(list);
	}

	const disableBluetooth = async () => {
		await BluetoothSerial.disable();
		await BluetoothSerial.stopScanning();
		setBoolEnable(false);
		setList([]);
	}

  	return(
    	<Bluetooth
			list = {list}
			boolEnable = {boolEnable}
			enableBluetooth = {initBluetooth}
			disableBluetooth = {disableBluetooth}
		/>
  	);
}

export default App;
