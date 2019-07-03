var multer=require('multer');
//var multer=multer({dest:'./public/dynamic/post'});
var storage=multer.diskStorage({
    destination:(req,file,cb)=>
    {
       cb(null,'./public/dynamic/post');}
        ,
    filename:(req,file,cb)=>
    {
        cb(null, file.fieldname + '-' + Date.now()+'-'+file.originalname);
    }
});
var upload=multer({storage:storage});

module.exports=upload;
