/**
 * @file DisplayPathStatsDialog container module
 * @author Thangamani Ramasamy <thangamani.r@gmail.com>
 * @created 16.10.19
 */

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormLabel } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = {
  minWidthEditor: {
    minWidth: 600
  }
};

class DisplayPathStatsDialog extends React.PureComponent {
  static propTypes = {
    pathsInfo: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    onCommit: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,    
    taskId: PropTypes.string
  };

  state = {    
  };

  onChange = name => e =>
    this.setState({
      
    });

  render() {
    const { onClose, onCommit, open } = this.props;
    const stateSolution = this.state.solution;
    
    return (
      <Dialog onClose={onClose} open={open} maxWidth='sm' fullWidth='true'>
        <DialogTitle>PathStats</DialogTitle>
        <DialogContent>
        <FormLabel component="legend">In progress..</FormLabel>
              <FormHelperText>
                
                Path Statistics are being generated in the background and will be displayed 
                in the "Created Tabs" screen in a few minutes.
              </FormHelperText>
            
         
         
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={onClose}>
            Close
          </Button>          
        </DialogActions>
      </Dialog>
    );
  }
}

export default DisplayPathStatsDialog;
