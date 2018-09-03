import React from 'react';
import { Box } from './box';
import { Heading } from './heading';
import { Text } from './text';

type Props = Partial<{
  title: string;
  description?: string;
}>;

export const Card: React.SFC<Props> = ({ title, description }: Props) => (
  <Box>
    <Heading>{title}</Heading>
    <Text>{description}</Text>
  </Box>
);

export default Card;
