const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const list_el = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    //menegecek jika isisan masih kosong
    if(!task) {
        alert("Masukkan tugas terlebih dahulu");
        return;
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    //cuat elemen input
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("action");

    //buat elemen tombol edit dan delete
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add("edit");
    task_edit_el.textContent = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add("delete")
    task_delete_el.textContent = 'Delete';

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    //memebersihkan inputan
    input.value = '';


    //event pada tombol edit dan delete

    //event jika tomblo edit di klik
    task_edit_el.addEventListener('click', () => {
        //console.log(task_edit_el.innerText.tolowerCase());
        if(task_edit_el.innerText.toLowerCase() == 'edit') {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = 'Simpan';
        } else {
            task_input_el.setAttribute('readonly', 'readonly');
            task_edit_el.innerText = 'edit';
        }
    });

    //event jika tombol delete di klik
    task_delete_el.addEventListener('click', () => {
        list_el.removeChild(task_el);
    })
})