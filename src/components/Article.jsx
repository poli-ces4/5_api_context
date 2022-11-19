import { Grid, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Article = ({ article }) => {
	const { urlToImage, title, description, url } = article;
	console.log(urlToImage);
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card>
				<CardMedia
					component='img'
					height='250'
					image={urlToImage}
					alt={`imagen ${title}`}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Link
						href={url}
						target='_blank'
						variant='button'
						textAlign='center'
						width='100%'
					>
						Read more...
					</Link>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Article;
