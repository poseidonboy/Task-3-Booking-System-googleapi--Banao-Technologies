
const url = ""
var flag=0
var originalState = $("#orifm").html();
function truncate(string){
    var array=string.split(" ");
    var wordcount=array.length;
    var string=array.splice(0,15).join(" ");
    if(wordcount>15){
        string +="..."
    }
    return string
};

$("#mhbtn").click(function(){
  $.ajax({
    type: 'POST',
    url: url,
    enctype: 'multipart/form-data',

    success: function(response){
        $("#orifm").html(originalState);
        flag=0;
        data=response.alldata.postdata;
        for(i=0; i<data.length; i++){
            if (data[i].categories=="Mental Health" && data[i].is_draft==false){
                flag=1;
                smry=truncate(data[i].summary);
                const contid = document.getElementById('newpst')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= data[i].title
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  data[i].id
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= data[i].postimg
                contid.appendChild(msg_element)
                document.getElementById('catid').textContent="Mental Health"
                if($('#disID').length){
                    document.getElementById('disID').textContent=""
                }
            }

        }
        if(flag==0){
            document.getElementById('catid').textContent="Mental Health"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
        
    },
    error: function(error){
        console.log(error)
    },
    cache: false,
    contentType: false,
    processData: false,
})

});


$("#hdbtn").click(function(){

    $.ajax({
      type: 'POST',
      url: url,
      enctype: 'multipart/form-data',
  
      success: function(response){
          $("#orifm").html(originalState);
          flag=0;
          data=response.alldata.postdata;
          for(i=0; i<data.length; i++){
            if (data[i].categories=="Heart Disease" && data[i].is_draft==false){
                flag=1;
                console.log(data[i].is_draft)
                smry=truncate(data[i].summary);
                const contid = document.getElementById('newpst')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= data[i].title
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  data[i].id
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= data[i].postimg
                contid.appendChild(msg_element)
                document.getElementById('catid').textContent="Heart Disease"
                if($('#disID').length){
                    document.getElementById('disID').textContent=""
                }
            }

        }
        if(flag==0){
            document.getElementById('catid').textContent="Heart Disease"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
          
      },
      error: function(error){
          console.log(error)
      },
      cache: false,
      contentType: false,
      processData: false,
  })
  
  });


  $("#covbtn").click(function(){

    $.ajax({
      type: 'POST',
      url: url,
      enctype: 'multipart/form-data',
  
      success: function(response){
        $("#orifm").html(originalState);
        flag=0;
        data=response.alldata.postdata;
        for(i=0; i<data.length; i++){
          if (data[i].categories=="Covid19" && data[i].is_draft==false){
              flag=1;
              smry=truncate(data[i].summary);
              const contid = document.getElementById('newpst')
              var nwpost_element= document.getElementById('postcontent').content
              var msg_element=document.importNode(nwpost_element, true)
              msg_element.querySelector(".psttitle").textContent= data[i].title
              msg_element.querySelector(".psttitle").href= "/viewpost/" +  data[i].id
              msg_element.querySelector(".summry").textContent= smry
              msg_element.querySelector(".imgdimen").src= data[i].postimg
              contid.appendChild(msg_element)
              document.getElementById('catid').textContent="Covid 19"
              if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
          }
               

        }
        if(flag==0){
            document.getElementById('catid').textContent="Covid 19"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
        
    },
    error: function(error){
        console.log(error)
    },
    cache: false,
    contentType: false,
    processData: false,
})

});


$("#izbtn").click(function(){
    $.ajax({
      type: 'POST',
      url: url,
      enctype: 'multipart/form-data',
  
      success: function(response){
        $("#orifm").html(originalState);
        flag=0;
        data=response.alldata.postdata;
        for(i=0; i<data.length; i++){
          if (data[i].categories=="Immunization" && data[i].is_draft==false){
            flag=1;
              smry=truncate(data[i].summary);
              const contid = document.getElementById('newpst')
              var nwpost_element= document.getElementById('postcontent').content
              var msg_element=document.importNode(nwpost_element, true)
              msg_element.querySelector(".psttitle").textContent= data[i].title
              msg_element.querySelector(".psttitle").href= "/viewpost/" +  data[i].id
              msg_element.querySelector(".summry").textContent= smry
              msg_element.querySelector(".imgdimen").src= data[i].postimg
              contid.appendChild(msg_element)
              document.getElementById('catid').textContent="Immunization"
              if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
          }
               

        }
        if(flag==0){
            document.getElementById('catid').textContent="Immunization"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
        
    },
    error: function(error){
        console.log(error)
    },
    cache: false,
    contentType: false,
    processData: false,
})

});

$("#booking").click(function(){
    $.ajax({
      type: 'POST',
      url: url,
      enctype: 'multipart/form-data',
  
      success: function(response){
        $("#orifm").html(originalState);
        flag=0;
        data=response.alldata.usrdata;
        if(data != null){
            flag=1;
            for(i=0; i<data.length; i++){
                dname=data[i].fname +" "+ data[i].lname
                const contid = document.getElementById('newpst')
                var nwpost_element= document.getElementById('usrlist').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= dname
                msg_element.querySelector(".imgdimen").src= data[i].profilepic
                msg_element.querySelector(".appoint").id= dname
                msg_element.querySelector(".appoint").onclick= function(){
                    man(this.id);
                }
                
                contid.appendChild(msg_element)
                document.getElementById('catid').textContent="Doctor list"
                if($('#disID').length){
                    document.getElementById('disID').textContent=""
                }
            }
        }
        if(flag==0){
            document.getElementById('catid').textContent="Doctor list"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
    },
    error: function(error){
        console.log(error)
    },
    cache: false,
    contentType: false,
    processData: false,
})

});



function man(d) {
    s={
        "dt":d
    }
    var mystring = JSON.stringify(s);
    $.ajax({
        type: 'POST',
        url: '/confevent/',
        enctype: 'multipart/form-data',
        data:mystring,
        dataType: "json",
        contentType: "application/json",
        
        success: function(response){
        $("#orifm").html(originalState);
        flag=0;
        data=response.appointfm;
        if(data != null){
            flag=1;
                $("#newpst").html(data);
                document.getElementById('catid').textContent="Appointment with" + " " +d
                if($('#disID').length){
                    document.getElementById('disID').textContent=""
                }
       
        }
        if(flag==0){
            document.getElementById('catid').textContent="Appointment"
            if($('#disID').length){
                document.getElementById('disID').textContent=""
            }
            if($('#orifm').length){
                document.getElementById('orifm').textContent="No post"
            }
        }
    },
    error: function(error){
        console.log(error)
    },
    cache: false,
    contentType: false,
    processData: false,
    })
  }
