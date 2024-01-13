export type GeneratorPromptArgs = {
  description: string;
  contractType: string;
};

export type BuildResponse = {
  success: boolean;
  message: string;
  artifact: unknown;
  code: string;
};

export type Vulnerability = {
  title: string;
  description: string;
  severity: VulnerabilitySeverity;
};

export type VulnerabilitySeverity = 'High' | 'Medium' | 'Low';

export type ContractType = 'ERC20' | 'ERC721' | 'ERC1155' | 'Vault' | 'Marketplace' | 'AMM';
