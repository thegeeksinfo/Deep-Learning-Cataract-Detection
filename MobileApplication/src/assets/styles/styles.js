import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    container2: {
        alignItems: 'center'
    },
    header: {
        // flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#5AC8FA',
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    title: {
        fontSize: 28,
        margin: 10,
        fontWeight: "700"
    },
    login: {
        fontSize: 25,
        color: 'grey'
    },
    reset: {
        fontSize: 20,
        padding: 10
    },
    textinput: {
        height: 40,
        borderColor: 'skyblue',
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        marginTop: 15,
        padding: 10,
        color: 'black'
    },
    forgotpassword: {
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 35,
        padding: 10

    },
    button: {
        width: 300,
        marginTop: 10,
        backgroundColor: '#5AC8FA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    registerButton: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 45,
        padding: 5,
    },
    img: {
        width: 400,
        height: 300,
    },
    imgDiagnosis: {
        width: 200,
        height: 200
    },
    conclusion: {
        margin: 20,
        fontSize: 15
    },
    homeButton: {
        color: 'white'
    },

    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        marginBottom: 10
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    },
    buttons: {
        backgroundColor: '#007AFF',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginRight: 20,
        width: 80
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },

});