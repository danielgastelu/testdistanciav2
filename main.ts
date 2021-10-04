/**
 * *** ATENCIÓN ***
 * 
 * No pueden usarse los siguientes pines en el sensor de distancia, pues los usan los motores u otros elementos de la placa kitronik
 * 
 * P12
 * 
 * p8
 * 
 * P16
 * 
 * P0
 * 
 * P1
 * 
 * P2.
 */
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P5,
    DigitalPin.P11,
    PingUnit.Centimeters
    ))
})
