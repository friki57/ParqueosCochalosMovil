
import { Dimensions } from 'react-native';

const config = {
    SCREEN_WIDTH:Dimensions.get('window').width,
    SCREEN_HEIGHT:Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height-45,
};
const strings = {
    PASS: "Contraseña",
    USER: "Correo electronico",
    TITLE_BUTTON: "Ingresar",
}
export default {
CONFIG: config,
STRING: strings,
}
