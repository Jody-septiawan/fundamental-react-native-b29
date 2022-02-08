import * as React from 'react';

//Import Component Native Base
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';

export default function FormNativeBase() {
  return (
    <Box bg="primary.50" flex={1} p={10} justifyContent="center">
      <Heading fontSize={40} mb={10}>
        Welcome
      </Heading>

      <VStack>
        <FormControl mb={5}>
          <FormControl.Label>Email</FormControl.Label>
          <Input bg="primary.300" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input bg="primary.300" />
        </FormControl>

        <Button mt={10} bg="primary.900" _text={{ fontSize: 20 }}>
          Login
        </Button>

        <Divider bg="primary.900" mt={5} />

        <Text mt={5}>
          Sudah punya akun? <Text color="danger.300">Belum</Text>
        </Text>
      </VStack>
    </Box>
  );
}
