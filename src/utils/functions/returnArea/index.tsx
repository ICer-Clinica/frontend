export enum ProcedureArea {
  OCCUPATIONAL_THERAPY = "OCCUPATIONAL_THERAPY",
  PSYCHOLOGY = "PSYCHOLOGY",
  PHYSIOTHERAPY = "PHYSIOTHERAPY",
  PHONOAUDIOLOGY = "PHONOAUDIOLOGY",
}

export default function returnArea(area: string) {
  switch (area) {
    case ProcedureArea.PSYCHOLOGY:
      return "PSICOLOGIA";
    case ProcedureArea.OCCUPATIONAL_THERAPY:
      return "TERAPIA OCUPACIONAL";
    case ProcedureArea.PHONOAUDIOLOGY:
      return "FONOAUDIOLOGIA";
    case ProcedureArea.PHYSIOTHERAPY:
      return "FISIOTERAPIA";
  }
}
