const BucketView = function(){
  this.bucketView = [];
}

BucketView.prototype.addItem = function(item){
  this.bucketView.push(item);
  this.render(item);
}

BucketView.prototype.clear = function(){
  this.bucketView = [];
  const ul = document.querySelector('#bucket-list');
  ul.innerHTML = '';
}

BucketView.prototype.render = function(item){
  const ul = document.querySelector('#bucket-list');
  const li = document.createElement('li');
  li.innerText =
}

// QuoteView.prototype.render = function(quote){
//     const ul = document.querySelector('#quotes');
//     const li = document.createElement('li');
//     const text = document.createElement('p');
//     text.innerText = `${quote.name} - "${quote.quote}"`;
//     li.appendChild(text);
//     ul.appendChild(li);
// }

 module.exports = QuoteView;
