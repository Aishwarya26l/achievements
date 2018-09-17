/**
 * Shared PropTypes info
 */

import {
  arrayOf,
  bool,
  func,
  number,
  object,
  oneOf,
  shape,
  string
} from "prop-types";
import { ASSIGNMENTS_TYPES } from "../services/courses";

// A problem could have other fields depending on its type
export const activity = shape({
  description: string,
  id: string,
  name: string,
  orderIndex: number,
  owner: string,
  path: string,
  solved: bool,
  type: string
});

export const pathActivities = shape({
  path: shape({
    id: string,
    name: string,
    owner: string,
    totalActivities: number
  }),
  activities: arrayOf(activity).isRequired
});

export const breadcrumbAction = shape({
  label: string.isRequired,
  handler: func.isRequired
});

export const breadcrumbPath = shape({
  label: string.isRequired,
  link: string
});

/**
 * Common PropType for any thing with `id` and `name` fields
 */
export const entityInfo = shape({
  id: string.isRequired,
  name: string.isRequired
});

export const teamFormationInfo = shape({
  assignmentId: string.isRequired,
  name: string.isRequired
});

export const assignmentInfo = shape({
  id: string.isRequired,
  name: string.isRequired,
  solutionVisible: bool.isRequired,
  deadline: string.isRequired,
  details: string,
  open: string.isRequired,
  orderIndex: number.isRequired,
  visible: bool.isRequired,
  // Temporary solution to keep old PathProblem type
  questionType: oneOf([...Object.keys(ASSIGNMENTS_TYPES), "PathProblem"]),

  // CodeCombat only
  level: string,

  // CodeCombatNumber only
  number: number,

  // PathActivity related only
  path: string,
  problem: string
});

export const courseInfo = shape({
  id: string.isRequired,
  description: string,
  name: string.isRequired,
  owner: string.isRequired,
  members: object.isRequired,
  totalAssignments: number.isRequired,
  assignments: arrayOf(assignmentInfo).isRequired
});

export const recommendationInfo = shape({
  feature: string.isRequired,
  featureType: string.isRequired
});

export const cohort = shape({
  name: string.isRequired,
  description: string.isRequired,
  threshold: number,
  paths: arrayOf(string)
});
