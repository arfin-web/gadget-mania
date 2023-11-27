import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { Text, View, FlatList, Image } from 'react-native';
import { styled } from 'nativewind';

const Items = [
    {
        id: '1',
        name: "John Doe",
        icon: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1701083032~exp=1701083632~hmac=3dd2b9367896f31f798c3054773e20db9a4e7c5e8b56cb815ccadf78c13a7473'
    },
    {
        id: '2',
        name: "My Orders",
        icon: 'https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?w=740&t=st=1701083458~exp=1701084058~hmac=b008ed7166368c7c5c463f91539288eff29b5fa5bebc966b8021ba3b85a81df6'
    },
    {
        id: '3',
        name: "My Wishlist",
        icon: 'https://img.freepik.com/free-photo/green-pencil-with-positive-questionnaire_1156-460.jpg?w=740&t=st=1701083646~exp=1701084246~hmac=18401161091a88bad2b0a3b721838f31b892e86bd8fbfb9e7e07e34410f87c0a'
    },
    {
        id: '4',
        name: "My Messages",
        icon: 'https://img.freepik.com/free-photo/3d-icon-blue-speech-bubble-with-bell_107791-16815.jpg?w=740&t=st=1701083805~exp=1701084405~hmac=0bbf63ab952d179f86267ae26fd151915e549f6356a30b2db7a7fedaa872877d'
    },
    {
        id: '5',
        name: "Logout",
        icon: 'https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=826&t=st=1701083937~exp=1701084537~hmac=f223f892ccd0d22e025f694e97a9696cc9604680a3e16b987dfc22bc80b4f676'
    },
]

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const Profile = () => {
    return (
        <StyledView className="container mx-auto">
            <FlatList
                data={Items}
                renderItem={({ item }: any) => {
                    return (
                        <StyledView className='rounded-2xl bg-white flex-row justify-start items-center gap-2 p-6 ml-3 mt-3'>
                            <StyledView>
                                <StyledImage
                                    className='w-20 h-20 rounded-full mb-2'
                                    source={{
                                        uri: `${item.icon}`,
                                    }}
                                />
                            </StyledView>
                            <StyledView className='mb-3'>
                                <StyledText className='text-2xl font-semibold'>{item.name}</StyledText>
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

export default withExpoSnack(Profile)