const alertBox = document.getElementById('alert-box')
const imgBox = document.getElementById('img-box')
const form = document.getElementById('p-form')

const title = document.getElementById('title')
const postimg = document.getElementById('id_postimg')
const categories = document.getElementById('choicecat')
const summary = document.getElementById('summary')
const content = document.getElementById('content')
const is_draft = document.getElementById('id_is_draft')

const csrf = document.getElementsByName('csrfmiddlewaretoken')


const url = ""


form.addEventListener('submit', e=>{
    e.preventDefault()

    const fd = new FormData()
    fd.append('csrfmiddlewaretoken', csrf[0].value)
    fd.append('title', title.value)
    fd.append('postimg', postimg.files[0])
    fd.append('categories', categories.value)
    fd.append('summary', summary.value)
    fd.append('content', content.value)
    fd.append('is_draft', is_draft.checked)

    $.ajax({
        type: 'POST',
        url: url,
        enctype: 'multipart/form-data',
        data: fd,
        success: function(response){
            

            function truncate(string){
                var array=string.split(" ");
                var wordcount=array.length;
                var string=array.splice(0,15).join(" ");
                if(wordcount>15){
                    string +="..."
                }
                return string
            };
            document.getElementById("p-form").reset();
            $("#msgbox").addClass("alert alert-info");
            $("#msgbox").html("Blog Post added Successfully!!").fadeIn('slow');  
            $("#msgbox").delay(2000).fadeOut('slow'); 
            smry=truncate(response.postdata['summary']);
            if (response.postdata['categories']=="Mental Health"){
                const contid = document.getElementById('mhnew')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= response.postdata['title']
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  response.postdata['id']
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= response.postdata['postimg']
                contid.appendChild(msg_element)
                if($('#nopostmh').length){
                    document.getElementById('nopostmh').textContent=""
                }
            }
            if (response.postdata['categories']=="Heart Disease"){
                const contid = document.getElementById('hdnew')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= response.postdata['title']
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  response.postdata['id']
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= response.postdata['postimg']
                contid.appendChild(msg_element)
                if($('#noposthd').length){
                    document.getElementById('noposthd').textContent=""
                }
            }
            if (response.postdata['categories']=="Covid19"){
                const contid = document.getElementById('cdnew')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= response.postdata['title']
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  response.postdata['id']
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= response.postdata['postimg']
                contid.appendChild(msg_element)
                if($('#nopostcd').length){
                    document.getElementById('nopostcd').textContent=""
                }
                
            }
            if (response.postdata['categories']=="Immunization"){
                const contid = document.getElementById('iznew')
                var nwpost_element= document.getElementById('postcontent').content
                var msg_element=document.importNode(nwpost_element, true)
                msg_element.querySelector(".psttitle").textContent= response.postdata['title']
                msg_element.querySelector(".psttitle").href= "/viewpost/" +  response.postdata['id']
                msg_element.querySelector(".summry").textContent= smry
                msg_element.querySelector(".imgdimen").src= response.postdata['postimg']
                contid.appendChild(msg_element)
                if($('#nopostiz').length){
                    document.getElementById('nopostiz').textContent=""
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
})
