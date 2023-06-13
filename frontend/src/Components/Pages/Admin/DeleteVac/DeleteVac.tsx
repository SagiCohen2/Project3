import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/joy/IconButton';
import axios from 'axios';
import { mainReducer } from '../../../Redux/VacationStore';
import { deleteVacAction } from '../../../Redux/VacationReducer';


    const DeleteComponent = () => {
        const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
      
        // WHEN ADMIN PRESS THE YES BUTTON INSIDE THE DIALOG , DELETING VACATION.
        const handleDelete = (vacKey:any) => {
            mainReducer.dispatch(deleteVacAction(vacKey));
            axios
            .delete(`
            http://localhost:8080/api/v1/vacations/deleteVac/${vacKey}
            `)
          setIsDeleteDialogOpen(false);
        };
      
        const handleCancelDelete = () => {
          setIsDeleteDialogOpen(false);
        };

  return (
    <div className="DeleteVac">
    <IconButton
      onClick={() => setIsDeleteDialogOpen(true)}
      variant="plain"
      color="neutral"
      size="sm"
      sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
    >
      <DeleteOutlineOutlinedIcon />
    </IconButton>

    <Dialog open={isDeleteDialogOpen} onClose={handleCancelDelete}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this card?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelDelete} color="primary">
          Cancel
        </Button>
        <Button onClick={(event)=>handleDelete(event)} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};
function DeleteVac(): JSX.Element {
    return <DeleteComponent />;
  }

export default DeleteVac;
