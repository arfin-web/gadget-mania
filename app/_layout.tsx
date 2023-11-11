import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
    return <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
            }}
        />
        <Tabs.Screen
            name="cart"
            options={{
                title: "Cart",
                tabBarIcon: () => <FontAwesome name="shopping-cart" size={24} color="black" />
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />
            }}
        />
    </Tabs>;
}