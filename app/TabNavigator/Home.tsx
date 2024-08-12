import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Theme context
import { useTheme } from '../../context/ThemeContext';
// Components
import TypeCard from '../../components/home/TypeCard';

const Home = ({ navigation }) => {
  // Theme
  const { theme } = useTheme();
  // Handle search
  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => setSearch(text);
  const resetSearch = () => setSearch('');
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <View style={styles.header}>
        <View style={[styles.searchContainer, { backgroundColor: theme.gray }]}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/icons/camera.png')} resizeMode='cover' />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
            value={search}
            onChangeText={handleSearchChange}
          />
          {search !== ''
            ? (
              <TouchableOpacity onPress={resetSearch}>
                <Image style={styles.xIcon} source={require('../../assets/icons/x.png')} />
              </TouchableOpacity>
            )
            : null}
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/icons/cart.png')} resizeMode='cover' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/icons/chat.png')} resizeMode='cover' />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true}>
          <TypeCard
            icon={require('../../assets/icons/coat.png')}
            typeName='Coat'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/jeans.png')}
            typeName='Pant'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/device.png')}
            typeName='Device'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/rice-bowl.png')}
            typeName='Food'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/cake.png')}
            typeName='Cake'
            onPress={null}
          />
        </ScrollView>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true}>
        <TypeCard
            icon={require('../../assets/icons/sneakers.png')}
            typeName='Sneaker'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/vegetable.png')}
            typeName='Vegetable'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/beef.png')}
            typeName='Meat'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/soft-drink.png')}
            typeName='Drink'
            onPress={null}
          />
          <TypeCard
            icon={require('../../assets/icons/candy.png')}
            typeName='Candy'
            onPress={null}
          />
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  safeView: {
    // backgroundColor: 'white',
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    // alignItems: 'center',
  },


  // Header
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#F1B720',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  searchContainer: {
    height: 40,
    width: '75%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    paddingLeft: 5
  },
  icon: {
    height: 25,
    width: 25,
  },
  xIcon: {
    height: 20,
    width: 20,
  },

  searchInput: {
    height: '100%',
    width: '80%',
    // borderWidth: 1
  },
  searchInput1: {
    height: '100%',
    width: '75%',
  },


  // Header right
  headerRight: {
    height: 40,
    width: '20%',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },


  // Category
  categoryContainer: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  }
})