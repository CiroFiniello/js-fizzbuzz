const containerEl = document.querySelector('div.container');
// console.log(containerEl);

for(let count=1; count <= 100; count++){
    let content = count;
    if (count % 3 === 0 && count % 5 === 0){
        content = 'FizzBuzz';
    }else if(count % 3 === 0){
        content = 'Fizz';
    }else if(count % 5 === 0){
        content = 'Buzz';
    }   
    console.log(content);
}