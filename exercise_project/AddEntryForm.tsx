// AddEntryForm.tsx
const AddEntryForm: React.FC<{ onSubmit: (entry: Entry) => void }> = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('HealthCheck');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ description, date, type });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  