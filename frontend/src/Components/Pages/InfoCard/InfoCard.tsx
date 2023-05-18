import "./InfoCard.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { prettyStartDate, prettyEndDate } from '../../Layout/Main/Main';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

interface VacationProps{
    vacDestination:string;
    vacDescription:string;
    vacStartDate:string;
    vacEndDate:string;
    vacPrice:number;
    // vacImage:string;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function InfoCard(props:VacationProps): JSX.Element {
    return (
        <div className="InfoCard">
			<Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
      {props.vacDestination}
      </Typography>
      <Typography level="body2">{prettyStartDate(props.vacStartDate)} till 
            {prettyEndDate(props.vacEndDate)}<br/></Typography>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error"
        size="medium"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }} />
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
          <Typography level="body3">{props.vacDescription}</Typography>
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
          Explore
        </Button>
      </Box>
    </Card>
        </div>
    );
}

export default InfoCard;
