import styled from 'styled-components';
import Image from 'next/image';

import { Box, Button, Container, Span, Typography } from '@/core/atoms';
import Phone from '@/core/assets/images/mockup.png';
import PhotoBots from '@/core/assets/images/photo-bots.png';

export default function Greet() {
  return (
    <Container>
      <Box jc={'space-between'} ai={'center'} mt={30} mb={120}>
        <Box flexDirection={'column'}>
          <Box mb={32}>
            <Typography level={'h1'}>
              Crypto payments
              <br />
              for <Span color={'blue.primary'}>telegram bots</Span>
            </Typography>
          </Box>
          <Box mb={32}>
            <Typography>
              Seamlessly accept crypto payments
              <br />
              in your Telegram bots and services.
            </Typography>
          </Box>
          <Box mb={56}>
            <Button>Get started</Button>
          </Box>
          <Box flexDirection={'column'}>
            <Box pb={16}>
              <Image width={352} height={96} src={PhotoBots} />
            </Box>
            <Box>
              <Typography level={'t3'}>Popular bots use Crypto Pay</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image height={800} src={Phone} />
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
