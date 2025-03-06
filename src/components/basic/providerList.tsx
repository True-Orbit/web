import React from 'react';

interface ProviderListProps {
  providers: React.ComponentType<{ children: React.ReactNode }>[];
  children: React.ReactNode;
}

export const ProviderList: React.FC<ProviderListProps> = ({ providers, children }) => {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};
