import { ArticlesProvider } from './context/ArticlesProvider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormCategory from './components/FormCategory';
import Articles from './components/Articles';

const App = () => {
	return (
		<ArticlesProvider>
			<Container>
				<header>
					<Typography variant='h3' align='center' marginY={5}>
						Search News APIS
					</Typography>
					<Grid
						container
						direction='row'
						justifyItems='center'
						alignItems='center'
					>
						<Grid item xs={12} md={6} lg={4}>
							<FormCategory />
						</Grid>
					</Grid>
					<Articles />
				</header>
			</Container>
		</ArticlesProvider>
	);
};

export default App;
