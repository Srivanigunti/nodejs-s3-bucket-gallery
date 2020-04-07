var fs = require('fs');
var AWS = require('aws-sdk');
const Bucket = "srivanigallery";
const localImage = "./kitty.jpg";
const imageRemoteName = 'kittyImage_${new Date().getTime()}.png'

AWS.config.update({
    Bucket: "srivanigallery",
    region: "us-east-1",
    secretAccessKey:"LSJ8eB1gT0y3qs5+5MI+u/1bfEvzf+MwxCplKW2s",
    accessKeyId:"AKIAQ7VDMW5NJ25XTSVU"
});
var s3 = new AWS.S3();
s3 = new AWS.S3({apiVersion:'2006-03-01'});

s3.putObject({
    Bucket: "srivanigallery",
    Body: fs.readFileSync(localImage),
    Key: "kitty.jpg"
  })
    .promise()
    .then(response => {
      console.log(`done! - `, response)
      /*console.log(
        `The URL is ${s3.getSignedUrl('getObject', { Bucket: "srivanigallery", Key: imageRemoteName })}`
      )*/
    })
    .catch(err => {
        console.log('failed:', err);
    });
