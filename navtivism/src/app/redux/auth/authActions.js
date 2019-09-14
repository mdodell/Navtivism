var animals = require('animals');
var faker = require('faker');

export const registerUser = (user) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const randomAnimal = animals();
        const capitalizedRandomAnimal = randomAnimal.charAt(0).toUpperCase() + randomAnimal.slice(1);
        const randomLastName = faker.name.lastName();
        const firstName = user.firstName || capitalizedRandomAnimal;
        const lastName = user.lastName || randomLastName;
        try {
            let createdUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.passwordOne);
            await createdUser.user.updateProfile({
                displayName: firstName + ' ' + lastName
            });
            let newUser = {
                fullName: `${firstName} ${lastName}`,
                email: user.email
            };
            await firestore.set(`users/${createdUser.user.uid}`, {...newUser});
        } catch (error) {
            console.log(error);
        }
    };
};