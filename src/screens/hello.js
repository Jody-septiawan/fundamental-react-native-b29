import * as React from 'react';
import { Text, Box } from 'native-base';

export default function Hello() {
  return (
    <Box bg="primary.300" flex={1} alignItems="center" justifyContent="center">
      <Text fontSize={40} fontStyle="italic">
        Life's to short
      </Text>
    </Box>
  );
}
