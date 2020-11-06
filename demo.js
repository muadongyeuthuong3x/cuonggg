 const request = require('request-promise');
const fs = require('fs');





(async ()=>{
	let options = {
		url:'http://runecom06.runtime.vn/',
		method:'GET',
		headers:{
		    'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.72'
		},
		rejectUnauthorized:false
	};
	//await la hàm thực hiện khi mà options
	let response = await request(options);
    //console.log(response);
    let y = fs.writeFileSync('./test20.html',response);
})();



//  async function cuong(){
// 	let options = {
// 		url:'https://themes.sapo.vn/demo/evo-fashion',
// 		method:'GET',
// 		headers:{
// 		    'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.72'
// 		},
// 		rejectUnauthorized:false
// 	};

// 	let reponse = await request(options);
// 	console.log(reponse)
// }

// cuong();



// const craw = require('craw');
 
// async function start () {
//   const result = await craw("http://preview.hasthemes.com/boloba-preview/boloba/shop.html");
//   console.log(result.toJSON());
// }
 
// start();
