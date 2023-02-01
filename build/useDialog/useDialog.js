import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({ params, handleConfirm, handleExit }) {
    const { dialogHeader, dialogText, confirmBtt, rejectBtt } = params;
    console.log(params);
    return (
      <Dialog
        open
        onClose={handleExit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} autoFocus>
            {confirmBtt}
          </Button>
          <Button onClick={handleExit} autoFocus>
            {rejectBtt}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  
export default function useDialog() {
    const [state, setState] = useState(null);
  
    // funzione di Rendering componente
    const renderDialog = () => {
      return (
        <>
          {state !== null && (
            <AlertDialog
              params={state.params}
              handleConfirm={() => {
                state.confirm();
                setState(null);
              }}
              handleExit={() => {
                state.reject();
                setState(null);
              }}
            />
          )}
        </>
      );
    };
  
    // funzione di Interrogazione
    const setDialog = (params, confirm, reject) => {
      setState({ params: params, confirm: confirm, reject: reject });
    };
  
    // onMount / unMount
    React.useEffect(() => {
      return () => {
        // unmount
      };
    }, []);
    return [renderDialog, setDialog];
  }
  