var express = require('express')
var multer = require('multer')
var mongoose = require('mongoose')
var path = require('path')
var bodyParser = require('body-parser')
var csv = require('csvtojson')
var EmpSchema = require('./models/EmpModel')
const app = express();
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {

    cb(null, file.originalname)
  },
})
// var uploads = multer({ storage: storage })
const upload = multer({ dest: 'uploads/' })

mongoose
  .connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true })
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err))
// app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.get('/', (req, res) => {
  EmpSchema.find((err, data) => {
    if (err) {
    } else {
      if (data != '') {
        res.render('index', { data: data })
      } else {
        res.render('index', { data: '' })
      }
    }
  })
})

app.post('/upload', upload.single('csvFile'), (req, res) => {
  csv()
    .fromFile(req?.file?.path)
    .then(async (res1) => {
      const response = res1.filter(r => {
        if (r.eamil !== "") return r;
      })

      const data = await new Promise((resolve, reject) => {
        let duplication = 0;
        let insert = 0;
        response.map(async (emp, index) => {
          if (emp.email !== '') {
            const emp1 = await EmpSchema.find({Email: emp.email})
            if (!emp1.length) {
              const newEmp = new EmpSchema({
                FirstName: emp?.firstName,
                LastName: emp?.lastName,
                Email: emp?.email,
                PhoneNumber: emp?.phoneno
            })
            const savedTask = await newEmp.save()
            insert = insert + 1;
            } else {
              duplication = duplication + 1;
            }

            if (response.length === (index +1)) {
              resolve({
                duplication,
                insert,
              });
            }
          }
        })

      });

      res.status(200).json({
        message: 'Data imported',
        total: response.length,
        ...data
      })
    })
})
var port = process.env.PORT || 5555
app.listen(port, () => console.log('App connected on: ' + port))