import express from 'express';
import logger from './middleware/logger.js';
import idValidator from './middleware/idValidator.js';
import dataValidator from './middleware/dataValidator.js';
import championsRoutes from './routes/champions.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());

app.use('/api/champions', championsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;