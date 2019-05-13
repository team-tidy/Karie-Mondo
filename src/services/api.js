import profileArray from './profile-data.js';

const api = {
    storage: localStorage,
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;
    },
    getProfile(id) {
        for(let i = 0; i < profileArray.length; i++) {
            const profile = profileArray[i];
            if(profile.id === id) {
                return profile;
            }
        }
    }
};



export default api;