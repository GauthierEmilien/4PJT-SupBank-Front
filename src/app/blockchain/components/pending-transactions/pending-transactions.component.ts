import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockchainService } from '../../providers/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss'],
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];
  public miningInProgress = false;
  public justAddedTx = false;

  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): any {
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }
  }

  minePendingTransactions(): any {
    this.miningInProgress = true;
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/']);
  }
}
