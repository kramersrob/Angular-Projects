import { Component, OnInit } from '@angular/core';

interface displayText {
  title: string;
}

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  public displayText: displayText[] =[
    {
      title: 'Styles Freight'
    },
    {
      title: 'Regular'
    },
    {
      title: 'Light'
    },
    {
      title: 'Bold'
    },
    {
      title: 'Headers Freight'
    },
    {
      title: 'Example'
    },
    {
      title: 'Example'
    },
    {
      title: 'Example'
    },
    {
      title: 'Example'
    },
    {
      title: 'Example'
    },
    {
      title: 'Example'
    },
    {
      title: 'Lorem Freight'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error eligendi nam veniam recusandae temporibus expedita minus placeat, alias modi repellat laboriosam ratione sapiente reiciendis. Atque optio ipsum dicta iusto.'
    },
    {
      title: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
