function checkSetup() {
    const powerLed = document.getElementById('powerLed').value;
    const internetLed = document.getElementById('internetLed').value;
    const wifiLed = document.getElementById('wifiLed').value;
    let resultMessage = '';

    if (powerLed === 'no') {
        resultMessage = 'Please check your router’s power supply.';
    } else if (internetLed === 'no') {
        resultMessage = 'The Internet LED is off. Please follow the troubleshooting steps.';
    } else if (wifiLed === 'no') {
        resultMessage = 'The WiFi LEDs are off. Please check the WiFi On/Off button.';
    } else {
        resultMessage = 'All LEDs are ON. You can proceed with the Nighthawk App setup.';
    }

    document.getElementById('result').innerText = resultMessage;
}
