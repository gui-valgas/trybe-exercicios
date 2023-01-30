export const PERSONAL_INFO = 'PERSONAL_INFO';
export const PROFISSIONAL_INFO = 'PROFISSIONAL_INFO';

export const personalInfo = (addPersonal) => ({
  type: PERSONAL_INFO,
  payload: {
    ...addPersonal,
  },
});

export const professionalInfo = (addProfissional) => ({
  type: PROFISSIONAL_INFO,
  payload: {
    ...addProfissional,
  },
});
