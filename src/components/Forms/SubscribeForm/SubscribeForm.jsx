import { Formik, ErrorMessage, Field } from 'formik';
import {
  SubscribeWrapper,
  SubscribeInput,
  SubscribeText,
  SubscribeButton,
} from './SubscribeForm.styled';
import { useDispatch } from 'react-redux';
import { subscribesEmailThunk } from '../../../redux/subscribes/operations';
const SubscribeForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { error } = await dispatch(subscribesEmailThunk(values.email));
        if (!error) {
          resetForm();
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <SubscribeWrapper>
          <SubscribeText>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </SubscribeText>
          <Field
            as={SubscribeInput}
            type="email"
            name="email"
            placeholder="Enter the email"
            required
          />
          <ErrorMessage
            name="email"
            component="div"
            style={{ color: 'red', fontSize: '14px' }}
          />

          <SubscribeButton type="submit" disabled={isSubmitting}>
            Subscribe
          </SubscribeButton>
        </SubscribeWrapper>
      )}
    </Formik>
  );
};

export default SubscribeForm;
