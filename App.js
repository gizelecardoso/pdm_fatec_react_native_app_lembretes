import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {
  const[lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  //para adicionar o que foi digitado
  const adicionarLembrete = (lembrete) => {
    setLembretes((lembretes) => {
    setContadorLembretes(contadorLembretes + 1);
    return [...lembretes, {key: contadorLembretes.toString(), value:lembrete}];
  });
}

const removerLembrete = (keyASerRemovida) => {
  setLembretes (lembretes => {
    return lembretes.filter((lembrete) => {
      return lembrete.key !== keyASerRemovida
    })
  });
}

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => 
            <LembreteItem 
              chave={lembrete.item.key} 
              lembrete={lembrete.item.value}
              onDelete = {removerLembrete}/>
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView:{
    padding:50
  },
  lembreteView:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  lembreteInputText:{
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});
