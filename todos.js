// References
const addForm = document.querySelector('.add');
const ulList = document.querySelector('.todos');
const liTag = document.querySelector('li');
const search = document.querySelector('.search input');

// Adding
const generateTemplate = todo => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`

    ulList.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// Removing
ulList.addEventListener('click', (e)=> {
     if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
     }
});

const fillterTodos = (term)=> {

    Array.from(ulList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo=> todo.classList.add('filtered'));

    Array.from(ulList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo=> todo.classList.remove('filtered'));
        

};

// filtering
search.addEventListener('keyup', ()=> {
    const term = search.value.trim().toLowerCase();
    fillterTodos(term);
});

