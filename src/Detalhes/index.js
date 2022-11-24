import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>
            Voltar
          </Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.data.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.data.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: "#121212",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnVoltar: {
    backgroundColor: "#e52246",
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 28,
    padding: 10,
    fontWeight: "bold",
  },
  sinopse: {
    color: "#FFF",
    marginLeft: 10,
    marginBottom: 8,
    fontSize: 18,
  },
  descricao: {
    color: "#FFF",
    marginLeft: 10,
    marginRight: 10,
  },
});
