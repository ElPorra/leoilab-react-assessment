export async function authHeader() {
    // return authorization header with jwt token
console.log('headerr');
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
        return {
              'Authorization': 'Bearer ' + token
              };
    } else {
        return {};
    }
}