import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.TextWeight}>Search</Text>
          <FontAwesome name="camera" size={18} color="#777" />
        </View>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={18} color="#777" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Artists, songs, or podcasts"
          />
        </View>

        <View>
          <Text style={{ color: 'white', marginVertical: 15, fontWeight: '700' }}>Your top genres</Text>
        </View>

        <View style={styles.boxContainer}>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#9854B2' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>Pop</Text>
              <Image
                source={{ uri: 'https://i.discogs.com/eDGPABXwix5q2J3053zVQxYhier3-s04gL1JDa89Dag/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NzE4/MDAtMTQ0Nzk0MTE2/OS01OTQ4LmpwZWc.jpeg' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#678026' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>Pop</Text>
              <Image
                source={{ uri: 'http://www.tarkan.com/wp-content/uploads/2017/05/10.jpg' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
        </View>
      <View>
         <Text style={{ color: 'white', marginVertical: 15, fontWeight: '700' }}>Browse all</Text>
      </View>
      <View style={styles.boxContainer}>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#3371E4' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>new</Text>
              <Image
                source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/2efa852db565065916c197c0faabc8e0/264x264.jpg' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#CF4321' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>Pop</Text>
              <Image
                source={{ uri: 'https://cdns-images.dzcdn.net/images/cover/5ee43539e0060e71ff68033f04b7af6e/264x264.jpg' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
        </View>
        <View>
         <Text style={{ color: 'white', marginVertical: 15, fontWeight: '700' }}>Popular podcast categories</Text>
      </View>
      <View style={styles.boxContainer}>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#ABBB6D' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>Pop</Text>
              <Image
                source={{ uri: 'https://i1.feedspot.com/200/5263286.jpg?t=1617196467' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.box, { backgroundColor: '#223160' }]}>
            <View style={styles.genreBoxContent}>
              <Text style={styles.boxstyle}>Pop</Text>
              <Image
                source={{ uri: 'https://www.statesman.com/gcdn/authoring/2019/04/26/NAAS/ghows-TX-875c9fa1-dc3f-5532-e053-0100007f1a90-18ad7276.jpeg' }}
                style={[styles.genreImage, { transform: [{ rotate: '45deg' }] }]}
                />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxImage}>
  <View style={styles.imageContainer}>
    <Image
      source={{ uri: 'http://www.tarkan.com/wp-content/uploads/2017/05/10.jpg' }}
      style={styles.littleImage}
    />
    <Text style={{ color: 'white', textAlign: 'left', alignItems: 'flex-start', marginLeft: 15 }}>Kedi Gibi</Text>
    <Text style={{ color: 'white', textAlign: 'left', alignItems: 'flex-start', marginLeft: 5, fontSize: 5 }}>●</Text>
    <Text style={{ color: '#B3B3B3', textAlign: 'left', alignItems: 'flex-start', marginLeft: 5 }}>Tarkan</Text>
  </View>
  <View style={styles.bluetoothContainer}>
    <FontAwesome name="bluetooth-b" size={15} color="green" />
    <Text style={styles.Soundpeats}>SoundPeats</Text>
  </View>

  <View style={styles.pausecontainer}>
    <View style={styles.bluetoothcont}>
  <FontAwesome name="bluetooth-b" size={15} color="green" />
  </View>
    <FontAwesome name="pause" size={20} color="white" />
  </View>
</View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
    marginTop: 15,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 5,
  },
  searchInput: {
    flex: 1,
    height: 30,
    paddingHorizontal: 5,
  },
  TextWeight: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 25,
  },
  textContainer: {
    justifyContent: 'space-between',
    marginLeft: 5,
    flexDirection: 'row',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: 10,
    position:"relative",
    padding:10,
  },
  box: {
    flex: 1,
    borderRadius: 5,
    marginStart: 15,
  },
  boxstyle: {
    paddingLeft: 10,
    color: 'white',
    fontWeight: '800', // Change to '800' (as a string) or a numeric value like 800
    fontSize: 15,
  },
  genreBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginLeft: 50,
    marginTop:25,
    rotation:10,
  },
  littleImage:{
    width:40,
    height:40,
    resizeMode:'cover',
    borderRadius:10,
  },
  boxImage:{
      backgroundColor:"#0F1929",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align items in a row
    paddingHorizontal: 10,
    paddingTop:10,
  },
  bluetoothContainer: {
    marginLeft: 65,
    flexDirection:"row",
  },
  Soundpeats: {
    color: 'green',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginLeft: 10,
  },
  pausecontainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    top: '50%',
    right: 5,
    transform: [{ translateY: -10 }], // Adjust this value for precise alignment
  },
  bluetoothcont:{
    marginLeft:40,
  },
});
