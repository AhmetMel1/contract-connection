export interface Abi {
  inputs: {
    internalType: string;
    name: string;
    type: string;
    anonymous?: boolean;
  };
}
