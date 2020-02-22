
const { fireEvent, getByTestId, getAllByTestId } = require('@testing-library/dom');

describe('測試 todoList 功能', () => {
  afterEach(() => {
    jest.resetModules();
  })
  test('測試能否正常新增待辦事項', () => {
    // Arrange 
    document.body.innerHTML = `
      <div class="header">
        <svg class="refresh" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z">
          </path>
        </svg>
        <p class="date"></p>
      </div>
      <div class="content">
        <div class="task-status">
          <p class="all-task current">全部</p>
          <p class="doing-task">進行中</p>
          <p class="finished-task">已完成</p>
        </div>
        <div data-testid="task-list" class="task-list"></div>
      </div>
      <div data-testid="plus" class="plus">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
          </path>
        </svg>
      </div>
      <div class="input-task">
        <input type="text" placeholder="Add a to-do" data-testid="input">
      </div>
    `;
  
    const container = document.body;
    let inputTask = getByTestId(container, 'input');
    const plus = getByTestId(container, 'plus');
    require('../todo');
  
    // Act
    inputTask.value = 'First task';
    fireEvent.click(plus);

    const firstTaskContent = getByTestId(container, 'task-list').children[0].textContent;
    // const firstTaskContent = getByTestId(container, 'task-content').textContent;
    // console.log(container.innerHTML);
  
    // Jest matcher for string
    // Assert
    expect(firstTaskContent).toMatch(/First task/);
  });

  test('測試能否正常刪除待辦事項', () => {
    // Arrange 
    document.body.innerHTML = `
      <div class="header">
        <svg class="refresh" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z">
          </path>
        </svg>
        <p class="date"></p>
      </div>
      <div class="content">
        <div class="task-status">
          <p class="all-task current">全部</p>
          <p class="doing-task">進行中</p>
          <p class="finished-task">已完成</p>
        </div>
        <div data-testid="task-list" class="task-list"></div>
        <div data-testid="plus" class="plus">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
            </path>
          </svg>
        </div>
        <div class="input-task">
          <input type="text" placeholder="Add a to-do" data-testid="input">
        </div>
      </div>
    `;

    const container = document.body;
    // let inputTask = getByTestId(container, 'input');
    // const plus = getByTestId(container, 'plus');
    
    require('../todo');

    // Act
    // inputTask.value = 'First task';
    // fireEvent.click(plus);
    // 如果這麼寫就不用在主程式中寫 data-testid="delete-icon" (待確認寫法好壞)
    // document.querySelectorAll('.delete-icon').forEach(item => item.setAttribute('data-testid', 'delete-icon'));
    const deleteTask = getAllByTestId(container, 'delete-icon');
    fireEvent.click(deleteTask[0]);
    const checkTaskDelete = getByTestId(container, 'task-list').innerHTML;

    // Assert
    expect(checkTaskDelete).toBe("");  

  });
})
