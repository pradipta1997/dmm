import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  id: string | null = null; // Initialize id as string or null
  title: string | null = null; // Initialize id as string or null
  pdf: string | null = null; // Initialize id as string or null

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Subscribe to route params to get the ID
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id); // Output the ID to console (optional)
    });
    if (this.id == '1') {
      this.title = "DMMX Group Makes Groundbreaking Debut at NRF 2024 Retail’s Big Show in New York";
      this.pdf = "DMMX-Grup-Debut-Perdana-di-NRF-2024.pdf";
    } else if(this.id == '2'){
      this.title = "Implementing AI-Based Smart Retail, DMMX Group Partners with Hotels, Supermarkets, and Airports in the Middle East, South America, and Southeast Asia";
      this.pdf = "DMMX-Grup-Implementasi-Solusi-Smart-Ritel-Berbasis-AI-di-Berbagai-Negara-Bilingual-vf.pdf"
    } else if(this.id =='3'){
      this.title = "ZKDigimax Pte. Ltd, a Joint Venture Between ZKTeco and DMMX, Begins Production of Artificial Intelligence-Based Smart Retail Solutions Serving 15 Countries";
      this.pdf = "ZKDigimax-Pte.-Ltd,-Perusahaan-Patungan-Antara-ZKTeco-dan-DMMX-Mulai-Melakukan-Produksi-Solusi-Smart-Ritel-Berbasis-Artificial-Intelligence-Melayani-15-Negara.pdf"
    } else if (this.id =='4'){
      this.title = "The Signing of MoU Collaboration Between DMMX and PT Alternative Media Group (AMG) Offering Digital Advertising Solutions and a More Dynamic Experience for Consumers";
      this.pdf = "Final-PR-MoU-DMMX-dan-AMG-Bilingual.pdf";
    } else if (this.id =='5'){ 
      this.title = "PT Digital Mediatama Maxima Tbk (DMMX) Raih Penghargaan dari Samsung “Best Partner for Retail Implementation Smart Digital Signage 2023” ";
      this.pdf = "DMMX-Raih-Penghargaan-Best-Partner-for-Retail-Implementation-Smart-Signage-Samsung-2023-for-web.pdf";
    }
  }



}
