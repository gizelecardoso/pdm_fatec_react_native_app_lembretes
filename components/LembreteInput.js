import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'; 

const LembreteInput = (props) => {
    const[lembrete, setLembrete] = useState('');
     //captura o texto digitado
    const capturarLembrete = (lembrete) => {setLembrete(lembrete);}
    return(
        <View style={styles.lembreteView}>
            <TextInput 
                placeholder="Lembrar..."
                style={styles.lembreteTextInput}
                onChangeText={capturarLembrete}
                value={lembrete}        
            />
            <Button
            title="+"
            onPress={() => props.onAdicionarLembrete(lembrete)}
            />
        </View>   
    );
}

const styles = StyleSheet.create({
    lembreteView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 8
    },
    lembreteTextInput:{
        width:'80%',
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding: 2
    }
});

export default LembreteInput;