// PatientEntries.tsx
const [diagnoses, setDiagnoses] = useState<Record<string, string>>({});

useEffect(() => {
  axios.get('/api/diagnoses').then(response => {
    const diagnosisMap = response.data.reduce((acc: any, diag: any) => {
      acc[diag.code] = diag.name;
      return acc;
    }, {});
    setDiagnoses(diagnosisMap);
  });
}, []);

return (
  <div>
    {entries.map(entry => (
      <div key={entry.date}>
        <p>{entry.date}</p>
        <p>{entry.description}</p>
        <ul>
          {entry.diagnosisCodes?.map(code => (
            <li key={code}>{diagnoses[code]}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
