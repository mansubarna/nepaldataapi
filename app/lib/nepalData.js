import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'alldata.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

export default data;
