// const WebSocket =    require('ws');
// var ws = new WebSocket('ws://192.168.0.37:8080/');
// ws.onmessage = function(event) {
//    console.log('Count is: ' + event.data);
//  };
// var webs = WebSocket.Server; 

// // const wss = WebSocket.Server({ port: 8080 });


// wss.on('connection', function connection(ws) {
//    ws.on('message', function incoming(message) {
//       console.log('received: %s', message);
//    });

//    ws.send('something');
// });

// alert("Получилось?")


// alert("Получилось?");




// <!-- <script type='text/javascript'> -->
/* <script language="javascript" type="text/javascript"> */
   let url = "ws://192.168.0.37:8080";
   // websocket = new WebSocket(url);
   // init();
   
      // // Host we are connecting to
      // var host = "localhost"; 
      // // Port we are connecting on
      // var port = 49100;
  
      // var socket = new jSocket();
  
      // // When the socket is added the to document 
      // socket.onReady = function(){
      //    socket.connect(host, port);             
      //    // socket.connect(url);             
      // }
  
      // // Connection attempt finished
      // socket.onConnect = function(success, msg){
      //         if(success){
      //                 // Send something to the socket
      //                 socket.write('Hello world');            
      //         }else{
      //                 alert('Connection to the server could not be estabilished: ' + msg);            
      //         }       
      // }
      // socket.onData = function(data){
      //         alert('Received from socket: '+data);   
      // }
  
      // Setup our socket in the div with the id="socket"
      // socket.setup('mySocket');
      // socket.connect(url);    
      function  jsalert() {

         alert(" пи пишы ")
      }
      
   // websocket.connect();
   function count_rabbits() {
      // for (var i = 1; i <= 3; i++) {
      // // оператор + соединяет строки
      // alert("Из шляпы достали " + i + " кролика!")
      // }
      
   }



   function init() {

      // // Assign page elements to variables
      // button = document.getElementById("toggleButton");
      // output = document.getElementById("output");
      // canvas = document.getElementById("led");

      // // Draw circle in canvas
      // context = canvas.getContext("2d");
      // context.arc(25, 25, 15, 0, Math.PI * 2, false);
      // context.lineWidth = 3;
      // context.strokeStyle = "black";
      // context.stroke();
      // context.fillStyle = "black";
      // context.fill();

      // Connect to WebSocket server
      websocket = new WebSocket(url);
      // wsConnect(url);
      // alert("functiont init()");
      // alert("Javacript подключен");
   }

   // Call this to connect to the WebSocket server
   function wsConnect(url) {

      // Connect to WebSocket server
      websocket = new WebSocket(url);

      // Assign callbacks
      // websocket.onopen = function (evt) { onOpen(evt) };
      // websocket.onclose = function (evt) { onClose(evt) };
      // websocket.onmessage = function (evt) { onMessage(evt) };
      // websocket.onerror = function (evt) { onError(evt) };
   }   


   // alert("JavaScript до загрузки 7777777777 страницы!!!!")







// class User {
//    prop1 = 2;
//    prop2 = 45;

//    propnm = "Фигня";

//    constructor(name) {
//        // вызывает сеттер
//        this.name = name;
//    }

//    get name() {
//        return this._name;
//    }

//    set name(value) {
//        if (value.length < 4) {
//            alert("Имя" + value + "слишком короткое.");
//            return;
//        }
//        this._name = value;
//    }

//    calc(a1, a2) {
//        this.prop1 = a1;
//        this.prop2 = a2;
//        return this.prop1 + this.prop2;
//    }

// }


// function dummy() {

//    let myuser = new User("Osel");
//    myuser.calc(2, 3);
// }

// let  smth =458;
// let  func1 =   (qwer2)  => {  smth+=5;  return qwer2*4;}
// let  func2  =   (aaa)   =>  { return aaa+3; } 


let count = 0x55;

// let d = func1(34);
// let g = func2(9);

// const start= new Date().getTime();


// console.log('SecondWay: ${end - start}ms');
var  start= new Date().getTime();
var ttext = "";
var tm = 50;
function task_ddd()
{

   if( count %10 == 0)
   {
   const end = new Date().getTime();  
   tm = 10000.0 / (end - start);
   start = end;
   // ttext = "${tm}ms";
   }
   count++;
   // var ddd =  document.getElementsByClassName ("mblock__3")[0].innerHTML = count.toString() +':  '+ tm.toFixed(1)+" ms"; // .innerHTML = "888"; // = "555";
   $str = count.toString() +':  '+ tm.toFixed(1)+" ms";
   mblk3.textContent = $str;  //count.toString() +':  '+ tm.toFixed(1)+" ms";
   // mblk3.innerHTML =  "ddd";
   // mblk3.value;

}


setInterval(task_ddd, 500);

