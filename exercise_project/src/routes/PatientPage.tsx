// PatientPage.tsx
useEffect(() => {
    axios.get(`/api/patients/${patientId}`).then(response => {
      setPatient(response.data);
    });
  }, [patientId]);
  
  return (
    <div>
      <h2>{patient.name}</h2>
      <PatientEntries entries={patient.entries} />
    </div>
  );
  