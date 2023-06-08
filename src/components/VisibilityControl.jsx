export function VisibilityControl({ isChecked, setShowCompleted, cleanTasks }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="showTask"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label htmlFor="showTask">Show Task Done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
}
