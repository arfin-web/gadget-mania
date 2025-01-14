import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Cart from '../components/Cart';

export default function Layout() {
    return (
        <Provider store={store}>
            <Tabs screenOptions={{
                headerRight: () => <Cart />
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: () => <FontAwesome name="home" size={30} color="#312e81" />
                    }}
                />
                <Tabs.Screen
                    name="categories"
                    options={{
                        title: "All Categories",
                        tabBarIcon: () => <FontAwesome name="list-alt" size={30} color="#312e81" />
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        href: null
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: () => <FontAwesome name="user" size={30} color="#312e81" />
                    }}
                />
            </Tabs>
        </Provider>
    )
}