var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1",
    secretAccessKey:"",
    accessKeyId:""
});

var params = {
    Bucket: "srivaniPhotosAndVideosGallery"
   };
   s3 = new AWS.S3({apiVersion:'2006-03-01'});
   s3.createBucket(params, function(err, data) {
     if(err){
         console.log(err, err.stack);
     } else {
        console.log(data);
     }    
   });