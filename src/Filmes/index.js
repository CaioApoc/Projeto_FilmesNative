import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

import Detalhes from "../Detalhes";

export default function Filmes(props) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{props.data.nome}</Text>

        <Image source={{ uri: props.data.foto }} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.botaoTexto}>+ INFO</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={props} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 4,
  },
  botao: {
    width: 75,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: -1,
  },
  botaoTexto: {
    color: "#FFF",
    textAlign: "center",
  },
});
