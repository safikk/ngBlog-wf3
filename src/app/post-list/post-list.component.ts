import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Object> = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet tellus non eros lacinia vestibulum. Morbi egestas feugiat leo, quis sollicitudin augue tempus vel. Praesent euismod mauris turpis, eu volutpat turpis interdum ut. Cras quis iaculis metus. Praesent ornare leo sed lacinia commodo.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième message',
      // tslint:disable-next-line:max-line-length
      content: 'Fusce facilisis dapibus nisl, non convallis risus auctor quis. Pellentesque fermentum condimentum vulputate. Quisque ullamcorper felis nec egestas accumsan. Mauris vitae neque mauris. Nam ac mi a quam pulvinar bibendum nec at diam. Curabitur id nulla et justo pretium vehicula. ',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Enfin, un troisième article !',
      // tslint:disable-next-line:max-line-length
      content: 'Vestibulum convallis sem viverra massa facilisis venenatis. Sed ac lorem quam. Vestibulum semper eget justo et aliquet. Maecenas nec neque nec nisi euismod ornare in ut arcu. Vivamus dignissim, leo quis auctor suscipit, ante ipsum pretium ante, vitae convallis elit eros vel eros.',
      loveIts: 0,
      created_at: new Date()
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
