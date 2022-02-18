import './style.css';
import './modules/dependencies.js';
import toDoList from './modules/data.js';
import icons from './modules/icons.js';

const insertPoint = document.querySelector('.to-do-container');
const addListItem = document.getElementById('input');
const submitButton = document.querySelector('.submit');

const insertlist = () => {
  toDoList.list.forEach((e) => {
    const icon = () => {
      if (e.completed) {
        return icons.doneIcon.icon;
      }
      return icons.undoneIcon;
    };
    const linethrough = () => {
      if (e.completed) {
        return icons.doneIcon.linethrough;
      } else return null;
    };
    const listItem = `<li
    class="padding-lr to-do-item display-flex-row height-50 border-bottom"
  >
    <div class="width-height display-flex-row width-80" id="${e.index}">
      <button type="button" class="check" >
        <i class="${icon()}"></i>
      </button>
      <input
        class="display-flex-row width-height ${linethrough()}"
        type="text"
        value="${e.description}"
      />
    </div>
    <button type="button" class="to-do-button-move">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
  </li>`;
    insertPoint.innerHTML += listItem;
  });

  console.log(toDoList.list);
};

insertlist();

submitButton.onclick = console.log('I am clicked')
