import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../providers/blockchain.service';
@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss'],
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.blockchainInstance.chain;
    this.selectedBlock = this.blocks[0];
    console.log(this.blocks);
  }

  ngOnInit(): any {}

  showTransactions(block: any): any {
    console.log(block);
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block: any): any {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx(): any {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block: any): any {
    return this.selectedBlock === block;
  }

  getBlockNumber(block: any): any {
    return this.blocks.indexOf(block) + 1;
  }
}
