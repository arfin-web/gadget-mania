import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import Items from '../data/Items'
import { useAppDispatch } from '../redux/hooks';
import { addItem } from '../redux/features/cartSlice';

export default function Index() {
    const dispatch = useAppDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Gadget Mania</Text>
            <FlatList
                data={Items}
                renderItem={({ item }: any) => {
                    return (
                        <View style={styles.item}>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: `${item.image}`,
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.name}>{item.price}</Text>
                            </View>
                            <View>
                                <Button title="Add to Cart" onPress={() => dispatch(addItem(item))} />
                            </View>
                        </View>
                    )
                }}
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