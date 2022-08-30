import app from './app';
import con from './db';
const port = app.get('port');

app.listen(port, () => {
    console.log(`Server running on port ${app.get('port')}`);
})

