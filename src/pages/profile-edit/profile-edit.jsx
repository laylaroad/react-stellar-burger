import styles from './profile-edit.module.css';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfileEdit() {


    return (

        <section className={styles.profile_edit}>
            <div>
                <ul className="text text_type_main-medium mt-8 mb-8">
                    <li>Профиль</li>
                    <li>История заказов</li>
                    <li>Выход</li>
                </ul>
                <p className="text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные.</p>
            </div>

            <div>

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

                <Button htmlType="button" type="secondary" size="medium">
                    Отмена
                </Button>

                <Button htmlType="button" type="primary" size="medium">
                    Сохранить
                </Button>

            </div>
        </section>
    )
}


export default ProfileEdit;
