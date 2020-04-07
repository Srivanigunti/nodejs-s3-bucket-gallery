var AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-1",
    secretAccessKey:"LSJ8eB1gT0y3qs5+5MI+u/1bfEvzf+MwxCplKW2s",
    accessKeyId:"AKIAQ7VDMW5NJ25XTSVU"
});

var params = {
    Bucket: "srivanigallery"
   };
   s3 = new AWS.S3({apiVersion:'2006-03-01'});
   s3.createBucket(params, function(err, data) {
     if(err){
         console.log(err, err.stack); // an error occurred
     } else {
        console.log(data); // successfully created
     }    
   });