import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '@/features/auth/useAuth';

import Box from '@mui/material/Box';

import H1Text from '@/components/H1Text/H1Text';
import H2Text from '@/components/H2Text/H2Text';
import GeneralPText from '@/components/GeneralPText/GeneralPText';
import GeneralSpanText from '@/components/GeneralSpanText/GeneralSpanText';

import TextFieldStyled from '@/components/TextFieldStyled/TextFieldStyled';
import ButtonStyled from '@/components/ButtonStyled/ButtonStyled';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import TableGuests from '@/components/TableGuests/TableGuests';
import {
  ContentContainer,
  FormContainer,
  FormBlockContainer,
  TableGuestDataContainer,
} from '@/pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
  const { login, user, isAuthenticated } = useAuth();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/recipes');
    }
  }, [user, isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const credentials = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    try {
      await login(credentials);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <H1Text>Unlock More Features</H1Text>

      <ContentContainer>
        <FormBlockContainer>
          <GeneralPText>
            <GeneralSpanText styles={{ display: 'block' }}>Welcome!</GeneralSpanText>
            <GeneralSpanText>
              To access exclusive options and your personal information, please <b>log in to your account.</b>
            </GeneralSpanText>
          </GeneralPText>

          <FormContainer noValidate onSubmit={handleLogin}>
            <TextFieldStyled name="username" label="User name" type="text" />
            <TextFieldStyled name="password" label="Password" type="password" />
            <ButtonStyled type="submit" mode="light">
              Log in
            </ButtonStyled>
          </FormContainer>
          {error ? <ErrorMessage>"Log in" process failed! Please check your credentials.</ErrorMessage> : null}
        </FormBlockContainer>

        <Box>
          <H2Text>Want to explore first?</H2Text>
          <TableGuestDataContainer>
            <GeneralPText styles={{ marginTop: 0 }}>Feel free to use one of our guest accounts: </GeneralPText>
            <TableGuests />
          </TableGuestDataContainer>
        </Box>
      </ContentContainer>
    </>
  );
};

export default LoginPage;
