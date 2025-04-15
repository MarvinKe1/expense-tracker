export default function ExpenseItem({ expense, onDelete }) {
    return (
      <tr>
        <td>{expense.description}</td>
        <td>${expense.amount.toFixed(2)}</td>
        <td>{expense.category}</td>
        <td>
          <button 
            onClick={() => onDelete(expense.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }