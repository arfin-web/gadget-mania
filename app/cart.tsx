import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeItem } from '../redux/features/cartSlice';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledButton = styled(Pressable)

const Cart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart);
    const items = cart.items;

    return (
        <StyledView className="container mx-auto mb-12">
            <StyledText className='text-xl font-bold text-center my-3'>My Cart</StyledText>
            <FlatList
                data={items}
                renderItem={({ item }: any) => {
                    return (
                        <StyledView className='rounded-2xl bg-white flex-row justify-between items-center p-4 m-4'>
                            <StyledView className='flex-row justify-center items-center'>
                                <StyledImage
                                    className='w-20 h-20 rounded-2xl mb-2'
                                    source={{
                                        uri: `${item.image}`,
                                    }}
                                />
                                <StyledView className='ml-1'>
                                    <StyledText className='text-base font-semibold'>{item.name}</StyledText>
                                    <StyledText className='text-sm mb-2'>{item.category}</StyledText>
                                </StyledView>
                            </StyledView>
                            <StyledView>
                                <StyledText className='text-lg font-bold'>$ {item.price}</StyledText>
                                <StyledButton className='bg-indigo-900 px-1 py-2 rounded-2xl mt-1' onPress={() => dispatch(removeItem(item))}>
                                    <StyledText className='text-center text-white font-semibold'>Remove</StyledText>
                                </StyledButton>
                            </StyledView>
                        </StyledView>
                    )
                }}
            />
            <StatusBar style="auto" />
        </StyledView>
    );
}

export default withExpoSnack(Cart);