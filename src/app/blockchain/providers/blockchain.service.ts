import { Blockchain } from '4pjt/src/blockchain';
import { Injectable } from '@angular/core';
import EC from 'elliptic';
@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();
  public walletKeys: IWalletKey[] = [];
  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('hi');
    this.generateWalletKeys();
  }

  minePendingTransactions(): any {
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
  }

  addressIsFromCurrentUser(address: any): any {
    return address === this.walletKeys[0].publicKey;
  }

  generateWalletKeys(): any {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();
    console.log(key.getPublic('hex'));
    console.log(key.getPrivate('hex'));

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

    console.log(this.walletKeys);
  }

  getPendingTransactions(): any {
    return this.blockchainInstance.pendingTransactions;
  }

  addTransaction(tx: any): any {
    this.blockchainInstance.addTransaction(tx);
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
