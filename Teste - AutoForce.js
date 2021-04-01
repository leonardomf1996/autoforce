/* 
https://github.com/autoforce/front-end-challenge-suporte
   1. Adicione um ícone para Youtube no header apontando para 
   https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ
*/

let networkList = document.getElementsByClassName('header__networks-list') // captura a div das redes sociais

let link = document.createElement('a'); // cria um elemento <a>
link.href = 'https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ'; // adiciona a propriedade href ao elemento <a>

networkList = insertAdjacentHTML('beforeend', link); // insere o elemento criado no final da div das redes sociais

/* 
   2. Modifique o comportamento do menu Whatsapp
*/

let phones = document.querySelectorAll('.list--header-phones li'); // captura os elementos <li>, que são cada número para whatsapp

for (let i = 0; i < phones.length; i++) { // percorre os elementos <li>
   let number = document.getElementsByClassName('header-mobile__whatsapp-number').value; // captura o valor do número do whatsapp do elemento <li> atual
   let link = document.createElement('a'); // cria um elemento <a>
   link.href = `https://wa.me/${number}`; // adiciona a propriedade href ao elemento <a>
   phones[i].appendChild(link); // adicionar o elemento <a> no elemento <li> atual
}

/* 
   3. Modifique o formulário de "Estou Interessado" em https://testes.autoforce.com.br/autoforce-ford/novos/territory
*/

// Cria elemento <div>, <input> e <label>. Insere os dois ultimos dentro da <div>
let div1 = document.createElement('div');
let input1 = document.createElement('input');
input1.type = 'checkbox';
input1.name = 'SUV';
let label1 = document.createElement('');
label1.for='SUV';
label1.innerHTML = 'SUV';
div1.appendChild(input1);
div1.appendChild(label1);

// Cria elemento <div>, <input> e <label>. Insere os dois ultimos dentro da <div>
let div2 = document.createElement('div');
let input2 = document.createElement('input');
input2.type = 'checkbox';
input2.name = 'Senda';
let label2 = document.createElement('');
label2.for='Senda';
label2.innerHTML = 'Senda';
div2.appendChild(input2);
div2.appendChild(label2);

// Cria elemento <div>, <input> e <label>. Insere os dois ultimos dentro da <div>
let div3 = document.createElement('div');
let input3 = document.createElement('input');
input3.type = 'checkbox';
input3.name = 'Hacth';
let label3 = document.createElement('');
label3.for='Hatch';
label3.innerHTML = 'Hatch';
div3.appendChild(input3);
div3.appendChild(label3);

// Cria elemento <div>, <input> e <label>. Insere os dois ultimos dentro da <div>
let div4 = document.createElement('div');
let input4 = document.createElement('input');
input4.type = 'checkbox';
input4.name = 'Pickup';
let label4 = document.createElement('');
label4.for='Pickup';
label4.innerHTML = 'Pickup';
div4.appendChild(input4);
div4.appendChild(label4);

// Cria elemento <div> e insere todos as divs anteriores 
let checkbox = document.createElement('div');
checkbox.appendChild(div1);
checkbox.appendChild(div2);
checkbox.appendChild(div3);
checkbox.appendChild(div4);

// Cria elemento <textarea>
let textArea = document.createElement('textarea');
textArea.placeholder = 'Mensagem';

// Cria elemento <div> para exibir a img. Não entendi se era pra exibir desse jeito ou após clicar no botão 'Estou interessado'
let divTime = document.createElement('div');
divTime.style.width = '150px';
divTime.style.height = '150px';
divTime.style.background-image = 'url(https://i.pinimg.com/236x/dd/da/5d/ddda5d58007a7853267a06ef8afe901d.jpg)';

// Adicionar todos os elementos criados no formulário
let form = document.getElementsByClassName('form-conversion__body');
form.appendChild(checkbox);
form.appendChild(textArea);
form.appendChild(divTime);