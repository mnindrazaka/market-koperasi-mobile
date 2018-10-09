import React, { Component, Fragment } from 'react'
import { FlatList, View } from 'react-native'
import { ProductCard, TextInput } from '../../components'

class Products extends Component {
  state = {
    data: [
      {
        title: 'Baju Akatsuki',
        description: 'Deskripsi produk ditampilkan disini'
      },
      {
        title: 'Peralatan Tulis',
        description: 'Deskripsi produk ditampilkan disini'
      },
      {
        title: 'Buku Gambar',
        description: 'Deskripsi produk ditampilkan disini'
      },
      {
        title: 'Krayon Mewarnai',
        description: 'Deskripsi produk ditampilkan disini'
      },
      {
        title: 'Makanan Ringan',
        description: 'Deskripsi produk ditampilkan disini'
      },
      {
        title: 'Majalah Anak',
        description: 'Deskripsi produk ditampilkan disini'
      }
    ]
  }

  renderItem({ item }) {
    return (
      <ProductCard
        title={item.title}
        description={item.description}
        onPress={() => this.props.navigation.navigate('ProductDetail')}
      />
    )
  }

  keyExtractor(index) {
    return index
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={data => this.renderItem(data)}
          keyExtractor={(item, index) => this.keyExtractor(index)}
          numColumns={2}
        />
      </View>
    )
  }
}

Products.navigationOptions = {
  headerTitle: <TextInput placeholder="Cari Produk" />
}

export default Products
