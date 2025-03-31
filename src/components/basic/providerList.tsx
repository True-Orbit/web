import React from 'react';

interface ProviderListProps {
  providers: React.ComponentType<{ children: React.ReactNode }>[];
  children: React.ReactNode;
}

export const ProviderList: React.FC<ProviderListProps> = ({ providers, children }) =>
  providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
