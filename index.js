const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/playground')
    .then(() => console.log('Connected to Mongo Db ... ')).catch(err => console.log('Failed to connect Mongo Db', err));

const courseSchmea = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});
console.log('upto here it is working');
const Course = mongoose.model('Course', courseSchmea);
async function createCours() {
    const course = new Course({
        name: 'Angular',
        author: 'Anand',
        tags : ['angular','fromntend'],
        isPublished : true
    });
    const result = await course.save();
    console.log(result);
    }
    createCours();