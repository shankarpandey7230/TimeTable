// alert('shgkas');

let taskList = [];
const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  const formData = new FormData(e);
  //   console.log(formData);
  const task = formData.get('task');

  const hr = formData.get('hr');
  console.log(task, hr);
  const obj = {
    task,
    hr,
    id: randomId(),
  };
  taskList.push(obj);
  displayEntryList();

  console.log(taskList);
};

const displayEntryList = () => {
  //   console.log(taskList);
  let str = '';
  const entryElm = document.getElementById('entryList');
  //   console.log(entryElm);
  taskList.map((item, i) => {
    str += `  <tr>
    <th scope="row">${i + 1}</th>
    <td>${item.task}</td>
    <td>${item.hr}</td>
    <td class="text-end">
      <button onclick = 'handleDelete("${
        item.id
      }")' type="button" class="btn btn-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button type="button" class="btn btn-success">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </td>
  </tr>`;
  });
  entryElm.innerHTML = str;
};

const randomId = (length = 6) => {
  const str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  let id = '';
  for (let i = 0; i < 6; i++) {
    const randmIndex = Math.floor(Math.random() * str.length);
    id += str[randmIndex];
  }
  return id;
};

const handleDelete = (id) => {
  //   console.log(id);
  if (window.confirm('Are you sure to delete?')) {
    taskList = taskList.filter((items) => items.id !== id);
    console.log(taskList);
    displayEntryList();
  }
};
