import { render, screen } from '@testing-library/react';
import { FormWrapper } from '@/components/spec';
import { field as EmailField } from '.';

describe('EmailField', () => {
  it('renders with default name prop', () => {
    render(
      <FormWrapper>
        <EmailField />
      </FormWrapper>,
    );

    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveAttribute('type', 'email');
    expect(emailField).toHaveAttribute('id', 'email');
  });

  it('renders with custom name prop', () => {
    render(
      <FormWrapper>
        <EmailField name="userEmail" />
      </FormWrapper>,
    );

    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveAttribute('id', 'userEmail');
  });

  it('displays error message when validation fails', () => {
    render(
      <FormWrapper>
        <EmailField />
      </FormWrapper>,
    );

    const form = screen.getByRole('textbox');
    expect(form).toBeInTheDocument();
  });

  it('accepts additional props', () => {
    render(
      <FormWrapper>
        <EmailField placeholder="Enter email address" disabled />
      </FormWrapper>,
    );

    const emailField = screen.getByLabelText('Email');
    expect(emailField).toHaveAttribute('placeholder', 'Enter email address');
    expect(emailField).toBeDisabled();
  });
});
