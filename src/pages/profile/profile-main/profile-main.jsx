import styles from './profile-main.module.css';
import { useDispatch } from 'react-redux';

import { pathUserData } from '../../../services/thunk/user-thunk';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileMain() {

    const dispatch = useDispatch();

    const onSubmitProfile = () => {
        dispatch(pathUserData());
    }
    return (
        <section>
            <form
                onSubmit={onSubmitProfile}
                className={styles.profile_inputs}>

                <Input type={'text'}
                    value={'Стас Басов'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                    extraClass="mb-2" />

                <Input type={'text'}
                    value={'stas_basov'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                    extraClass="mb-2" />

                <PasswordInput
                    value={'1234'}
                    name={'password'}
                    extraClass="mb-2"
                    disabled={false}
                />
                <div className={styles.buttons}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Отмена
                    </Button>

                    <Button htmlType="button" type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </form>
        </section >
    );
}

export default ProfileMain;
