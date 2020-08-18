import React from "react";
import "./Add.module.css";

const Add = () => {
  return (
    <div class="addbody">
      <div id="container"></div>
      <h1 class="title">My Long-Term Goal</h1>

      <div class="all-short-goals">
        <h2 class="goal-list-title">Buy a House</h2>
        <ul class="goal-list">
          <li class="list-name active-list">Save Money</li>
          <li class="list-name">Work</li>
          <li class="list-name">Credit Scores</li>
        </ul>

        <from action="">
          <input
            type="text"
            class="new goal"
            placeholder="new short-term goal"
            aria-label="new short-term goal"
          />
          <button class="btn create" aria-label="make short-term goal">
            +
          </button>
        </from>
      </div>

      <div class="task-list">
        <div class="goal-header">
          <h2 class="goal-title">Save money</h2>
          <p class="task-count">3 tasks remaining</p>
        </div>

        <div class="task-body">
          <div class="tasks">
            <div class="task">
              <input type="checkbox" id="task-1" />
              <label for="task-1">
                <span class="custom-checkbox"></span>
                1st task
              </label>
            </div>

            <div class="task">
              <input type="checkbox" id="task-2" />
              <label for="task-2">
                <span class="custom-checkbox"></span>
                2nd task
              </label>
            </div>

            <div class="task">
              <input type="checkbox" id="task-3" />
              <label for="task-3">
                <span class="custom-checkbox"></span>
                3rd task
              </label>
            </div>
          </div>

          <div class="new-task-creator">
            <from action="">
              <input
                type="text"
                class="new list"
                placeholder="new task name"
                aria-label="new task name"
              />
              <button class="btn create" aria-label="create new task">
                +
              </button>
            </from>
          </div>

          <div class="delete-task">
            <button class="btn delete">Clear completed task</button>
            <button class="btn delete">Delete list</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
