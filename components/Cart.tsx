import { withExpoSnack } from 'nativewind';
import { Pressable, Text } from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { styled } from 'nativewind';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const StyledButton = styled(Pressable)
const StyledText = styled(Text)

const Cart = () => {
    const cart = useAppSelector(state => state.cart);
    const items = cart.items;
    const router = useRouter();
    return (
        <StyledButton className='mr-6 flex-row justify-center items-start' onPress={() => router.push('/cart')}>
            <FontAwesome name="shopping-cart" size={30} color="#312e81" />
            <StyledText className='text-sm ml-1'>{items.length}</StyledText>
        </StyledButton>
    )
}

export default withExpoSnack(Cart)