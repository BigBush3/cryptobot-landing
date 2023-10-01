import styled, { useTheme } from 'styled-components';

import { Box, Button, Container, Typography } from '@/core/atoms';
import Logo from '@/core/assets/icons/logo';
import Sun from '@/core/assets/icons/sun';
import Moon from '@/core/assets/icons/moon';

export default function Header({ themeToggler }) {
  const { isDark } = useTheme();
  console.log(themeToggler);
  return (
    <Container>
      <Box mt={30} flexDirection={'row'} ai={'center'} jc={'space-between'}>
        <RoundedBox pr={186}>
          <Logo />
        </RoundedBox>
        <Box gap={32}>
          <Box>
            <Typography>Use cases</Typography>
          </Box>
          <Box>
            <Typography>Features</Typography>
          </Box>
          <Box>
            <Typography>How to start</Typography>
          </Box>
        </Box>
        <Box gap={12} ai={'center'}>
          <Box onClick={themeToggler}>{isDark ? <Moon /> : <Sun />}</Box>
          <Button>Get started</Button>
        </Box>
      </Box>
    </Container>
  );
}

const RoundedBox = styled(Box)`
  svg {
    border-radius: 16px;
  }
`;
