import { StyledMessage } from ".";

interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => message ? <StyledMessage>{message}</StyledMessage> : null;
