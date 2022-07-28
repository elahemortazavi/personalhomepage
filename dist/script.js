var srcs;


srcs = ['https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80', 'https://media.istockphoto.com/photos/angry-lion-roaring-picture-id1184240863?k=20&m=1184240863&s=612x612&w=0&h=ZFNwlEJFT5LhaLE-NMr2VHWjDt-HhcoEkYXibbc7lXQ=', 'https://media.istockphoto.com/photos/close-up-of-a-roaring-lion-picture-id1354939778?b=1&k=20&m=1354939778&s=170667a&w=0&h=VzouVd3Jy6oKlUKfmG-qNGckVisEfwK-a-JIAB4HHSI='];


document.getElementById('next').addEventListener('click', (event) => {
  srcs.push(srcs.shift());
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", srcs[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  srcs.unshift(srcs.slice(-1)[0]);
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", srcs.pop());

});