var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  
  document.querySelector('.year')  .innerHTML = year
  document.querySelector('.month') .innerHTML = ('00' + month).slice( -2 )
  document.querySelector('.day')   .innerHTML = ('00' + day).slice( -2 )
  document.querySelector('.hour')  .innerHTML = ('00' + hour).slice( -2 )
  document.querySelector('.minute').innerHTML = ('00' + minute).slice( -2 )
  document.querySelector('.second').innerHTML = ('00' + second).slice( -2 )
}

setInterval(clock, inc);

