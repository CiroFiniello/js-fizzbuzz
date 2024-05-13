const containerEl = document.querySelector('div.container');
// console.log(containerEl);

for(let count=1; count <= 100; count++){
    let content = count;
    const newArticle = document.createElement('article');
    if (count % 3 === 0 && count % 5 === 0){
        content = 'FizzBuzz';
        newArticle.classList.add('bg-blu');
    }else if(count % 3 === 0){
        content = 'Fizz';
        newArticle.classList.add('bg-green');
    }else if(count % 5 === 0){
        content = 'Buzz';
        newArticle.classList.add('bg-red');
    }   
    newArticle.append(content);
    containerEl.appendChild(newArticle);
    console.log(content);
}