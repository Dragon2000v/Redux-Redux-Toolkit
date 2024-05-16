import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я є обов'язковим!")
    .min(3, 'Має бути не менше 3-х символів')
    .max(20, 'Має бути не більше 20-ти символів')
    .trim('Не має містити пробілів'),
  number: Yup.string()
    .required('Номер телефону є обов’язковим')
    .matches(/^[0-9]+$/, 'Має містити лише цифри')
    .min(10, 'Має бути не менше 10-ти символів')
    .max(15, 'Має бути не більше 15-ти символів'),
});

const initialValues = { name: '', number: '' };
const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Ваше ім'я"
          />
          <ErrorMessage className={s.error} name="name" component="span" />

          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Ваш номер телефону"
          />
          <ErrorMessage className={s.error} name="number" component="span" />

          <div className={s.formButton}>
            <Button type="submit">Додати контакт</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
