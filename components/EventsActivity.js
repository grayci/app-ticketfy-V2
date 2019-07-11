import React, { Component } from 'react'
import {
  AsyncStorage,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import firebase from '../Firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowIcon: {
    position: 'absolute',
    top: 30,
    left: 15
  },
  eventTop: {
    width: '100%',
    padding: 20,
    paddingBottom: 10
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#838383'
  },
  iconHeart: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  eventInfo: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  txtInfo: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#838383'
  },
  contTitle: {
    width: '100%',
    padding: 20
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#838383',
    textAlign: 'center'
  },
  boxEvent: {
    width: '100%',
    height: 178,
    backgroundColor: '#f7f7f7'
  },
  boxDesc: {
    width: '100%',
    height: 178,
    backgroundColor: '#f7f7f7',
    marginBottom: 30,
    padding: 20
  },
  insideBoxEvent: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  boxTicketType: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#838383'
  },
  boxPrice: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#d13972'
  },
  btnBuy: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  }
})

class FirstEvent extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      presentation: [],
      search: ''
    }
  }

  static navigationOptions = {
    header: null // !!! Hide Header
  }

  getEventCollection = async id =>
    await firebase
      .firestore()
      .collection('events')
      .doc(id)
      .get()

  addFavorite = async presentation => {
    this.setState({ isLoading: true })
    try {
      await firebase
        .firestore()
        .collection('favorites')
        .doc(this.state.presentation.id)
        .set(presentation)
      this.setState({ isLoading: false })
      this.props.navigation.navigate('FavoritesActivity')
    } catch (error) {
      console.log(error)
      alert('erro ao adicionar aos favoritos')
    }
  }

  componentDidMount = async () => {
    const { navigation } = this.props
    const presentationId = navigation.getParam('presentationId')

    try {
      const presentationCollection = await this.getEventCollection(presentationId)
      const presentation = {
        id: presentationId,
        ...presentationCollection.data()
      }
      this.setState({ isLoading: false, presentation: presentation })
    } catch (error) {
      console.log(error)
      alert('Apresentacao nao encontrada')
      navigation.navigate('MainActivity')
    }
  }
  //S4UW09WA5WA-EB2GAMZ812AZFMOH355
  render() {
    const { isLoading, presentation } = this.state
    if (isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#838383" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <ScrollView style={styles.container}>
            <View>
              <Image
                source={{ uri: presentation.image }}
                style={{ width: '100%', height: 175, position: 'relative' }}
                shouldRasterizeIOS={true}
                renderToHardwareTextureAndroid={true}
              />
              <Icon
                name="arrow-left"
                size={25}
                color="#ffffff"
                style={styles.arrowIcon}
                onPress={() => this.props.navigation.navigate('MainActivity')}
              />
            </View>
            <View style={styles.eventTop}>
              <Text style={styles.eventName}>{presentation.name}</Text>
              <Icon
                name="heart"
                onPress={() => this.addFavorite(presentation)}
                size={27}
                color="#d13972"
                style={styles.iconHeart}
              />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.txtInfo}>
                <Icon name="location-arrow" size={16} color="#d13972" />
                {'   ' + presentation.location}
              </Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.txtInfo}>
                <Icon name="calendar" size={16} color="#d13972" />
                {'   ' + presentation.date} | Horário: {presentation.hour}
              </Text>
            </View>
            <View style={styles.contTitle}>
              <Text style={styles.eventTitle}>Ingressos</Text>
            </View>
            <View style={styles.boxEvent}>
              {presentation.ticketTypes.map(ticketType => (
                <View key={ticketType.id} style={styles.insideBoxEvent}>
                  <Text style={styles.boxTicketType}>{ticketType.name}</Text>
                  <Text style={styles.boxPrice}>{ticketType.value}</Text>
                  <Icon name="minus" style={styles.boxPrice} />
                  <Icon name="plus" style={styles.boxPrice} />
                </View>
              ))}
            </View>
            <View style={styles.contTitle}>
              <Text style={styles.eventTitle}>Descrição</Text>
            </View>
            <View style={styles.boxDesc}>
              <Text style={styles.boxTicketType}>{presentation.description}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 0.1, backgroundColor: '#d13972', justifyContent: `center`, alignItems: 'center' }}>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('CartActivity', {
                presentationId: presentation.id
              })
            }
          >
            <Text style={styles.btnBuy}>Comprar ingressos</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

export default FirstEvent
