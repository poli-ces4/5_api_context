import { Typography, Grid } from '@mui/material';
import useArticles from '../hooks/useArticles';
import Article from './Article';
const Articles = () => {
	const { articles } = useArticles();
	return (
		<>
			<Typography variant='h2' align='center' marginY={5}>
				List Articles
			</Typography>
			<Grid container spacing={2}>
				{articles.map(article => (
					<Article key={article.publishedAt} article={article} />
				))}
			</Grid>
		</>
	);
};

export default Articles;
