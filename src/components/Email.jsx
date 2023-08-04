import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

const Email = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);

    const handleChange = (e) => {
        dispatch(changeEmail(e.target.value));
    };

    return (
        <input
            type='email'
            placeholder='Write an email address'
            value={email}
            onChange={handleChange}
        />
    );
};

export default Email;
