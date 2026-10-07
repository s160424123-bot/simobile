import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi, Transaction} from '../transaksi';


@Component({
  selector: 'app-detailtransaksi',
  templateUrl: './detailtransaksi.page.html',
  styleUrls: ['./detailtransaksi.page.scss'],
  standalone: false,
})
export class DetailtransaksiPage implements OnInit {
transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transaksiService: Transaksi
  ) { }

  ngOnInit() {
    const trxId = this.route.snapshot.paramMap.get('id');
    if(trxId){
      this.transaction = this.transaksiService.getTransactionById(trxId);
    }
  }

}
