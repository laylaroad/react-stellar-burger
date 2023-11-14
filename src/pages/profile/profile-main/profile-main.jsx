import styles from './profile-main.module.css';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';


function ProfileMain() {
    return (
        <section>
            <div className={styles.profile_inputs}>

                <Input type={'text'}
                    placeholder={'Имя'}
                    icon="EditIcon"
                    extraClass="mb-2" />

                <Input type={'text'}
                    placeholder={'Логин'}
                    icon="EditIcon"
                    extraClass="mb-2" />

                <PasswordInput
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
            </div>
        </section>
    );
}

export default ProfileMain;
