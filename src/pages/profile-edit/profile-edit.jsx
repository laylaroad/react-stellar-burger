import styles from './profile-edit.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {


    return (

        <section className={styles.profile}>

            <div className={styles.profile_edit}>

                <Input type={'text'} placeholder={'Имя'} extraClass="mb-2" />
                <Input type={'text'} placeholder={'Логин'} extraClass="mb-2" />

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <PasswordInput
                        // onChange={onChange}
                        // value={value}
                        name={'password'}
                        extraClass="mb-2"
                    />
                </div>
            </div>
            <Button htmlType="button" type="secondary" size="medium">
                Отмена
            </Button>

            <Button htmlType="button" type="primary" size="medium">
                Сохранить
            </Button>

        </section>
    )
}


export default ProfileEdit;
