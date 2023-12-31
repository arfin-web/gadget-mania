import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import Items from '../data/Items'
import { useAppDispatch } from '../redux/hooks';
import { addItem } from '../redux/features/cartSlice';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledButton = styled(Pressable)

const Index = () => {
    const dispatch = useAppDispatch();
    return (
        <StyledView className="container mx-auto">
            <FlatList
                data={Items}
                key={'#'}
                numColumns={2}
                renderItem={({ item }: any) => {
                    return (
                        <StyledView className='rounded-2xl bg-white p-6 ml-3 mt-3'>
                            <StyledView>
                                <StyledImage
                                    className='w-28 h-28 rounded-2xl mb-2'
                                    source={{
                                        uri: `${item.image}`,
                                    }}
                                />
                            </StyledView>
                            <StyledView className='mb-3'>
                                <StyledText className='text-base font-semibold'>{item.name}</StyledText>
                                <StyledText className='text-sm mb-2'>{item.category}</StyledText>
                                <StyledText className='text-xl font-bold'>$ {item.price}</StyledText>
                            </StyledView>
                            <StyledView>
                                <StyledButton className='bg-indigo-900 px-1 py-2 rounded-2xl' onPress={() => dispatch(addItem(item))}>
                                    <StyledText className='text-center text-white font-semibold'>Add To Cart</StyledText>
                                </StyledButton>
                            </StyledView>
                        </StyledView>
                    )
                }}
                keyExtractor={item => item.id}
            />
            <StatusBar style="auto" />
        </StyledView>
    );
}

export default withExpoSnack(Index)