import * as yup from 'yup';

export const validation = yup.object().shape({
    email: yup.string().email().required('Required!'),
    password: yup.string().required('Required!').min(6, 'Please try a longer password...'),
    confirmPassword: yup.string().required('Required!').test('passwords-match', 'Passwords must match!', function(value) {
        return this.parent.confirmPassword === value
    }),
});