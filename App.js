import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Restaurante Beira Mar</Text>
        <Text style={styles.paragraph}>Pratos Principais:</Text>
        <Text style={styles.principal}>Bife à parmegiana R$47.99</Text>
        <View>
          <Image
            source={require('./assets/parmegiana.png')}
            style={styles.img}
          />
          <Text style={styles.estilo}>
            Nosso bife à parmegiana é um prato clássico composto por um filé de
            carne, empanado e frito, coberto com molho de tomate, queijo A
            combinação do crocante do empanado com o molho cremoso e o queijo
            derretido faz desse prato uma verdadeira delícia!
          </Text>
        </View>

        <Text style={styles.principal}>Camarão R$117.00</Text>
        <View>
          <Image source={require('./assets/camarao.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Nossa porção de camarão é feita com camarões frescos e suculentos,
            preparados com todo o carinho para garantir um sabor irresistível.
            Servimos os camarões frescos direto do mar, acompanhados de um molho
            especial que realça ainda mais o sabor do fruto do mar!
          </Text>
        </View>

        <Text style={styles.principal}>Moqueca R$150.00</Text>
        <View>
          <Image source={require('./assets/moqueca.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Nossa moqueca de peixe é preparada com os melhores filés de peixe
            cozidos lentamente em um molho saboroso à base de azeite de dendê,
            leite de coco e uma combinação especial de temperos. O prato é
            enriquecido com cebolas, pimentões e tomates, que trazem frescor e
            intensidade ao sabor!
          </Text>
        </View>

        <Text style={styles.principal}>Fritas R$79.99</Text>
        <View>
          <Image source={require('./assets/fritas.png')} style={styles.img} />
          <Text style={styles.estilo}>
            Nossa porção de fritas é feita com batatas selecionadas, crocantes
            por fora e macias por dentro. Servida quentinha e com aquele toque
            de sal na medida certa, acompanhada de um molho de sua
            escolha,perfeita para qualquer prato ou até mesmo para saborear
            sozinho.
          </Text>
        </View>

        <Text style={styles.principal}>Cebola Empanada R$30.00</Text>
        <View>
          <Image source={require('./assets/cebola.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Nossa cebola empanada é feita com anéis de cebola fresquinhos,
            mergulhados em uma camada crocante e dourada de empanado, deixando
            elas crocantes por fora e suaves por dentro, com aquele sabor
            delicado que só a cebola pode oferecere é acompanhada por um molho
            especial de sua escolha.
          </Text>
        </View>
        <Text style={styles.paragraph}>Sobremesas:</Text>
        <Text style={styles.principal}>Sorvete Artesanal</Text>
        <View>
          <Image source={require('./assets/sorvete.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Preparado com frutas frescas ou sabores clássicos, nosso sorvete é o
            equilíbrio perfeito entre cremosidade e frescor para refrescar o
            paladar.
          </Text>
        </View>

        <Text style={styles.principal}>Salada de Frutas</Text>
        <View>
          <Image source={require('./assets/frutas.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Nossa salada de frutas é uma combinação refrescante de frutas da
            estação, cortadas em pedaços e servidas geladinhas, trazendo um
            sabor natural e leve para finalizar sua refeição.
          </Text>
        </View>
        <Text style={styles.paragraph}>Bebidas:</Text>
        <Text style={styles.principal}>Drinks tropicaisl</Text>
        <View>
          <Image source={require('./assets/bebida.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Coquetéis elaborados com frutas e sabores exóticos, como mojito,
            caipirinha de frutas e piña colada.
          </Text>
        </View>
        <Text style={styles.principal}>Cerveja</Text>
        <View>
          <Image source={require('./assets/cerveja.jpg')} style={styles.img} />
          <Text style={styles.estilo}>
            Desde as tradicionais até opções artesanais, para quem quer uma
            bebida mais descontraída.
          </Text>
        </View>
        <Text style={styles.principal}>Caipirinhas</Text>
        <View>
          <Image
            source={require('./assets/caipirinha.jpg')}
            style={styles.img}
          />
          <Text style={styles.estilo}>
            Preparadas com cachaça, frutas frescas e um toque de açúcar, ideais
            para um brinde à beira-mar.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDEAD',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F5F5F5',
    backgroundColor: '#DEB887',
    borderRadius: 8,
  },
  img: {
    width: '395',
    height: '280',
  },
  principal: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Arial',
    color: '#F5F5F5',
    backgroundColor: '#8B4513',
    borderRadius: 8,
  },
  estilo: {
    fontFamily: 'Arial',
    fontSize: 17,
    color: '#F5F5F5',
    backgroundColor: '#808000',
    borderRadius: 8,
    textAlign: 'center',
    padding: 2,
    marginTop: 7,
  },
  titulo: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 32,
  },
});
