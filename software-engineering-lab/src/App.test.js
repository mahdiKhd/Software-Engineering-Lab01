import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Todo App Integration', () => {
  test('can add a new todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/todo/i);
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('can complete a todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/todo/i);
    fireEvent.change(input, { target: { value: 'Complete Me' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    const toggleBtn = screen.getByLabelText(/completed/i);
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveClass('completed');
  });

  test('can delete a todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/todo/i);
    fireEvent.change(input, { target: { value: 'Delete Me' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    const deleteBtn = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteBtn);
    expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
  });

  test('can filter todos', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/todo/i);
    fireEvent.change(input, { target: { value: 'Active Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    const completeBtn = screen.getByLabelText(/completed/i);
    fireEvent.click(completeBtn);
    const completedFilter = screen.getByText(/completed/i);
    fireEvent.click(completedFilter);
    expect(screen.getByText('Active Todo')).toBeInTheDocument();
  });

  test('can undo and redo actions', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/todo/i);
    fireEvent.change(input, { target: { value: 'Undo Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    const deleteBtn = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteBtn);
    const undoBtn = screen.getByLabelText(/undo/i);
    fireEvent.click(undoBtn);
    expect(screen.getByText('Undo Todo')).toBeInTheDocument();
    const redoBtn = screen.getByLabelText(/redo/i);
    fireEvent.click(redoBtn);
    expect(screen.queryByText('Undo Todo')).not.toBeInTheDocument();
  });
});
