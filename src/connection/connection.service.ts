import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { MaticAbi } from '../../abis/matic.abi';

@Injectable()
export class ConnectionService {
  private readonly contractAddress: string =
    '0x0000000000000000000000000000000000001010';

  private provider(): ethers.JsonRpcProvider {
    const provider = new ethers.JsonRpcProvider(
      'https://polygon-mumbai.g.alchemy.com/v2/4ZvCJPec7tcF2hzCFBSQbYHoJP135M4V',
    );
    return provider;
  }

  private getContract(): ethers.Contract {
    const provider = this.provider();

    const contract = new ethers.Contract(
      this.contractAddress,
      MaticAbi,
      provider,
    );
    return contract;
  }

  async getBalanceOf(address: string): Promise<string> {
    const contract = this.getContract();
    const balance = await contract.balanceOf(address);

    return ethers.formatUnits(balance, 'ether').toString();
  }
}
