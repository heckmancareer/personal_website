export interface SkillEmblemGroup {
  groupName: string,
  groupSkills: SkillEmblem[]
}
export interface SkillEmblem {
  imagePath: string,
  imageLabel: string
}

export interface EmployerInfo {
  logoPath: string,
  employerName: string,
  employerDescription: string,
  startDate: string,
  endDate: string,
  jobTitle: string,
  summaryBullets: string[],
  primarySkills: SkillEmblem[]
}

export interface CertificationInfo {
  logoPath: string,
  certName: string,
  dateAcquired: string,
  certDescription: string,
  certEvidencePath: string,
  vendorLink: string
}