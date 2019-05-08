import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainViewerComponent } from './components/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './components/pending-transactions/pending-transactions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { WalletBalanceComponent } from './components/wallet-balance/wallet-balance.component';
import { BlockchainService } from './providers/blockchain.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    BlockchainViewerComponent,
    BlockViewComponent,
    TransactionsTableComponent,
    SettingsComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent,
  ],
  providers: [BlockchainService],
})
export class BlockchainModule {}
