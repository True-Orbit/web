import { StyledMessage, models } from ".";

interface Props {
  message?: string | null;
  variant?: models.MessageType;
}

export const ErrorMessage = ({ message, variant='inline' }: Props) => message ? <StyledMessage variant={variant} className="errorMessage">{message}</StyledMessage> : null;
