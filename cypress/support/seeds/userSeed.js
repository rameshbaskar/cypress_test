import * as DataUtils from '../utils/dataUtils';
import {queryProfileDB} from '../utils/database';

export async function seedJobseekerProfile(data) {
  const nric = DataUtils.generateNric();
  const individualId = DataUtils.generateIndividualId();
  await seedAccountInfo(nric, individualId, data.accountInfo);
  await seedDocuments(individualId, data.documents);
  await seedQualifications(individualId, data.qualifications);
  await seedWorkExperiences(individualId, data.workExperiences);
  await seedSkills(individualId, data.skills);

  return {
    nric: nric,
    individualId: individualId
  };
}

export async function removeJobseekerProfile(individualId) {
  removeDocuments(individualId);
  removeQualifications(individualId);
  removeWorkExperiences(individualId);
  removeSkills(individualId);
  await removeAccountInfo(individualId);
}

export async function seedAccountInfo(nric, individualId, data) {
  const sql = `INSERT INTO jobseekers(
    nric,
    individual_id,
    name,
    preferred_name,
    email,
    created_by,
    created_on,
    modified_by,
    modified_on
  ) VALUES (
    '${nric}',
    '${individualId}',
    '${data.preferredName}',
    '${data.preferredName}',
    '${data.email}',
    '${individualId}',
    now(),
    '${individualId}',
    now()
  );`;
  await queryProfileDB(sql);
}

export async function seedDocuments(individualId, data) {
  if (data) {
    data.forEach((record) => {
      const sql = `INSERT INTO jobseeker_documents (
        individual_id,
        file_name,
        file_size,
        file_path,
        parsed_status,
        parsed_file_path,
        created_by,
        created_on,
        modified_by,
        modified_on
      ) VALUES (
        '${individualId}',
        '${data.fileName}',
        ${data.fileSize},
        '${data.filePath}',
        '${data.parsedStatus}',
        '${data.parsedFilePath}',
        '${individualId}',
        now(),
        '${individualId}',
        now(),
      );`;
      await queryProfileDB(sql);
    });
  }
}

export async function seedQualifications(individualId, data) {
  if (data) {

  }
}

export async function seedWorkExperiences(individualId, data) {
  if (data) {

  }
}

export async function seedSkills(individualId, data) {
  if (data) {

  }
}

export async function removeAccountInfo(individualId) {
  await queryProfileDB(`DELETE FROM jobseekers WHERE individual_id = '${individualId}';`);
}

export async function removeDocuments(individualId) {
  await queryProfileDB(`DELETE FROM jobseeker_documents WHERE individual_id = '${individualId}';`);
}

export async function removeQualifications(individualId) {
  await queryProfileDB(`DELETE FROM educational_qualifications WHERE individual_id = '${individualId}';`);
}

export async function removeWorkExperiences(individualId) {
  await queryProfileDB(`DELETE FROM work_experiences WHERE individual_id = '${individualId}';`);
}

export async function removeSkills(individualId) {
  await queryProfileDB(`DELETE FROM jobseeker_skills WHERE individual_id = '${individualId}';`);
}