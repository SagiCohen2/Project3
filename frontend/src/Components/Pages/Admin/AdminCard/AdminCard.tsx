import "./AdminCard.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { prettyStartDate, prettyEndDate } from '../../../Layout/Main/Main';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteVac from "../DeleteVac/DeleteVac";

interface VacationProps{
    vacDestination:string;
    vacDescription:string;
    vacStartDate:string;
    vacEndDate:string;
    vacPrice:number;
    // vacImage:string;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AdminCard(props:VacationProps): JSX.Element {
    return (
        <div className="AdminCard">
			<Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
      {props.vacDestination}
      </Typography>
      <Typography level="body2">
            {props.vacDescription}<br/></Typography>
            {/* ANOTHER COMPONENT FOR DELETE CARD */}
            <DeleteVac/> 
          <IconButton variant="plain" color="neutral" size="sm" sx={{ position: 'absolute', top: '0.5rem', right: '2.2rem' }}>
            <EditOutlinedIcon />
          </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">{prettyStartDate(props.vacStartDate)} till 
            {prettyEndDate(props.vacEndDate)}<br/></Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${props.vacPrice}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Add
        </Button>
      </Box>
    </Card>
        </div>
    );
}

export default AdminCard;
