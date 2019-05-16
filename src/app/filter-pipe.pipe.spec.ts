import { FilterPipePipe } from './filter-pipe.pipe';

describe('FilterPipePipe', () => {
  let filterPipe: FilterPipePipe;

  beforeAll(() => {
    filterPipe = new FilterPipePipe();
  });

  it('create an instance', () => {
    expect(filterPipe).toBeTruthy();
  });


  it('return an empty array', () => {
    const employees: any[] = [
      { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 1000, dateOfBirth: '1/25/1981' },
      { id: 'emp2', name: 'Dave', gender: 'Male', annualSalary: 2000, dateOfBirth: '25/1/1982' },
      { id: 'emp3', name: 'Vanessa', gender: 'Female', annualSalary: 3000, dateOfBirth: '2/26/1983' },
      { id: 'emp4', name: 'Jelena', gender: 'Female', annualSalary: 4000, dateOfBirth: '3/26/1984' },
      { id: 'emp5', name: 'Rimvydas', gender: 'Male', annualSalary: 5000, dateOfBirth: '27/4/1985' },
    ];

    expect(filterPipe.transform(employees, 5001)).toEqual([]);
  });

  it('return an array of length 3', () => {
    const employees: any[] = [
      { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 1000, dateOfBirth: '1/25/1981' },
      { id: 'emp2', name: 'Dave', gender: 'Male', annualSalary: 2000, dateOfBirth: '25/1/1982' },
      { id: 'emp3', name: 'Vanessa', gender: 'Female', annualSalary: 3000, dateOfBirth: '2/26/1983' },
      { id: 'emp4', name: 'Jelena', gender: 'Female', annualSalary: 4000, dateOfBirth: '3/26/1984' },
      { id: 'emp5', name: 'Rimvydas', gender: 'Male', annualSalary: 5000, dateOfBirth: '27/4/1985' },
    ];

    expect(filterPipe.transform(employees, 2500).length).toEqual(3);
  });
});
