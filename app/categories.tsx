import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { Text, View, FlatList, Image } from 'react-native';
import Items from '../data/Items'
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const Categories = () => {
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
                            <StyledView>
                                <StyledText className='text-base text-center font-semibold'>{item.category}</StyledText>
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

export default withExpoSnack(Categories)