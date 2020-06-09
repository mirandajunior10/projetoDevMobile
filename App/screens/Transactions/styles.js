import { StyleSheet, StatusBar, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const primaryGreen = '#00C79C'
const primaryRed = '#FF6D6B'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: StatusBar.currentHeight + 15,
    },
    menu: {
        color: primaryGreen,
        fontSize: 40,
        marginLeft: '5%'
    },
    titleHeader: {
        flex: 1,
        marginRight: "15%",
    },
    title: {
        fontSize: 25,
        alignSelf: "center",
        fontWeight: 'bold',
        color: '#47525E',
    },
    content: {
        width: '90%',
        marginTop: '10%',
        alignSelf: "center",
    },
    saldoContainer: {
        width: 350,
        alignItems: 'center',
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    containerNegativo: {
        borderColor: primaryRed,
    },
    containerPositivo: {
        borderColor: primaryGreen,
    },
    saldo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8492A6'
    },
    saldoPositivo: {
        color: primaryGreen,
    },
    saldoNegativo: {
        color: primaryRed,
    },
    transacoesContainer: {
        width: '100%',
        marginTop: '5%',
        height: '90%',
    },
    itensContainer: {
        padding: 10,
        borderWidth: 0,
        marginBottom: 10,
        margin: 5,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 5,
    },
    itemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#CCC',
        marginTop: 5,
        marginBottom: 5,
    },
    itemBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    textStyle: {
        fontSize: 18,
    },
    swipeButton: {
        backgroundColor: '#fff',
        padding: 0,
        borderRadius: 5,
    },
    receita: {
        color: primaryGreen,
        borderBottomColor: primaryGreen,
    },
    despesa: {
        color: primaryRed,
        borderBottomColor: primaryRed,
    },
    data: {
        fontSize: 14,
        color: '#8492A6',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    dialogInput: {
        paddingLeft: 10,
        padding: 5,
        fontSize: 18,
        color: '#333',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#DCDCDC",
    },
    
});

export default styles;
