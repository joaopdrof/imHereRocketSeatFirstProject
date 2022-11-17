import { Text, TextInput, View, TouchableOpacity } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export  function Home(){
  const participants = [
    "Sofia",
    "Viny",
    "Matheus",
    "Kaule"
  ]

    function handleParticipantAdd(){
        console.log('Clicado')
    }

    function handleParticipantRemove(name: string){
      console.log(`Remove o participant${name}`)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento 
      </Text>

      <Text style={styles.eventDate} >
        Quarta, 16 de Novembro de 2022.
      </Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleParticipantAdd}
            >

                <Text style={styles.buttonText}>
                    +
                </Text>

            </TouchableOpacity>
        </View>

        {
          participants.map(participant => (
            <Participant 
              name="João Pedro"
              onRemove={() => handleParticipantRemove('João Pedro')}
            />
          ))
        }

    </View>
  )
}; 
