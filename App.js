import { View, ScrollView, StyleSheet } from 'react-native';
import AppBar from './components/appbar';
import Section from './components/section';
import Card from './components/card';

const menuItems = [
  {
    category: 'Pratos Principais',
    items: [
      {
        name: 'Bife à parmegiana',
        price: 'R$47.99',
        image: require('./assets/parmegiana.png'),
        description:
          'Nosso bife à parmegiana é um prato clássico composto por um filé de carne, empanado e frito, coberto com molho de tomate e queijo. A combinação do crocante do empanado com o molho cremoso e o queijo derretido faz desse prato uma verdadeira delícia!',
      },
      {
        name: 'Camarão',
        price: 'R$117.00',
        image: require('./assets/camarao.jpg'),
        description:
          'Nossa porção de camarão é feita com camarões frescos e suculentos, preparados com todo o carinho para garantir um sabor irresistível.',
      },
      {
        name: 'Moqueca',
        price: 'R$150.00',
        image: require('./assets/moqueca.jpg'),
        description:
          'Nossa moqueca de peixe é preparada com os melhores filés de peixe cozidos lentamente em um molho saboroso à base de azeite de dendê, leite de coco e temperos especiais.',
      },
      {
        name: 'Fritas',
        price: 'R$79.99',
        image: require('./assets/fritas.png'),
        description:
          'Nossa porção de fritas é feita com batatas selecionadas, crocantes por fora e macias por dentro. Servida quentinha e com um toque de sal na medida certa.',
      },
      {
        name: 'Cebola Empanada',
        price: 'R$30.00',
        image: require('./assets/cebola.jpg'),
        description:
          'Nossa cebola empanada é feita com anéis de cebola fresquinhos, mergulhados em uma camada crocante e dourada de empanado.',
      },
    ],
  },
  {
    category: 'Sobremesas',
    items: [
      {
        name: 'Sorvete Artesanal',
        price: 'R$15.00',
        image: require('./assets/sorvete.jpg'),
        description:
          'Preparado com frutas frescas ou sabores clássicos, nosso sorvete é o equilíbrio perfeito entre cremosidade e frescor.',
      },
      {
        name: 'Salada de Frutas',
        price: 'R$12.00',
        image: require('./assets/frutas.jpg'),
        description:
          'Nossa salada de frutas é uma combinação refrescante de frutas da estação, cortadas em pedaços e servidas geladinhas.',
      },
    ],
  },
  {
    category: 'Bebidas',
    items: [
      {
        name: 'Drinks Tropicais',
        price: 'R$25.00',
        image: require('./assets/bebida.jpg'),
        description:
          'Coquetéis elaborados com frutas e sabores exóticos, como mojito, caipirinha de frutas e piña colada.',
      },
      {
        name: 'Cerveja',
        price: 'R$8.00',
        image: require('./assets/cerveja.jpg'),
        description:
          'Desde as tradicionais até opções artesanais, para quem quer uma bebida mais descontraída.',
      },
      {
        name: 'Caipirinhas',
        price: 'R$15.00',
        image: require('./assets/caipirinha.jpg'),
        description:
          'Preparadas com cachaça, frutas frescas e um toque de açúcar, ideais para um brinde à beira-mar.',
      },
    ],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar title="Restaurante Beira Mar" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItems.map((section, index) => (
          <View style={styles.bottom} key={index}>
            <Section title={section.category} />
            <View style={styles.itemsContainer}>
              {section.items.map((item, idx) => (
                <Card
                  key={idx}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDEAD',
    paddingHorizontal: 8,
  },
  itemsContainer: {
    marginTop: -30,
  },
  bottom: {
    marginBottom: 40
  }
});