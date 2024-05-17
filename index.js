// alert('shgkas');

let taskList = [];
const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  const formData = new FormData(e);
  //   console.log(formData);
  const task = formData.get('task');

  const hr = formData.get('hr');
  //   console.log(task, hr);
  const obj = {
    task,
    hr,
    id: randomId(),
    type: 'entry',
  };
  taskList.push(obj);
  displayEntryList();

  console.log(taskList);
};

const displayEntryList = () => {
  let str = '';
  console.log(taskList);
  const entryElm = document.getElementById('entryList');
  //   console.log(entryElm);
  const entryList = taskList.filter((item) => item.type === 'entry');
  entryList.map((item, i) => {
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
      <button onclick = "switchTask('${
        item.id
      }','bad')" type="button" class="btn btn-success">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </td>
  </tr>`;
  });
  entryElm.innerHTML = str;
};
const displayBadList = () => {
  let str = '';
  console.log(taskList);
  const badElm = document.getElementById('badList');
  //   console.log(entryElm);
  const badList = taskList.filter((item) => item.type === 'bad');
  badList.map((item, i) => {
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
      <button onclick = "switchTask('${
        item.id
      }','entry')" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    </td>
  </tr>`;
  });
  badElm.innerHTML = str;
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
    // console.log(taskList);
    displayEntryList();
    displayBadList();
  }
};

const switchTask = (id, type) => {
  //   console.log(id, type);
  taskList = taskList.map((item) => {
    // console.log(item);
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });
  displayEntryList();
  displayBadList();
};
