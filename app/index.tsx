import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button, Alert } from 'react-native';
import Items from '../data/Items'

const Item = ({ name, price, image }) => (
    <View style={styles.item}>
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: `${image}`,
                }}
            />
        </View>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>{price}</Text>
        </View>
        <View>
            <Button title="Add to Cart" onPress={() => Alert.alert("Product Added")} />
        </View>
    </View>
);

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Gadget Mania</Text>
            <FlatList
                data={Items}
                renderItem={({ item }: any) => <Item name={item.name} price={item.price} image={item.image} />}
                keyExtractor={item => item.id}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 30,
        textAlign: "center",
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    name: {
        fontSize: 18,
    },
    price: {
        fontSize: 15,
    }
});