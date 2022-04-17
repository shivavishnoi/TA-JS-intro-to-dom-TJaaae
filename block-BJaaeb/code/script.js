/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
// let createInputElm = (label, type = "text") => {
//   let parent = document.createElement(`label`)
//   let child = document.createElement('input')
//   child.setAttribute('type', type)
//   parent.innerText = label
//   parent.append(child)
//   return parent
// }
// TEST
// createInputElm('Your name'); //<label>Your name: <input type="text"></label>
// createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
let createInputElm = (label, type = "text") => {
  let parent = document.createElement(`label`)
  parent.innerHTML = `${label}: <input type="${type}">`
  return parent
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
let createList = (array) => {
  let ul = document.createElement('ul')
  array.forEach((element, index) => {
    let li = document.createElement('li')
    li.innerText = element
    ul.append(li)
  });
  return ul
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
let createTodoList = (array) => {
  let ul = document.createElement(`ul`)
  let li = document.createElement('li')
  ul.append(li)
  array.forEach((element) => {
    if (!element.isDone) {
      let p = document.createElement(`p`)
      p.innerText = element.name
      li.append(p)
    }
  })
  let inp = document.createElement('input')
  inp.setAttribute('checked', '')
  inp.setAttribute('type', 'checkbox')
  inp.setAttribute('name', ' ')
  inp.setAttribute('id', ' ')
  li.append(inp)
  let span = document.createElement('span')
  span.innerText = `X`
  li.append(span)
  return ul
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
