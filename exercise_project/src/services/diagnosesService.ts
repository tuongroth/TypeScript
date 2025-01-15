// src/services/diagnosesService.ts
import diagnoses from '../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
