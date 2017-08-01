var myIndex = 0;
var h_image = [];
var h_title = [];
var h_desc = [];
var h_url = [];
var c_url=[];
var f_url=[];
var page=0;
var flag=0;
function myFunction() {
  // const element = document.getElementById("to");

  // currentdate = Date.now() - new Date().getTimezoneOffset() * 60000;
  // element.valueAsNumber = currentdate;

  // var previousdate = new Date();
  // previousdate.setDate(previousdate.getDate() - 14);
  // document.getElementById("from").valueAsNumber = previousdate;
  document.getElementById("to").valueAsNumber= Date.now() - new Date().getTimezoneOffset() * 60000;
  document.getElementById("from").valueAsNumber=Date.now() - new Date().getTimezoneOffset() * 60000
}

function headlines() {

  document.getElementById("form1").style.display="none";
  
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status != 200) {
        //error handling code here
      } else {
        //console.log(req.responseText);
        var x = document.getElementById("sliders");
        var p1 = document.getElementById("p1");
        var receive = req.responseText;
        var response = JSON.parse(receive);
        articlelist = response["articles"];
        var headcount = 0;
        // h_image = [];
        // h_title = [];
        // h_desc = [];
        // h_url = [];
        // c_url=[];
        // f_url=[];
        for (i = 0; i < articlelist.length; i++) {
          var myarticles = articlelist[i];
          if (
            myarticles.hasOwnProperty("author") &&
            myarticles.hasOwnProperty("description") &&
            myarticles.hasOwnProperty("title") &&
            myarticles.hasOwnProperty("url") &&
            myarticles.hasOwnProperty("urlToImage") &&
            myarticles.hasOwnProperty("source") &&
            myarticles["source"].hasOwnProperty("id") &&
            myarticles["source"].hasOwnProperty("name") &&
            myarticles["author"] !=null &&
            myarticles["description"]!=null &&
            myarticles["title"]!=null &&
            myarticles["url"]!=null &&
            myarticles["urlToImage"]!=null &&
            myarticles["source"]!=null &&
            myarticles["source"]["id"] !=null &&
            myarticles["source"]["name"] !=null &&
            myarticles["author"] !="" &&
            myarticles["description"]!="" &&
            myarticles["title"]!="" &&
            myarticles["url"]!="" &&
            myarticles["urlToImage"]!="" &&
            myarticles["source"]!="" &&
            myarticles["source"]["id"] !="" &&
            myarticles["source"]["name"] !="" &&
            myarticles["author"] !="null" &&
            myarticles["description"]!="null" &&
            myarticles["title"]!="null" &&
            myarticles["url"]!="null" &&
            myarticles["urlToImage"]!="null" &&
            myarticles["source"]!="null" &&
            myarticles["source"]["id"] !="null" &&
            myarticles["source"]["name"] !="null"         
            ) 
            {
            var image = myarticles["urlToImage"];
            var desc = myarticles["description"];
            var title = myarticles["title"];
            var url = myarticles["url"];
            h_image.push(image);
            h_desc.push(desc);
            h_title.push(title);
            h_url.push(url);
            /*var container = document.createElement("div");
            container.className = "myslides";

            var imglink = document.createElement("img");
            //var nodelink = document.createTextNode("This is new.");
            //imglink.appendChild(nodelink);
            imglink.src = image;
            imglink.className = "headlineimages";

            container.appendChild(imglink);
            var desclink = document.createElement("p");
            desclink.innerText = desc;
            container.appendChild(desclink);
            var titlelink = document.createElement("h3");
            titlelink.innerText = title;
            container.appendChild(titlelink);
            x.appendChild(container);*/
            headcount++;
            if (headcount == 5) {
              break;
            }
          }
        }
      }
    }
  };

  req.open("GET", "/headline");
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send();

  //FETCHING CNN _________________________________________________________________________________________-

  var cnn = new XMLHttpRequest();
  cnn.onreadystatechange = function() {
    if (cnn.readyState == 4) {
      if (cnn.status != 200) {
        //error handling code here
      } else {
        var c_receive = cnn.responseText;
        var c_response = JSON.parse(c_receive);
        c_articlelist = c_response["articles"];
        var c_count = 0;
        for (i = 0; i < c_articlelist.length; i++) {
          var c_myarticles = c_articlelist[i];
          if (
            c_myarticles.hasOwnProperty("author") &&
            c_myarticles.hasOwnProperty("description") &&
            c_myarticles.hasOwnProperty("title") &&
            c_myarticles.hasOwnProperty("url") &&
            c_myarticles.hasOwnProperty("urlToImage") &&
            c_myarticles.hasOwnProperty("source") &&
            c_myarticles["source"].hasOwnProperty("id") &&
            c_myarticles["source"].hasOwnProperty("name") &&
            c_myarticles["author"] !=null &&
            c_myarticles["description"]!=null &&
            c_myarticles["title"]!=null &&
            c_myarticles["url"]!=null &&
            c_myarticles["urlToImage"]!=null &&
            c_myarticles["source"]!=null &&
            c_myarticles["source"]["id"] !=null &&
            c_myarticles["source"]["name"] !=null &&
            c_myarticles["author"] !="" &&
            c_myarticles["description"]!="" &&
            c_myarticles["title"]!="" &&
            c_myarticles["url"]!="" &&
            c_myarticles["urlToImage"]!="" &&
            c_myarticles["source"]!="" &&
            c_myarticles["source"]["id"] !="" &&
            c_myarticles["source"]["name"] !="" &&
            c_myarticles["author"] !="null" &&
            c_myarticles["description"]!="null" &&
            c_myarticles["title"]!="null" &&
            c_myarticles["url"]!="null" &&
            c_myarticles["urlToImage"]!="null" &&
            c_myarticles["source"]!="null" &&
            c_myarticles["source"]["id"] !="null" &&
            c_myarticles["source"]["name"] !="null" 
            

          ) {
            c_count++;
            var image = c_myarticles["urlToImage"];
            var desc = c_myarticles["description"];
            var title = c_myarticles["title"];
            var url = c_myarticles["url"];
            if (c_count == 1) {
              document.getElementById("c1").src = image;
              //console.log("p1 is");
              //console.log(desc);
              document.getElementById("p1").innerText = desc;
              document.getElementById("h1").innerText = title;
              c_url.push(url)
              document.getElementById("cnn_card1").addEventListener("click", function () {window.open(c_url[0]);});
              
            } else if (c_count == 2) {
              document.getElementById("c2").src = image;
              document.getElementById("p2").innerText = desc;
              document.getElementById("h2").innerText = title;
              c_url.push(url)
              document.getElementById("cnn_card2").addEventListener("click", function () { window.open(c_url[1]); });

            } else if (c_count == 3) {
              document.getElementById("c3").src = image;
              document.getElementById("p3").innerText = desc;
              document.getElementById("h3").innerText = title;
              c_url.push(url)
              document.getElementById("cnn_card3").addEventListener("click", function () { window.open(c_url[2]); });

            } else if (c_count == 4) {
              document.getElementById("c4").src = image;
              document.getElementById("p4").innerText = desc;
              document.getElementById("h4").innerText = title;
              c_url.push(url)
              document.getElementById("cnn_card4").addEventListener("click", function () { window.open(c_url[3]); });

            } else {
              break;
            }
          }
        }
      }
    }
  };

  //return false;

  cnn.open("GET", "/cnn");
  cnn.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //window.alert("sending cnn request");
  cnn.send();
  //FETCHING FOX _________________________________________________________________________________________-

  var fox = new XMLHttpRequest();
  fox.onreadystatechange = function() {
    if (fox.readyState == 4) {
      if (fox.status != 200) {
        //error handling code here
      } else {
        var f_receive = fox.responseText;
        var f_response = JSON.parse(f_receive);
        f_articlelist = f_response["articles"];
        var f_count = 0;
        for (i = 0; i < f_articlelist.length; i++) {
          var f_myarticles = f_articlelist[i];
          if (
            f_myarticles.hasOwnProperty("author") &&
            f_myarticles.hasOwnProperty("description") &&
            f_myarticles.hasOwnProperty("title") &&
            f_myarticles.hasOwnProperty("url") &&
            f_myarticles.hasOwnProperty("urlToImage") &&
            f_myarticles.hasOwnProperty("source") &&
            f_myarticles["source"].hasOwnProperty("id") &&
            f_myarticles["source"].hasOwnProperty("name") &&
            f_myarticles["author"] !=null &&
            f_myarticles["description"]!=null &&
            f_myarticles["title"]!=null &&
            f_myarticles["url"]!=null &&
            f_myarticles["urlToImage"]!=null &&
            f_myarticles["source"]!=null &&
            f_myarticles["source"]["id"] !=null &&
            f_myarticles["source"]["name"] !=null &&
            f_myarticles["author"] !="" &&
            f_myarticles["description"]!="" &&
            f_myarticles["title"]!="" &&
            f_myarticles["url"]!="" &&
            f_myarticles["urlToImage"]!="" &&
            f_myarticles["source"]!="" &&
            f_myarticles["source"]["id"] !="" &&
            f_myarticles["source"]["name"] !="" &&
            f_myarticles["author"] !="null" &&
            f_myarticles["description"]!="null" &&
            f_myarticles["title"]!="null" &&
            f_myarticles["url"]!="null" &&
            f_myarticles["urlToImage"]!="null" &&
            f_myarticles["source"]!="null" &&
            f_myarticles["source"]["id"] !="null" &&
            f_myarticles["source"]["name"] !="null" 

          ) {
            f_count++;
            var image = f_myarticles["urlToImage"];
            var desc = f_myarticles["description"];
            var title = f_myarticles["title"];
            var url=f_myarticles["url"];
            if (f_count == 1) {
              document.getElementById("c5").src = image;
              // console.log("p1 is");
              //console.log(desc);
              document.getElementById("p5").innerText = desc;
              document.getElementById("h5").innerText = title;
              f_url.push(url)
              document.getElementById("fox_card1").addEventListener("click", function () { window.open(f_url[0]); });
            } else if (f_count == 2) {
              document.getElementById("c6").src = image;
              document.getElementById("p6").innerText = desc;
              document.getElementById("h6").innerText = title;
              f_url.push(url)
              document.getElementById("fox_card2").addEventListener("click", function () { window.open(f_url[1]); });
            } else if (f_count == 3) {
              document.getElementById("c7").src = image;
              document.getElementById("p7").innerText = desc;
              document.getElementById("h7").innerText = title;
              f_url.push(url)
              document.getElementById("fox_card3").addEventListener("click", function () { window.open(f_url[2]); });
            } else if (f_count == 4) {
              document.getElementById("c8").src = image;
              document.getElementById("p8").innerText = desc;
              document.getElementById("h8").innerText = title;
              f_url.push(url)
              document.getElementById("fox_card4").addEventListener("click", function () { window.open(f_url[3]); });
            } else {
              break;
            }
          }
        }
      }
    }
  };

  //return false;

  fox.open("GET", "/fox");
  fox.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //window.alert("sending fox request");
  fox.send();
  carousel();
  wordcloud();
  setTimeout(cardsize,2000);
 
}
//var svg;
//var layout;
function cardsize()
{
  //window.alert("Card size called");
  var a=document.getElementById("cnn_card1").offsetHeight;
  var b=document.getElementById("cnn_card2").offsetHeight;
  var c=document.getElementById("cnn_card3").offsetHeight;
  var d=document.getElementById("cnn_card4").offsetHeight;
  var maxh=Math.max(a,b,c,d);
  document.getElementById("cnn_card1").style.height=maxh+ "px";
  document.getElementById("cnn_card2").style.height=maxh+"px";
  document.getElementById("cnn_card3").style.height=maxh+"px";
  document.getElementById("cnn_card4").style.height=maxh+"px";
  var q=document.getElementById("fox_card1").offsetHeight;
  var w=document.getElementById("fox_card2").offsetHeight;
  var e=document.getElementById("fox_card3").offsetHeight;
  var r=document.getElementById("fox_card4").offsetHeight;
  var maxh=Math.max(q,w,e,r);
  document.getElementById("fox_card1").style.height=maxh+ "px";
  document.getElementById("fox_card2").style.height=maxh+"px";
  document.getElementById("fox_card3").style.height=maxh+"px";
  document.getElementById("fox_card4").style.height=maxh+"px";

}
function wordcloud(){
 
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if (req.status != 200) {
        //error handling code here
      } else {
        //console.log(req.responseText);
        
        var receive = req.responseText;
        var response = JSON.parse(receive);
        // List of words
        var myWords=response.cloudwords; 

// set the dimensions and margins of the graph
        var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 350 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
         svg = d3.select("#my_dataviz").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");

        // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
        // Wordcloud features that are different from one word to the other must be here
         layout = d3.layout.cloud()
          .size([width, height])
          .words(myWords.map(function(d) { return {text: d.word, size:d.size }; }))
          .padding(5)        //space between words
          .rotate(function() { return ~~(Math.random() * 2) * 90; })
          .fontSize(function(d) { return d.size *1.5 ; })      // font size of words
          .on("end", draw);
        layout.start();

        

            }
          }
        }
  req.open("GET", "/wordcloud");
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send();
 // cardsize();
}
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size*1.5 +"px"; })
        .style("fill", "#000000")
        .attr("text-anchor", "middle")
        .style("font-family", "Impact")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}


function carousel() {
  

  /*var i;
  var y = document.getElementsByClassName("headlineimages");
  var z = document.getElementById("hi");

  /* for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }*/
  // window.alert("Inside carousel");
  len = h_image.length;
  var z = document.getElementById("headlineimage");
  var s = document.getElementById("headlinetitle");
  var t = document.getElementById("headlinedesc");
  var u = document.getElementById("head_anchor");
  if (myIndex >= len) {
    myIndex = 0;
  }
  //console.log(" image is " + myIndex + h_image[myIndex]);
  z.src = h_image[myIndex];
  s.innerHTML = h_title[myIndex];
  t.innerHTML = h_desc[myIndex];
  u.href=h_url[myIndex];
  //y[myIndex].style.display = "block";
  myIndex++;
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function searchpage(){
  page=1;
  document.getElementById("allcards").style.display = "block";
  document.getElementById("b1").style.backgroundColor="whitesmoke";
  document.getElementById("b1").style.color="black";
  document.getElementById("b2").style.backgroundColor="gray";
  document.getElementById("b2").style.color="white";
  document.getElementById("page1").style.display = "none";
  document.getElementById("form1").style.display = "block";
  dateValidation();
  getSources();
}

function dateValidation() {
  const element = document.getElementById("to");

  currentdate = Date.now() - new Date().getTimezoneOffset() * 60000;
  element.valueAsNumber = currentdate;

  var previousdate = new Date();
  previousdate.setDate(previousdate.getDate() - 7);
  //document.getElementById("from").valueAsNumber = previousdate;
  previousdate=Date.now() - new Date().getTimezoneOffset() * 60000;
  previousdate=previousdate- 7 * 24 * 60 * 60 * 1000;
  document.getElementById("from").valueAsNumber = previousdate;
  //FORM REDIRECTION PREVENT_____________________________________
 // var form = document.getElementById("myform");
 // function handleForm(event) { event.preventDefault(); }
 // form.addEventListener('submit', handleForm);
    var sb = document.getElementById("submitbutton"); 

    //sb.addEventListener('click', mysearch);
}
 

function getSources(){
   var source = new XMLHttpRequest();
   source.onreadystatechange = function () {
     if (source.readyState == 4) {
       if (source.status != 200) {
         //error handling code here
       } else {
         var s_receive = source.responseText;
         var s_response = JSON.parse(s_receive);
         source_list = s_response["sources"];
         console.log(source_list);
         var c_count = 0;
         for (i = 0; i < source_list.length; i++) {
           var curitem = source_list[i];
           if (
             curitem.hasOwnProperty("id") &&
             curitem.hasOwnProperty("name") &&
             curitem["id"] != null &&
             curitem["name"]!=null &&
             curitem["id"] != "" &&
             curitem["name"]!="" &&
             curitem["id"] != "null" &&
             curitem["name"]!="null"
             ) {
             var id = curitem["id"];
             var name= curitem["name"];
             var c=document.getElementById("sourcelist");
             var option=document.createElement("option");
             option.value=id;
             option.innerHTML=name;
             c.appendChild(option);
           
            }
         }
       }
     }
   };

   //return false;
  source.open("GET", "/sources");
   source.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   //window.alert("sending sources request");
   source.send();
 }
 
 function changeSources(){
 
  //window.alert("change sources called");
  var source = new XMLHttpRequest();
  source.onreadystatechange = function () {
    if (source.readyState == 4) {
      if (source.status != 200) {
        //error handling code here
      } else {
        var s_receive = source.responseText;
        var s_response = JSON.parse(s_receive);
        var csource_list = s_response["sources"];
        
        const myNode = document.getElementById("sourcelist");
        fc=myNode.firstChild
        while (myNode.firstChild) 
        {
        myNode.removeChild(myNode.lastChild);
        }
        //myNode.appendChild(fc)
       var c=document.getElementById("sourcelist");
       var option=document.createElement("option");
       option.value="";
       option.innerHTML="All";
       option.id="first_source";
        c.appendChild(option);
      var c_count = 0;
        for (i = 0; i < csource_list.length; i++) {
          var curitem = csource_list[i];
          if (
            curitem.hasOwnProperty("id") &&
            curitem.hasOwnProperty("name") &&
            curitem["id"] != null &&
            curitem["name"]!=null &&
             curitem["id"] != "" &&
            curitem["name"]!= "" &&
            curitem["id"] != "null" &&
            curitem["name"]!= "null"
            ) {
            var id = curitem["id"];
            var name= curitem["name"];
             var c=document.getElementById("sourcelist");
             var option=document.createElement("option");
             option.value=id;
             option.innerHTML=name;
             c.appendChild(option);
          
           }
        }}
      }
  };
  

  //return false;
  var category = document.getElementById("category").value;
 if (document.getElementById("category").selectedIndex !=0){
  var params = "category=" + category  ;
  source.open("GET", "/changesources" + "?" + params);
  source.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //window.alert("sending sources request");
  source.send();
  }
  else{
       const myNode = document.getElementById("sourcelist");
           fc=myNode.firstChild
           while (myNode.firstChild) 
       {
       myNode.removeChild(myNode.lastChild);
       }
          var c=document.getElementById("sourcelist");
          var option=document.createElement("option");
          option.value="";
         option.innerHTML="All";
         option.id="first_source";
         c.appendChild(option);

        getSources();
    }
}





 function openTab(e,tabName) {
 /* var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }*/
  
  
  document.getElementById(tabName).style.display = "block";
    if (tabName == "c11") { 
      document.getElementById("p16").style.display="none";
      document.getElementById("p11").style.display = "block";
      document.getElementById("p12").style.display = "block";
      document.getElementById("p13").style.display = "block";
      document.getElementById("q1").style.display = "block";
    }
   else if (tabName == "c22") { 
      document.getElementById("p26").style.display="none";
      document.getElementById("p21").style.display = "block";
      document.getElementById("p22").style.display = "block";
      document.getElementById("p23").style.display = "block";
      document.getElementById("q2").style.display = "block";
    }
    else if (tabName == "c33") { 
      document.getElementById("p36").style.display="none";
      document.getElementById("p31").style.display = "block";
      document.getElementById("p32").style.display = "block";
      document.getElementById("p33").style.display = "block";
      document.getElementById("q3").style.display = "block";
    }
    else if (tabName == "c44") { 
      document.getElementById("p46").style.display="none";
      document.getElementById("p41").style.display = "block";
      document.getElementById("p42").style.display = "block";
      document.getElementById("p43").style.display = "block";
      document.getElementById("q4").style.display = "block";
    }
    else if (tabName == "c55") { 
      document.getElementById("p56").style.display="none";
      document.getElementById("p51").style.display = "block";
      document.getElementById("p52").style.display = "block";
      document.getElementById("p53").style.display = "block";
      document.getElementById("q5").style.display = "block";
    }
    else if (tabName == "c66") { 
      document.getElementById("p66").style.display="none";
      document.getElementById("p61").style.display = "block";
      document.getElementById("p62").style.display = "block";
      document.getElementById("p63").style.display = "block";
      document.getElementById("q6").style.display = "block";
    }
    else if (tabName == "c77") { 
      document.getElementById("p76").style.display="none";
      document.getElementById("p71").style.display = "block";
      document.getElementById("p72").style.display = "block";
      document.getElementById("p73").style.display = "block";
      document.getElementById("q7").style.display = "block";
    }
    else if (tabName == "c88") { 
      document.getElementById("p86").style.display="none";
      document.getElementById("p81").style.display = "block";
      document.getElementById("p82").style.display = "block";
      document.getElementById("p83").style.display = "block";
      document.getElementById("q8").style.display = "block";
    }
    else if (tabName == "c99") { 
      document.getElementById("p96").style.display="none";
      document.getElementById("p91").style.display = "block";
      document.getElementById("p92").style.display = "block";
      document.getElementById("p93").style.display = "block";
      document.getElementById("q9").style.display = "block";
    }
    else if (tabName == "c10") { 
      document.getElementById("p106").style.display="none";
      document.getElementById("p101").style.display = "block";
      document.getElementById("p102").style.display = "block";
      document.getElementById("p103").style.display = "block";
      document.getElementById("q10").style.display = "block";
    }
    else if (tabName == "c101") { 
      document.getElementById("p116").style.display="none";
      document.getElementById("p111").style.display = "block";
      document.getElementById("p112").style.display = "block";
      document.getElementById("p113").style.display = "block";
      document.getElementById("q11").style.display = "block";
    }
    else if (tabName == "c12") { 
      document.getElementById("p126").style.display="none";
      document.getElementById("p121").style.display = "block";
      document.getElementById("p122").style.display = "block";
      document.getElementById("p123").style.display = "block";
      document.getElementById("q12").style.display = "block";
    }
    else if (tabName == "c13") { 
      document.getElementById("p136").style.display="none";
      document.getElementById("p131").style.display = "block";
      document.getElementById("p132").style.display = "block";
      document.getElementById("p133").style.display = "block";
      document.getElementById("q13").style.display = "block";
    }
    else if (tabName == "c14") { 
      document.getElementById("p146").style.display="none";
      document.getElementById("p141").style.display = "block";
      document.getElementById("p142").style.display = "block";
      document.getElementById("q14").style.display = "block";

    }
    else if (tabName == "c15") { 
      document.getElementById("p156").style.display="none";
      document.getElementById("p151").style.display = "block";
      document.getElementById("p152").style.display = "block";
      document.getElementById("p153").style.display = "block";
      document.getElementById("q15").style.display = "block";
    }

  

}


//*******************************************OPEN Tab COmplete 
function closeTab(tabName) {
  //event.stopPropagation;
  
  document.getElementById(tabName).style.display = "none";
  if (tabName == "c11") {
    document.getElementById("p16").style.display = "block";
    document.getElementById("p11").style.display = "none";
    document.getElementById("p12").style.display = "none";
    document.getElementById("p13").style.display = "none";
    document.getElementById("q1").style.display = "none";
  }
  else if (tabName == "c22") { 
    document.getElementById("p26").style.display="block";
    document.getElementById("p21").style.display ="none";
    document.getElementById("p22").style.display = "none";
    document.getElementById("p23").style.display = "none";
  document.getElementById("q2").style.display = "none";
}
  else if (tabName == "c33") { 
    document.getElementById("p36").style.display="block";
    document.getElementById("p31").style.display = "none";
    document.getElementById("p32").style.display = "none";
    document.getElementById("p33").style.display = "none";
  document.getElementById("q3").style.display = "none";
}
  else if (tabName == "c44") { 
    document.getElementById("p46").style.display="block";
    document.getElementById("p41").style.display = "none";
    document.getElementById("p42").style.display = "none";
    document.getElementById("p43").style.display = "none";
  document.getElementById("q4").style.display = "none";
}
  else if (tabName == "c55") { 
    document.getElementById("p56").style.display="block";
    document.getElementById("p51").style.display = "none";
    document.getElementById("p52").style.display = "none";
    document.getElementById("p53").style.display = "none";
  document.getElementById("q5").style.display = "none";
}
  else if (tabName == "c66") { 
    document.getElementById("p66").style.display="block";
    document.getElementById("p61").style.display = "none";
    document.getElementById("p62").style.display = "none";
    document.getElementById("p63").style.display = "none";
  document.getElementById("q6").style.display = "none";
}
  else if (tabName == "c77") { 
    document.getElementById("p76").style.display="block";
    document.getElementById("p71").style.display = "none";
    document.getElementById("p72").style.display = "none";
    document.getElementById("p73").style.display = "none";
    document.getElementById("q7").style.display = "none";  
}
  else if (tabName == "c88") { 
    document.getElementById("p86").style.display="block";
    document.getElementById("p81").style.display = "none";
    document.getElementById("p82").style.display = "none";
    document.getElementById("p83").style.display = "none";
  document.getElementById("q8").style.display = "none";
}
 else if (tabName == "c99") { 
    document.getElementById("p96").style.display="block";
    document.getElementById("p91").style.display = "none";
    document.getElementById("p92").style.display = "none";
    document.getElementById("p93").style.display = "none";
  document.getElementById("q9").style.display = "none";
}
  else if (tabName == "c10") { 
   document.getElementById("p106").style.display="block";
    document.getElementById("p101").style.display = "none";
    document.getElementById("p102").style.display = "none";
    document.getElementById("p103").style.display = "none";
  document.getElementById("q10").style.display = "none";
}
  else if (tabName == "c101") { 
    document.getElementById("p116").style.display="block";
  document.getElementById("p111").style.display = "none";
    document.getElementById("p112").style.display = "none";
    document.getElementById("p113").style.display = "none";
  document.getElementById("q11").style.display = "none";
}
  else if (tabName == "c12") { 
    document.getElementById("p126").style.display="block";
    document.getElementById("p121").style.display = "none";
    document.getElementById("p122").style.display = "none";
    document.getElementById("p123").style.display = "none";
  document.getElementById("q12").style.display = "none";
}
  else if (tabName == "c13") { 
    document.getElementById("p136").style.display="block";
    document.getElementById("p131").style.display = "none";
    document.getElementById("p132").style.display = "none";
    document.getElementById("p133").style.display = "none";
  document.getElementById("q13").style.display = "none";
}
  else if (tabName == "c14") { 
    document.getElementById("p146").style.display="block";
    document.getElementById("p141").style.display = "none";
    document.getElementById("p142").style.display = "none";
    document.getElementById("p143").style.display = "none";
    document.getElementById("q14").style.display = "none";
  }
  else if (tabName == "c15") { 
    document.getElementById("p156").style.display="block";
    document.getElementById("p151").style.display = "none";
    document.getElementById("p152").style.display = "none";
    document.getElementById("p153").style.display = "none";
    document.getElementById("q15").style.display = "none";
  }
  return false;
}
 
 
 function mydate()
 {

 }
 
 
 function mysearch() {
  //mydate()

  flag=0;
  var f =document.getElementById("from").valueAsNumber;
  var t= document.getElementById("to").valueAsNumber;
  if (f>t){
    // DO NOT REMOVE THIS LATER*-***************************************
    window.alert("Incorrect time");
    return false;
  }

  //window.alert("search called"); 
  var source = new XMLHttpRequest();
   source.onreadystatechange = function () {
     if (source.readyState == 4) {
       if (source.status != 200) {
        var e_receive = source.responseText;
        var e_response = JSON.parse(e_receive);
        var testing=document.getElementById("keyword").value;
        window.alert("testing is " +  testing)
        // if (testing!="")
        // {
        // window.alert(e_response.message);
        // }
        } else {
         var s_receive = source.responseText;
          var s_response = JSON.parse(s_receive);
         //&& flag==0
          if (s_response.status=="error" && s_response.code!="parametersMissing" ){
            
            window.alert(s_response.message);
            return false;
         }
         search_list = s_response["articles"];
         var s_count = 0;
         s_count=0;
          s_title = [];
         s_desc = [];
         s_fdesc=[]
         s_date = [];
         s_author = [];
         s_name = [];
         s_image = [];
         s_url=[];
       // if (search_list.length ==0  ){
          //document.getElementById("nores").style.display="block";
          document.getElementsByClassName("f_card_1")[0].style.display="none";
          document.getElementsByClassName("f_card_2")[0].style.display="none";
          document.getElementsByClassName("f_card_3")[0].style.display="none";
          document.getElementsByClassName("f_card_4")[0].style.display="none";
          document.getElementsByClassName("f_card_5")[0].style.display="none";
          document.getElementsByClassName("f_card_6")[0].style.display="none";
          document.getElementsByClassName("f_card_7")[0].style.display="none";
          document.getElementsByClassName("f_card_8")[0].style.display="none";
          document.getElementsByClassName("f_card_9")[0].style.display="none";
          document.getElementsByClassName("f_card_10")[0].style.display="none";
          document.getElementsByClassName("f_card_11")[0].style.display="none";
          document.getElementsByClassName("f_card_12")[0].style.display="none";
          document.getElementsByClassName("f_card_13")[0].style.display="none";
          document.getElementsByClassName("f_card_14")[0].style.display="none";
          document.getElementsByClassName("f_card_15")[0].style.display="none";
          document.getElementById("showmore").style.display="none";
          document.getElementById("showless").style.display="none";
          closeTab('c11');
          closeTab('c22');
          closeTab('c33');
          closeTab('c44');
          closeTab('c55');
          closeTab('c66');
          closeTab('c77');
          closeTab('c88');
          closeTab('c99');
          closeTab('c10');
          closeTab('c101');
          closeTab('c12');
          closeTab('c13');
          closeTab('c14');
          closeTab('c15');
          
        //&& document.getElementById("keyword").value!==""}
        if (search_list.length ==0  ){
          document.getElementById("nores").style.display="block";
        }
         
         
         for (i = 0; i < search_list.length; i++) {
           var curitem = search_list[i];
           if (curitem.hasOwnProperty("author") &&
             curitem.hasOwnProperty("description") &&
             curitem.hasOwnProperty("title") &&
             curitem.hasOwnProperty("url") &&
             curitem.hasOwnProperty("urlToImage") &&
             curitem.hasOwnProperty("source") &&
             curitem.hasOwnProperty("publishedAt") &&
             curitem["source"].hasOwnProperty("name") &&
             curitem["author"] != null &&
             curitem["description"] != null &&
             curitem["title"] != null &&
             curitem["url"] != null &&
             curitem["urlToImage"] != null &&
             curitem["source"] != null &&
             curitem["publishedAt"] != null &&
             curitem["source"]["name"]!=null &&
             curitem["author"] != "" &&
             curitem["description"] != "" &&
             curitem["title"] != "" &&
             curitem["url"] != "" &&
             curitem["urlToImage"] != "" &&
             curitem["source"] != "" &&
             curitem["publishedAt"] != "" &&
             curitem["source"]["name"]!="" &&
             curitem["author"] != "null" &&
             curitem["description"] != "null" &&
             curitem["title"] != "null" &&
             curitem["url"] != "null" &&
             curitem["urlToImage"] != "null" &&
             curitem["source"] != "null" &&
             curitem["publishedAt"] != "null" &&
             curitem["source"]["name"]!="null")
             {
             s_count++;
             var title = curitem["title"];
             var desc = curitem["description"];
             var date = curitem["publishedAt"];
             
             var fdesc=desc;
             var author = curitem["author"];
             var url = curitem["url"];
             var name = curitem["source"]["name"];
             var image = curitem["urlToImage"];
             desc = desc.replace(/^(.{70}[^\s]*).*/, "$1");
             var temp=desc.slice(0,desc.length-1);
              if(fdesc.length>=70){
              desc=desc+"..."
              }
            //  var d = new Date(date);
            //  var day = d.getDay().toString();
            //  var month = d.getMonth().toString();
            //  var dat = d.getDate().toString();
             
            //  if (dat.length==1){dat="0"+dat;}
            //  if (month.length==1){month="0"+month;}
            //  var year = d.getFullYear();
             var year=date.slice(0,4);
             var month=date.slice(5,7);
             var day=date.slice(8,10);
             var formatted = month + "/" + day + "/" + year;
             date=formatted;
             
             
             if (s_count==1){
               s_title.push(title);
               s_desc.push(desc);
               s_date.push(date);
               s_author.push(author);
               s_name.push(name);
               s_image.push(image);
               s_url.push(url);
               s_fdesc.push(fdesc);
               document.getElementById("i1").src=s_image[0];
               document.getElementById("s11").innerHTML=s_author[0];
               document.getElementById("s12").innerHTML = s_name[0];
               document.getElementById("s13").innerHTML = s_date[0];
               document.getElementById("s14").innerHTML = s_title[0];
               document.getElementById("p16").innerHTML = s_desc[0];
               document.getElementsByClassName("f_card_1")[0].style.display="block";
               document.getElementById("p15").href = s_url[0];
               document.getElementById("p14").innerHTML = s_fdesc[0];
               //**************** */ 
               document.getElementById("nores").style.display="none";
               if(title.length>=120){
                document.getElementById("p12").style.paddingLeft="100px";
              }
         
              }
             else if (s_count == 2) {
              s_title.push(title);
              s_desc.push(desc);
              s_date.push(date);
              s_author.push(author);
              s_name.push(name);
              s_image.push(image);
              s_url.push(url);
              s_fdesc.push(fdesc);
              document.getElementById("i2").src=s_image[1];
              document.getElementById("s21").innerHTML=s_author[1];
              document.getElementById("s22").innerHTML = s_name[1];
              document.getElementById("s23").innerHTML = s_date[1];
              document.getElementById("s24").innerHTML = s_title[1];
              document.getElementById("p26").innerHTML = s_desc[1];
              document.getElementsByClassName("f_card_2")[0].style.display="block";
              document.getElementById("p25").href = s_url[1];
              document.getElementById("p24").innerHTML = s_fdesc[1];
              if(title.length>=120){
                document.getElementById("p22").style.paddingLeft="100px";
              }

             }
             else if (s_count == 3) {
              s_title.push(title);
               s_desc.push(desc);
               s_date.push(date);
               s_author.push(author);
               s_name.push(name);
               s_image.push(image);
               s_url.push(url);
               s_fdesc.push(fdesc);
               document.getElementById("i3").src=s_image[2];
               document.getElementById("s31").innerHTML=s_author[2];
               document.getElementById("s32").innerHTML = s_name[2];
               document.getElementById("s33").innerHTML = s_date[2];
               document.getElementById("s34").innerHTML = s_title[2];
               document.getElementById("p36").innerHTML = s_desc[2];
               document.getElementsByClassName("f_card_3")[0].style.display="block";
               document.getElementById("p35").href = s_url[2];
               document.getElementById("p34").innerHTML = s_fdesc[2];
               if(title.length>=120){
                document.getElementById("p32").style.paddingLeft="100px";
              }
               
             }

             else if (s_count == 4) {
              s_title.push(title);
              s_desc.push(desc);
              s_date.push(date);
              s_author.push(author);
              s_name.push(name);
              s_image.push(image);
              s_url.push(url);
              s_fdesc.push(fdesc);
              document.getElementById("i4").src=s_image[3];
              document.getElementById("s41").innerHTML=s_author[3];
              document.getElementById("s42").innerHTML = s_name[3];
              document.getElementById("s43").innerHTML = s_date[3];
              document.getElementById("s44").innerHTML = s_title[3];
              document.getElementById("p46").innerHTML = s_desc[3];
              document.getElementsByClassName("f_card_4")[0].style.display="block";
              document.getElementById("p45").href = s_url[3];
              document.getElementById("p44").innerHTML = s_fdesc[3];

              if(title.length>=120){
                document.getElementById("p42").style.paddingLeft="100px";
              }
             }
             else if (s_count == 5) {
              s_title.push(title);
               s_desc.push(desc);
               s_date.push(date);
               s_author.push(author);
               s_name.push(name);
               s_image.push(image);
               s_url.push(url);
               s_fdesc.push(fdesc);
               document.getElementById("i5").src=s_image[4];
               document.getElementById("s51").innerHTML=s_author[4];
               document.getElementById("s52").innerHTML = s_name[4];
               document.getElementById("s53").innerHTML = s_date[4];
               document.getElementById("s54").innerHTML = s_title[4];
               document.getElementById("p56").innerHTML = s_desc[4];
               document.getElementsByClassName("f_card_5")[0].style.display="block";
               document.getElementById("p55").href = s_url[4];
               document.getElementById("p54").innerHTML = s_fdesc[4];
               if(title.length>=120){
                document.getElementById("p52").style.paddingLeft="100px";
              }
             
             }
             else if (s_count < 16)
             {
               s_title.push(title);
              s_desc.push(desc);
              s_date.push(date);
              s_author.push(author);
              s_name.push(name);
              s_image.push(image);
              s_url.push(url);
              s_fdesc.push(fdesc);
             }
             else{
                //window.alert("Search exited " + s_title.length);
                break;
             }
            
           }
         }
         if (s_title.length > 5) {
         document.getElementById("showmore").style.display="block";
        }
        }
        
     }
   };
   
   var keyword=document.getElementById("keyword").value;
   var from_date = document.getElementById("from").value;
   var to_date = document.getElementById("to").value;
   var category = document.getElementById("category").value;
   var website = document.getElementById("sourcelist").value;
   var params = "q=" + keyword + "&" + "f=" + from_date + "&" + "t=" + to_date + "&" + "c=" + category + "&" + "s=" + website  ;
   
   source.open("GET", "/search" + "?" + params);
   source.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   //window.alert("sending search request");
   source.send();
  }
// **************************SEARCH FUNCTION ENDED

function moreCards() {
    var i;
    //window.alert("more cards");  
    var display_length=Math.max(15,s_title.length);
      display_length=display_length-5;
         for (i = 5; i < display_length+5 ; i++) {
           
              if (i==5){
               document.getElementById("i6").src=s_image[i];
               document.getElementById("s61").innerHTML=s_author[i];
               document.getElementById("s62").innerHTML = s_name[i];
               document.getElementById("s63").innerHTML = s_date[i];
               document.getElementById("s64").innerHTML = s_title[i];
               document.getElementById("p66").innerHTML = s_desc[i];
               document.getElementsByClassName("f_card_6")[0].style.display="block";
               document.getElementById("p65").href = s_url[i];
               document.getElementById("p64").innerHTML = s_fdesc[i];
               if(s_title[i].length>=120){
                document.getElementById("p62").style.paddingLeft="100px";
              }
             
              }
             
              else if (i == 6) {
                document.getElementById("i7").src=s_image[i];
               document.getElementById("s71").innerHTML=s_author[i];
               document.getElementById("s72").innerHTML = s_name[i];
               document.getElementById("s73").innerHTML = s_date[i];
               document.getElementById("s74").innerHTML = s_title[i];
               document.getElementById("p76").innerHTML = s_desc[i];
               document.getElementsByClassName("f_card_7")[0].style.display="block";
               document.getElementById("p75").href = s_url[i];
               document.getElementById("p74").innerHTML = s_fdesc[i];
               if(s_title[i].length>=120){
                document.getElementById("p72").style.paddingLeft="100px";
              }
             


             }
             else if (i == 7) {
              document.getElementById("i8").src=s_image[i];
              document.getElementById("s81").innerHTML=s_author[i];
              document.getElementById("s82").innerHTML = s_name[i];
              document.getElementById("s83").innerHTML = s_date[i];
              document.getElementById("s84").innerHTML = s_title[i];
              document.getElementById("p86").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_8")[0].style.display="block";
              document.getElementById("p85").href = s_url[i];
              document.getElementById("p84").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p82").style.paddingLeft="100px";
              }
             
            }
            else if (i == 8) {
              document.getElementById("i9").src=s_image[i];
              document.getElementById("s91").innerHTML=s_author[i];
              document.getElementById("s92").innerHTML = s_name[i];
              document.getElementById("s93").innerHTML = s_date[i];
              document.getElementById("s94").innerHTML = s_title[i];
              document.getElementById("p96").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_9")[0].style.display="block";
              document.getElementById("p95").href = s_url[i];
              document.getElementById("p94").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p92").style.paddingLeft="100px";
              }
             
            }
            else if (i == 9) {
              document.getElementById("i10").src=s_image[i];
              document.getElementById("s101").innerHTML=s_author[i];
              document.getElementById("s102").innerHTML = s_name[i];
              document.getElementById("s103").innerHTML = s_date[i];
              document.getElementById("s104").innerHTML = s_title[i];
              document.getElementById("p106").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_10")[0].style.display="block";
              document.getElementById("p105").href = s_url[i];
              document.getElementById("p104").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p102").style.paddingLeft="100px";
              }
             
            }
            else if (i == 10) {
              document.getElementById("i11").src=s_image[i];
              document.getElementById("s111").innerHTML=s_author[i];
              document.getElementById("s112").innerHTML = s_name[i];
              document.getElementById("s113").innerHTML = s_date[i];
              document.getElementById("s114").innerHTML = s_title[i];
              document.getElementById("p116").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_11")[0].style.display="block";
              document.getElementById("p115").href = s_url[i];
              document.getElementById("p114").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p112").style.paddingLeft="100px";
              }
             
            }
            else if (i == 11) {
              document.getElementById("i12").src=s_image[i];
              document.getElementById("s121").innerHTML=s_author[i];
              document.getElementById("s122").innerHTML = s_name[i];
              document.getElementById("s123").innerHTML = s_date[i];
              document.getElementById("s124").innerHTML = s_title[i];
              document.getElementById("p126").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_12")[0].style.display="block";
              document.getElementById("p125").href = s_url[i];
              document.getElementById("p124").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p122").style.paddingLeft="100px";
              }
             
            }
            else if (i == 12) {
              document.getElementById("i13").src=s_image[i];
              document.getElementById("s131").innerHTML=s_author[i];
              document.getElementById("s132").innerHTML = s_name[i];
              document.getElementById("s133").innerHTML = s_date[i];
              document.getElementById("s134").innerHTML = s_title[i];
              document.getElementById("p136").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_13")[0].style.display="block";
              document.getElementById("p135").href = s_url[i];
              document.getElementById("p134").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p132").style.paddingLeft="100px";
              }
             
            }
            else if (i == 13) {
              document.getElementById("i14").src=s_image[i];
              document.getElementById("s141").innerHTML=s_author[i];
              document.getElementById("s142").innerHTML = s_name[i];
              document.getElementById("s143").innerHTML = s_date[i];
              document.getElementById("s144").innerHTML = s_title[i];
              document.getElementById("p146").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_14")[0].style.display="block";
              document.getElementById("p145").href = s_url[i];
              document.getElementById("p144").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p142").style.paddingLeft="100px";
              }
             
            }
            else if (i == 14) {
              document.getElementById("i15").src=s_image[i];
              document.getElementById("s151").innerHTML=s_author[i];
              document.getElementById("s152").innerHTML = s_name[i];
              document.getElementById("s153").innerHTML = s_date[i];
              document.getElementById("s154").innerHTML = s_title[i];
              document.getElementById("p156").innerHTML = s_desc[i];
              document.getElementsByClassName("f_card_15")[0].style.display="block";
              document.getElementById("p155").href = s_url[i];
              document.getElementById("p154").innerHTML = s_fdesc[i];
              if(s_title[i].length>=120){
                document.getElementById("p152").style.paddingLeft="100px";
              }
             
            }
            
}
           document.getElementById("showmore").style.display="none";
           document.getElementById("showless").style.display="block";
         }
         
function lessCards(){
  document.getElementsByClassName("f_card_6")[0].style.display="none";
  document.getElementsByClassName("f_card_7")[0].style.display="none";
  document.getElementsByClassName("f_card_8")[0].style.display="none";
  document.getElementsByClassName("f_card_9")[0].style.display="none";
  document.getElementsByClassName("f_card_10")[0].style.display="none";
  document.getElementsByClassName("f_card_11")[0].style.display="none";
  document.getElementsByClassName("f_card_12")[0].style.display="none";
  document.getElementsByClassName("f_card_13")[0].style.display="none";
  document.getElementsByClassName("f_card_14")[0].style.display="none";
  document.getElementsByClassName("f_card_15")[0].style.display="none";


  document.getElementById("showmore").style.display="block";
  document.getElementById("showless").style.display="none";
}

function allclear(){
  //window.alert("all clear");
  dateValidation();
  document.getElementById("keyword").value="";
  document.getElementById("category").selectedIndex=0;
  document.getElementById("sourcelist").selectedIndex=0;
  //document.getElementById("first_cat").selected='selected';
  //document.getElementById("first_source").selected='selected';
  //document.getElementById("allcards").display="none";
  document.getElementsByClassName("f_card_1")[0].style.display="none";
  document.getElementsByClassName("f_card_2")[0].style.display="none";
  document.getElementsByClassName("f_card_3")[0].style.display="none";
  document.getElementsByClassName("f_card_4")[0].style.display="none";
  document.getElementsByClassName("f_card_5")[0].style.display="none";
  document.getElementsByClassName("f_card_6")[0].style.display="none";
  document.getElementsByClassName("f_card_7")[0].style.display="none";
  document.getElementsByClassName("f_card_8")[0].style.display="none";
  document.getElementsByClassName("f_card_9")[0].style.display="none";
  document.getElementsByClassName("f_card_10")[0].style.display="none";
  document.getElementsByClassName("f_card_11")[0].style.display="none";
  document.getElementsByClassName("f_card_12")[0].style.display="none";
  document.getElementsByClassName("f_card_13")[0].style.display="none";
  document.getElementsByClassName("f_card_14")[0].style.display="none";
  document.getElementsByClassName("f_card_15")[0].style.display="none";


  document.getElementById("showmore").style.display="none";
  document.getElementById("showless").style.display="none";
  document.getElementById("nores").style.display="none";
  const myNode = document.getElementById("sourcelist");
  fc=myNode.firstChild
  while (myNode.firstChild) 
  {
  myNode.removeChild(myNode.lastChild);
  }
  myNode.appendChild(fc)
  //  var c=document.getElementById("sourcelist");
  //  var option=document.createElement("option");
  //  option.value="";
  //  option.innerHTML="All";
  //  option.id="first_source";
  //  c.appendChild(option);

  changeSources();
}


function mypageone(){

  //allclear();
  page=0;
  document.getElementById("page1").style.display = "block";
  document.getElementById("form1").style.display = "none";
  document.getElementById("allcards").style.display = "none";
  document.getElementById("b2").style.backgroundColor="whitesmoke";
  document.getElementById("b2").style.color="black";
  document.getElementById("b1").style.backgroundColor="gray";
  document.getElementById("b1").style.color="white";
}


function mouseOver1() {
  document.getElementById("b1").style.backgroundColor="green";
  document.getElementById("b1").style.color = "white";
}
function mouseOver2() {
  document.getElementById("b2").style.backgroundColor="green";
  document.getElementById("b2").style.color = "white";
}

function mouseOut1() {
  if (page==0){
  document.getElementById("b1").style.color = "white";
  document.getElementById("b1").style.backgroundColor="gray";
  }
else{
  document.getElementById("b1").style.color = "black";
  document.getElementById("b1").style.backgroundColor="whitesmoke";
}
}

function mouseOut2() {
  if (page==0){
  document.getElementById("b2").style.color = "black";
  document.getElementById("b2").style.backgroundColor="whitesmoke";
}
else{ document.getElementById("b2").style.color = "white";
document.getElementById("b2").style.backgroundColor="gray";
}
}