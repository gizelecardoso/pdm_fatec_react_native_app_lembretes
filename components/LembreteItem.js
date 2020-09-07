import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LembreteItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default LembreteItem;

const styles = StyleSheet.create({
    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
  });