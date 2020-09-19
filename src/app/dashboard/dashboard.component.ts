import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageNumber: number = 1;

  jsonData: any = [
    {
      productName: "Coombes",
      productType: "Lounge",
      details: "One night, design duo Christiana Giopato and Christopher Coombes were strolling through the park and found themselves inspired by the dewdrops on blades of grass, glistening as they reflected the subtle moonlight. Dewdrop is this moment brought to life—an abstract interpretation of one of nature’s most beautiful patterns, something we see every day but often take for granted. Defined by a sophisticated visual lightness, this balancing mobile lighting structure emits a soft light and is available in two configurations.",
      img: "../../assets/furniture.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "In Heaven",
      productType: "Nana Groner",
      details: "The In Heaven Bed reduces the iconic four poster bed to the simplest form. The result is a geometric and minimalist box that truly defines a space within a space",
      img: "../../assets/in-heaven.jpg",
      price: "11470",
      star: "3"
    },
    {
      productName: "Kin Big",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. KIN BIG offers efficient storage solutions for a wide range of tasks. As a compact wardrobe, for instance in a child's room, a generous kitchen cabinet, a large single bedroom dresser, or a piece of hallway furniture, KIN BIG adapts to your needs.",
      img: "../../assets/kin-big.jpg",
      price: "590",
      star: "3"
    },
    {
      productName: "Kin Tall",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. Despite its stature, KIN TALL remains unobstructive whether it stands alone or as an assortment of two or more.",
      img: "../../assets/kin-tall.jpg",
      price: "950",
      star: "1"
    },
    {
      productName: "Valet Chair",
      productType: "Hans J. Wegner",
      details: "Wegner came up with the idea for the pp250  Valet Chair in 1951, following a long talk with Professor of Architecture Steen Eiler Rasmussen and designer Kay Bojesen about the problems of folding clothes in the most practical manner when it was time for bed. The back of pp250 works as a hanger for a jacket, while the seat is hinged and can be placed in an upright position so the trousers can be neatly folded. Underneath the seat a box is revealed for keys, a wallet, or any other small items. Not only is the chair modern and elegant, but it is also the perfect solution for reducing the stress of a rushed morning routine.",
      img: "../../assets/pp250-17552.jpg",
      price: "890",
      star: "3"
    },
    {
      productName: "Saya",
      productType: "Lievore, Molina",
      details: "Lievore, Altherr, Molina's Saya Chair is a mark, a gesture, a graphic sign, rendered in wood to finish a space like a signature. Fluid in line, warm in material, Saya's silhouette is bold and striking. Saya inspires inclusion in diverse environments from home to contract.  A 2013 Red Dot Design Award winner, Saya is stackable up to ten chairs high and available in a myriad of versions, from a sled base to wooden legs and even a children’s size.  The plywood oak shell is available in natural stain or the following color stains: teak, white, black, ochre and three shades of red.  The limited palette allows variable yet cohesive combinations.",
      img: "../../assets/Saya_Chair.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "Kin Tall",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. Despite its stature, KIN TALL remains unobstructive whether it stands alone or as an assortment of two or more.",
      img: "../../assets/kin-tall.jpg",
      price: "950",
      star: "1"
    },
    {
      productName: "Coombes",
      productType: "Lounge",
      details: "One night, design duo Christiana Giopato and Christopher Coombes were strolling through the park and found themselves inspired by the dewdrops on blades of grass, glistening as they reflected the subtle moonlight. Dewdrop is this moment brought to life—an abstract interpretation of one of nature’s most beautiful patterns, something we see every day but often take for granted. Defined by a sophisticated visual lightness, this balancing mobile lighting structure emits a soft light and is available in two configurations.",
      img: "../../assets/furniture.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "Valet Chair",
      productType: "Hans J. Wegner",
      details: "Wegner came up with the idea for the pp250  Valet Chair in 1951, following a long talk with Professor of Architecture Steen Eiler Rasmussen and designer Kay Bojesen about the problems of folding clothes in the most practical manner when it was time for bed. The back of pp250 works as a hanger for a jacket, while the seat is hinged and can be placed in an upright position so the trousers can be neatly folded. Underneath the seat a box is revealed for keys, a wallet, or any other small items. Not only is the chair modern and elegant, but it is also the perfect solution for reducing the stress of a rushed morning routine.",
      img: "../../assets/pp250-17552.jpg",
      price: "890",
      star: "3"
    },
    {
      productName: "Saya",
      productType: "Lievore, Molina",
      details: "Lievore, Altherr, Molina's Saya Chair is a mark, a gesture, a graphic sign, rendered in wood to finish a space like a signature. Fluid in line, warm in material, Saya's silhouette is bold and striking. Saya inspires inclusion in diverse environments from home to contract.  A 2013 Red Dot Design Award winner, Saya is stackable up to ten chairs high and available in a myriad of versions, from a sled base to wooden legs and even a children’s size.  The plywood oak shell is available in natural stain or the following color stains: teak, white, black, ochre and three shades of red.  The limited palette allows variable yet cohesive combinations.",
      img: "../../assets/Saya_Chair.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "In Heaven",
      productType: "Nana Groner",
      details: "The In Heaven Bed reduces the iconic four poster bed to the simplest form. The result is a geometric and minimalist box that truly defines a space within a space",
      img: "../../assets/in-heaven.jpg",
      price: "11470",
      star: "3"
    },
    {
      productName: "Kin Big",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. KIN BIG offers efficient storage solutions for a wide range of tasks. As a compact wardrobe, for instance in a child's room, a generous kitchen cabinet, a large single bedroom dresser, or a piece of hallway furniture, KIN BIG adapts to your needs.",
      img: "../../assets/kin-big.jpg",
      price: "590",
      star: "3"
    },
    {
      productName: "Coombes",
      productType: "Lounge",
      details: "One night, design duo Christiana Giopato and Christopher Coombes were strolling through the park and found themselves inspired by the dewdrops on blades of grass, glistening as they reflected the subtle moonlight. Dewdrop is this moment brought to life—an abstract interpretation of one of nature’s most beautiful patterns, something we see every day but often take for granted. Defined by a sophisticated visual lightness, this balancing mobile lighting structure emits a soft light and is available in two configurations.",
      img: "../../assets/furniture.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "In Heaven",
      productType: "Nana Groner",
      details: "The In Heaven Bed reduces the iconic four poster bed to the simplest form. The result is a geometric and minimalist box that truly defines a space within a space",
      img: "../../assets/in-heaven.jpg",
      price: "11470",
      star: "3"
    },
    {
      productName: "Kin Big",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. KIN BIG offers efficient storage solutions for a wide range of tasks. As a compact wardrobe, for instance in a child's room, a generous kitchen cabinet, a large single bedroom dresser, or a piece of hallway furniture, KIN BIG adapts to your needs.",
      img: "../../assets/kin-big.jpg",
      price: "590",
      star: "3"
    },
    {
      productName: "Kin Tall",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. Despite its stature, KIN TALL remains unobstructive whether it stands alone or as an assortment of two or more.",
      img: "../../assets/kin-tall.jpg",
      price: "950",
      star: "1"
    },
    {
      productName: "Valet Chair",
      productType: "Hans J. Wegner",
      details: "Wegner came up with the idea for the pp250  Valet Chair in 1951, following a long talk with Professor of Architecture Steen Eiler Rasmussen and designer Kay Bojesen about the problems of folding clothes in the most practical manner when it was time for bed. The back of pp250 works as a hanger for a jacket, while the seat is hinged and can be placed in an upright position so the trousers can be neatly folded. Underneath the seat a box is revealed for keys, a wallet, or any other small items. Not only is the chair modern and elegant, but it is also the perfect solution for reducing the stress of a rushed morning routine.",
      img: "../../assets/pp250-17552.jpg",
      price: "890",
      star: "3"
    },
    {
      productName: "Saya",
      productType: "Lievore, Molina",
      details: "Lievore, Altherr, Molina's Saya Chair is a mark, a gesture, a graphic sign, rendered in wood to finish a space like a signature. Fluid in line, warm in material, Saya's silhouette is bold and striking. Saya inspires inclusion in diverse environments from home to contract.  A 2013 Red Dot Design Award winner, Saya is stackable up to ten chairs high and available in a myriad of versions, from a sled base to wooden legs and even a children’s size.  The plywood oak shell is available in natural stain or the following color stains: teak, white, black, ochre and three shades of red.  The limited palette allows variable yet cohesive combinations.",
      img: "../../assets/Saya_Chair.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "Kin Tall",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. Despite its stature, KIN TALL remains unobstructive whether it stands alone or as an assortment of two or more.",
      img: "../../assets/kin-tall.jpg",
      price: "950",
      star: "1"
    },
    {
      productName: "Coombes",
      productType: "Lounge",
      details: "One night, design duo Christiana Giopato and Christopher Coombes were strolling through the park and found themselves inspired by the dewdrops on blades of grass, glistening as they reflected the subtle moonlight. Dewdrop is this moment brought to life—an abstract interpretation of one of nature’s most beautiful patterns, something we see every day but often take for granted. Defined by a sophisticated visual lightness, this balancing mobile lighting structure emits a soft light and is available in two configurations.",
      img: "../../assets/furniture.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "Valet Chair",
      productType: "Hans J. Wegner",
      details: "Wegner came up with the idea for the pp250  Valet Chair in 1951, following a long talk with Professor of Architecture Steen Eiler Rasmussen and designer Kay Bojesen about the problems of folding clothes in the most practical manner when it was time for bed. The back of pp250 works as a hanger for a jacket, while the seat is hinged and can be placed in an upright position so the trousers can be neatly folded. Underneath the seat a box is revealed for keys, a wallet, or any other small items. Not only is the chair modern and elegant, but it is also the perfect solution for reducing the stress of a rushed morning routine.",
      img: "../../assets/pp250-17552.jpg",
      price: "890",
      star: "3"
    },
    {
      productName: "Saya",
      productType: "Lievore, Molina",
      details: "Lievore, Altherr, Molina's Saya Chair is a mark, a gesture, a graphic sign, rendered in wood to finish a space like a signature. Fluid in line, warm in material, Saya's silhouette is bold and striking. Saya inspires inclusion in diverse environments from home to contract.  A 2013 Red Dot Design Award winner, Saya is stackable up to ten chairs high and available in a myriad of versions, from a sled base to wooden legs and even a children’s size.  The plywood oak shell is available in natural stain or the following color stains: teak, white, black, ochre and three shades of red.  The limited palette allows variable yet cohesive combinations.",
      img: "../../assets/Saya_Chair.jpg",
      price: "2600",
      star: "4"
    },
    {
      productName: "In Heaven",
      productType: "Nana Groner",
      details: "The In Heaven Bed reduces the iconic four poster bed to the simplest form. The result is a geometric and minimalist box that truly defines a space within a space",
      img: "../../assets/in-heaven.jpg",
      price: "11470",
      star: "3"
    },
    {
      productName: "Kin Big",
      productType: "Mathias Hahn",
      details: "KIN is a collection of cabinets, each with its own unique design that is as visually alluring as it is functional. The KIN Collection's flexibility makes it suitable for any and every space. The inner design of each piece can be customized to fit the needs of the surrounding space and the entire collection is available in various color stain options. KIN BIG offers efficient storage solutions for a wide range of tasks. As a compact wardrobe, for instance in a child's room, a generous kitchen cabinet, a large single bedroom dresser, or a piece of hallway furniture, KIN BIG adapts to your needs.",
      img: "../../assets/kin-big.jpg",
      price: "590",
      star: "3"
    }
  ]

  breakJson: any = [];
  finalJson: any = [];
  count: any = 3;

  constructor(private dataservice: ServicesService) { }

  ngOnInit() {

    this.dataservice.searchData$.subscribe(
      (data) => {
        this.filterData(data);
      }
    );

    this.dynamicHtml(this.jsonData);

  }

  filterData(data: any) {
    let filterArray = this.jsonData.filter(obj => {
      let ser = obj['productName'].toLowerCase().includes(data.toLowerCase()) ||
        obj['productType'].toLowerCase().includes(data.toLowerCase()) ||
        obj['price'].toLowerCase().includes(data.toLowerCase()) ? true : false;
      return ser;
    })

    this.dynamicHtml(filterArray)

  }

  dynamicHtml(jsnDt) {
    this.count = 3;
    this.finalJson = [];
    this.breakJson = [];
    for (let i = 0; i < jsnDt.length; i++) {
      if (this.count == i) {
        this.count = this.count + 3
        this.finalJson.push(this.breakJson);
        this.breakJson = [];
        this.breakJson.push(jsnDt[i])
      }
      else {
        this.breakJson.push(jsnDt[i])
      }
      if (this.count != i && jsnDt.length - 1 == i) {
        this.finalJson.push(this.breakJson);
      }
    }

    this.pageNumber = 1;

  }

  detailDataPassing(dataPassing: any) {
    this.dataservice.emitDetailsData(dataPassing);
  }



}
