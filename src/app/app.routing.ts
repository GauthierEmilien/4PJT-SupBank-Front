import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewerComponent } from './blockchain/components/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './blockchain/components/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './blockchain/components/pending-transactions/pending-transactions.component';
import { SettingsComponent } from './blockchain/components/settings/settings.component';
import { WalletBalanceComponent } from './blockchain/components/wallet-balance/wallet-balance.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  { path: 'home', component: BlockchainViewerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'new/transaction', component: CreateTransactionComponent },
  { path: 'new/transaction/pending', component: PendingTransactionsComponent },
  { path: 'wallet/:address', component: WalletBalanceComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
