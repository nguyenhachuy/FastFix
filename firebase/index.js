// For firebase
const express = require('express');
const app = express();
const firebase = require('firebase');
const googleStorage = require('@google-cloud/storage');
const Multer = require('multer');

const storage = googleStorage({
  projectId: "test-7c958"
});

const bucket = storage.bucket("test-7c958.appspot.com");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 
  }
});

app.listen(3002, () => {
  console.log('App listening to port 3000');
});

// Uploading to Storage
app.post('/upload', multer.single('file'), (req, res) => {
  console.log('Upload Image');

  let file = req.file;
  if (file) {
    uploadImageToStorage(file).then((success) => {
      res.status(200).send({
        status: 'success'
      });
    }).catch((error) => {
      console.error(error);
    });
  }
});

const uploadImageToStorage = (file) => {
  let prom = new Promise((resolve, reject) => {
    if (!file) {
      reject('No image file');
    }
    let newFileName = `${file.originalname}_${Date.now()}`;

    let fileUpload = bucket.file(newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    blobStream.on('error', (error) => {
      reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
      resolve(url);
    });

    blobStream.end(file.buffer);
  });
  return prom;
}


module.exports = router;