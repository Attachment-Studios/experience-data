
/*
  Format:
  [
    "name",
    "description",
    "author",
    "icon-link",
    "page-link",
    [
      "tag1",
      "tag2",
      "tag3"
    ]
  ],
  
  Blank:
  [
    "",
    "",
    "",
    "",
    "",
    []
  ]
*/

var data = [
  [
    "The Box",
    "The Box is an easy simple arcade game about jumping.",
    "Attachment Aditya, Attachment Studios",
    "https://github.com/Attachment-Studios/the-box/blob/main/LOGO.png?raw=true",
    "https://attachment-studios.github.io/the-box",
    [
      "Arcade",
      "Endless",
      "2D",
      "Jumping",
      "Platformer"
    ]
  ],
]

const data_emb = document.createElement("p");
data_emb.innerHTML = "Hello, World!";
document.body.append(data_emb);

