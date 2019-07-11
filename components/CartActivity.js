import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import firebase from '../Firebase'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center'
  },
  btnFav: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    justifyContent: `center`
  },
  infoCont: {
    width: `100%`,
    height: 145,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e1d6d6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventName: {
    fontSize: 16,
    color: '#d13972'
  },
  mainPrice: {
    fontSize: 40,
    color: '#d13972',
    paddingTop: 20
  },
  pricesCont: {
    width: `100%`,
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#e1d6d6'
  },
  pinkTxt: {
    paddingTop: 25,
    fontSize: 16,
    color: '#d13972',
    position: 'absolute',
    right: 0
  },
  grayTxt: {
    paddingTop: 25,
    fontSize: 16,
    color: '#838383'
  },
  totalCont: {
    width: `100%`,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#e1d6d6'
  }
})

class CartActivity extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      presentation: [],
      search: ''
    }
  }

  static navigationOptions = {
    title: 'Pagamento',
    headerTintColor: '#d13972',
    headerTitleStyle: {
      color: '#838383',
      fontWeight: 'bold',
      fontSize: 20
    }
  }

  getEventCollection = async id =>
    await firebase
      .firestore()
      .collection('events')
      .doc(id)
      .get()

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
      alert('Impossivel acessar o carrinho')
      navigation.navigate('MainActivity')
    }
  }

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
            <View style={styles.infoCont}>
              <Text style={styles.eventName}>{presentation.name}</Text>
              <Text style={styles.mainPrice}>R$ 33.00</Text>
            </View>
            <View style={styles.pricesCont}>
              <View>
                <Text style={styles.grayTxt}>Valor do(s) ingresso(s)</Text>
                <Text style={styles.pinkTxt}>R$ 30.00</Text>
              </View>
              <View>
                <Text style={styles.grayTxt}>Taxas</Text>
                <Text style={styles.pinkTxt}>R$ 3.00</Text>
              </View>
            </View>
            <View style={styles.totalCont}>
              <Text style={styles.grayTxt}>Total(s)</Text>
              <Text style={styles.pinkTxt}>R$ 33.00</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 0.1, backgroundColor: '#d13972', justifyContent: 'center' }}>
          <Text style={styles.btnFav}>Realizar Pagamento</Text>
        </View>
      </View>
    )
  }
}

export default CartActivity
