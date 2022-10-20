import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Card from './components/Card';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container} >
      <Header></Header>
      <ScrollView>
          <View>
            <Card title="Titulo" descr="Description">
                <Image style={{width:"100%", height:200}} source={{uri: "https://picsum.photos/300/600?random=1" }}/>
            </Card>
          </View>

          <View style={styles.cardFlex2}>
              <View>
                <Card title="Titulo" descr="Description">
                    <Image style={{width:"100%", height:200}} source={{uri: "https://picsum.photos/300/600?random=1" }}/>
                </Card>
              </View>
              <View>
                <Card title="Titulo" descr="Description">
                    <Image style={{width:"100%", height:200}} source={{uri: "https://picsum.photos/300/600?random=1" }}/>
                </Card>
              </View>
          </View>
          
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc'
  },
  cardFlex2:{
    flex:2,
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
});
