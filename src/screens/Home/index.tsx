import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = ["João Pedro", "Sofia", "Viny", "Matheus", "Kaule", "Bruno", "Luisa", "Julia", "Renan", "Amanda", "Renato"];

  function handleParticipantAdd() {
    if (participants.includes("João Pedro")){
      return Alert.alert("Participante Existe", "Já existe um participante com esse nome")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quarta, 16 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
     showsHorizontalScrollIndicator={false}
     ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>
        Evento vazio. Add participantes
      </Text>
     )}
    />
    
      {/* {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={() => handleParticipantRemove("João Pedro")}
        />
      ))} */}
   
    </View>
  );
}
