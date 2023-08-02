// src/ToDoList.js
import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Checkbox, IconButton, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  background: 'black',
  color: '#0ff',
  fontFamily: 'monospace',
  width: '100%',
  height: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const ContentContainer = styled('div')({
  width: '100%',
  maxWidth: '400px',
});

const StyledBar = styled('div')({
  background: '#0ff',
  width: '10px',
  height: '100%',
  position: 'absolute',
});

const StyledTextField = styled(TextField)({
  color: '#0ff',
  width: '100%',
  margin: '10px 0',
  '& .MuiInputBase-input': {
    color: '#0ff',
  },
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #0ff 30%, #0ff 90%)',
  color: 'black',
  width: '100%',
  margin: '10px 0',
});

const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid #0ff',
});

const StyledDeleteIcon = styled(DeleteIcon)({
  color: '#0ff',
});

const StyledCheckIcon = styled(CheckIcon)({
  color: '#0ff',
});

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleRemoveCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  return (
    <StyledContainer>
      <StyledBar style={{ left: 0 }} />
      <StyledBar style={{ right: 0 }} />
      <h1>Todo List</h1>
      <ContentContainer>
        <form onSubmit={handleAddTask}>
          <StyledTextField
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            variant="outlined"
          />
          <StyledButton type="submit">Add Task</StyledButton>
        </form>
        <List>
          {tasks.map((task, index) => (
            <StyledListItem key={index}>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
              />
              <ListItemText
                primary={task.text}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />
              <IconButton onClick={() => handleToggleTask(index)}>
                <StyledCheckIcon /> {/* Erledigt-Symbol */}
              </IconButton>
              <IconButton onClick={() => handleRemoveTask(index)}>
                <StyledDeleteIcon />
              </IconButton>
            </StyledListItem>
          ))}
        </List>
        <StyledButton onClick={handleRemoveCompletedTasks}>Remove Completed Tasks</StyledButton>
      </ContentContainer>
    </StyledContainer>
  );
}
