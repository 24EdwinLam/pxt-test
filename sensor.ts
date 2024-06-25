namespace AdvancedModule {
    let ph_value_number = 0
    //% blockId="readPHNumber"
    //% block="Read PH value pin %ports| offset %offset"
    //% weight=70 group="Water"
    export function readPhNumber(ports: AnalogPin, offset: number): number {

        let temp = 0;
        temp = ports
        let sensorarray: number[] = []
        let avgValue: number = 0;
        for (let i = 0; i < 10; i++) {
            sensorarray.push(pins.analogReadPin(temp))
            basic.pause(10)
        }
        sensorarray.sort((n1, n2) => n1 - n2);
        for (let i = 2; i < 8; i++) {
            avgValue += sensorarray[i];
        }

        ph_value_number = (avgValue/ 6 * 5 / 1023)* 3.5 + offset
        return ph_value_number * 1.00
    }
}