// ################## Handling Curl File  Start ################
function curlget(str,cb){
var fs = require('fs')
fs.readFile('curl.sh', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
   // ****************  manipulate curl file
      var result = data.slice(0,-9);
      result += str;
      result +='&col="';



  fs.writeFile('curl.sh', result, 'utf8', function (err) {
     if (err) return console.log(err);

   // ********* run manipulated curl file

	runcurl(cb)


	
  });
});

}



// ################## Handling Curl file End ################

// ################## spawn Curl File  Start ################

function runcurl(cb){
var spawn = require('child_process').spawn;
var   ps    = spawn('curl.sh');
    
var data='';
ps.stdout.on('data', function (d) {
 data+=d  

});

ps.stdout.on('close', function () {
  
 //************** output handale

var obj = JSON.parse(data.split('\r\n\r\n')[1])
  cb(null,obj)
});



}


// ################## spawn Curl File  end ################

curlget('roy',function (e,d){
console.log(d)
console.log(d)

})
