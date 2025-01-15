export const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;

  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi <= 24.9) return 'Normal range';
  if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
  return 'Obese';
};

if (require.main === module) {
  const height = Number(process.argv[2]);
  const weight = Number(process.argv[3]);

  if (!isNaN(height) && !isNaN(weight)) {
    console.log(calculateBmi(height, weight));
  } else {
    console.log('Please provide valid height and weight as numbers.');
  }
}
