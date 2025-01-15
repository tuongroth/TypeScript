// routes/patientRoutes.ts
import { OccupationalHealthcareEntry, HospitalEntry } from './entryTypes';

app.get('/patients/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }

  res.json(patient);
});
