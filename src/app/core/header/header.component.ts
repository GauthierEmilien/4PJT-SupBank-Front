import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../blockchain/providers/blockchain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'MaxoteCoin';
  public blockchain;
  public showInfoMessage = true;

  constructor(private blockchainService: BlockchainService) {
    this.blockchain = this.blockchainService.blockchainInstance;
  }

  ngOnInit(): void {}

  thereArePendingTransactions(): any {
    return this.blockchain.pendingTransactions.length > 0;
  }

  dismissInfoMessage(): void {
    this.showInfoMessage = false;
  }
}
