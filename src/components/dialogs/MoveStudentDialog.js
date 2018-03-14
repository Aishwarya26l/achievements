/**
 * @file MoveStudentDialog container module
 * @author Theodor Shaytanov <theodor.shaytanov@gmail.com>
 * @created 14.03.18
 */

import React from "react";
import PropTypes from "prop-types";

import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog/index";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
import {
  assignmentCloseDialog,
  courseMoveStudentRequest
} from "../../containers/Assignments/actions";

class MoveStudentDialog extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    courseId: PropTypes.string.isRequired,
    courses: PropTypes.array.isRequired,
    studentName: PropTypes.string,
    studentId: PropTypes.string
  };

  state = {
    targetCourse: ""
  };

  onCourseSelect = e => this.setState({ targetCourse: e.target.value });
  onClose = () => {
    this.props.dispatch(assignmentCloseDialog());
    this.setState({ targetCourse: "" });
  };
  onCommit = () =>
    this.props.dispatch(
      courseMoveStudentRequest(
        this.props.courseId,
        this.state.targetCourse,
        this.props.studentId
      )
    );

  render() {
    const { courseId, courses, open } = this.props;

    return (
      <Dialog onClose={this.onClose} open={open}>
        <DialogTitle>Move Student</DialogTitle>
        <DialogContent
          style={{
            minWidth: 320
          }}
        >
          <TextField
            fullWidth
            label="Course"
            onChange={this.onCourseSelect}
            select
            value={this.state.targetCourse}
          >
            {courses.filter(course => course.id !== courseId).map(course => (
              <MenuItem key={course.id} value={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={this.onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.onCommit} variant="raised">
            Commit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default MoveStudentDialog;
