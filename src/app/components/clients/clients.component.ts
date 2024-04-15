import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
  DataClients: any[] = []

  constructor(private clientService: ClientsService ){ }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(response => {
      this.DataClients = response
    })
  }

}
