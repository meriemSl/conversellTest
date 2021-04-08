
const dfMessenger = document.querySelector('df-messenger');
    
    







    dfMessenger.addEventListener('df-button-clicked', function (event) {
        
       console.log(event);

    //    const payload = [
            
    //            {
    //              "type": "info",
    //              "title": "Info item title",
    //              "subtitle": "Info item subtitle",
    //              "image": {
    //                "src": {
    //                  "rawUrl": "https://example.com/images/logo.png"
    //                }
    //              },
    //              "actionLink": "https://example.com"
    //            }];
    
    //          dfMessenger.renderCustomCard(payload);
        
        
        //dfMessenger.showMinChat();

        //var elem,
        //style,textTest;
        //textTest = `df-messenger { 
        //                            --df-messenger-bot-message: #fff;
        //                            --df-messenger-button-titlebar-color: #0041C2;
        //                            --df-messenger-chat-background-color: #0041C2;
        //                            --df-messenger-font-color: #000;
        //                            --df-messenger-send-icon: #00adff;
        //                            --df-messenger-user-message: #0041C2;
        //                            --df-messenger-chip-border-color:#0041C2;
        //                        } `;
        
        //elem = document.querySelector('df-messenger');
        //console.log(event)
        //var info = event
        //var xhr = new XMLHttpRequest();
        //xhr.open("POST", 'https://us-central1-conversell-pfe-21.cloudfunctions.net/app/kkk', true);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        //xhr.send(JSON.stringify({
        //    value: info
        //}));
            
           
    //console.log(document.styleSheets)
    //    //console.log(elem)
    //    //console.log(textTest);
    //    // render it to the same value 
    //    elem.textContent = textTest ;
    //    console.log(elem.textContent);
    //    // read only you can't change it value 
    //    style = getComputedStyle(elem);
    //    console.log((style));
    //    console.log((style).getPropertyValue("--df-messenger-chat-background-color"));
       
    //    console.log(document.getElementsByClassName('df-messenger'));
    //   // access to the attribute which is working but with static value 
    //   console.log( dfMessenger.getAttribute("expand")  )
    //   dfMessenger.getAttribute("agent-id") ;
    //   dfMessenger.setAttribute("agent-id","d335be4c-9388-4b51-9616-6a9c130962da")
    //   console.log(dfMessenger.getAttribute("agent-id"));
    //   expandV = true
    //   dfMessenger.setAttribute("expand", expandV ); 
    //   console.log( dfMessenger.getAttribute("expand")  ); 
       
       
    //   dfMessenger.getAttribute("chat-icon") ;
    //   dfMessenger.setAttribute("chat-icon","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F85%2FCircle-icons-chat.svg%2F1024px-Circle-icons-chat.svg.png&f=1&nofb=1")
    //   console.log(dfMessenger.getAttribute("chat-icon"));
       
       
    //   dfMessenger.textContent = "Go to GeeksforGeeks"; 
        
          
    
});
    
    dfMessenger.addEventListener('df-messenger-loaded' , function(event)
    {
        console.log(dfMessenger.getAttribute("session-id")) ;
        dfMessenger.setAttribute("session-id",window.sessionStorage)
    }
    )
     dfMessenger.addEventListener('df-chip-clicked',  function (event) {
        //console.log(event);
       // dfMessenger.renderCustomText('costum text');
     switch(event.detail.query) {
        
        case 'show me text':
                
        {
            console.log(dfMessenger.getAttribute("session-id")); 
            let request = new XMLHttpRequest()
            //http://localhost:3000/stextEventConsume
            request.open("GET","https://us-central1-conversell-pfe-21.cloudfunctions.net/app/textEventConsume");
            request.send();
            request.onload = () => {
            if(request.status === 200){
            console.log(request.response)
            dfMessenger.renderCustomText((request.response).toString())
            } else {
            console.log("Page not found")// if link is broken, output will be page not found
                  }
            }    
        }
        break; 
        
        case 'show me card' :{
            
            let request = new XMLHttpRequest()
            request.open("GET","https://us-central1-conversell-pfe-21.cloudfunctions.net/app/payloadeventConsume");
            request.send();
            request.onload = () => {
            if(request.status === 200){
            console.log(JSON.parse(request.response))
            dfMessenger.renderCustomCard(JSON.parse(request.response))
            } else {
            console.log("Page not found")// if link is broken, output will be page not found
            }
            }
        }
        break;
      }
        
      });
    
    dfMessenger.addEventListener('df-list-element-clicked', function (event) {
        console.log(event.detail);
        
       
            const payload = [
                {
                  "type": "info",
                  "title": "info item from list ",
                  "subtitle": "list item subtitle",
                  "image": {
                    "src": {
                      "rawUrl": "https://example.com/images/logo.png"
                    }
                  },
                  "actionLink": "https://example.com"
                }];
              dfMessenger.renderCustomCard(payload);
        
            //const payload = [
                
            //            {
            //              "type": "description",
            //              "title": "Description title",
            //              "text": [
            //                "This is text line 1.",
            //                "This is text line 2."
            //              ]
            //            }
                      
                    
                  
                  
            //  ];
            //  dfMessenger.renderCustomCard(payload);
    
          
    
    
    //    let request = new XMLHttpRequest()
    //    request.open("GET","http://localhost:3000/detectIntent");
    //    request.send();
    //    request.onload = () => {
    //    if(request.status === 200){
    //         console.log(JSON.parse(request.response))
    //    //dfMessenger.renderCustomCard(JSON.parse(request.response))
    //    } else {
    //         console.log("Page not found")// if link is broken, output will be page not found
    //    } 
    //}   
    
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", watchColorPicker, false);
    
    function watchColorPicker(event) {
      document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
      });
    }
    });
    
    const buttonElement = document.getElementById('btnTest');
    buttonElement.addEventListener('click', function (event) {
        
        dfMessenger.renderCustomText('Custom text');

      }); 
    
    
     
    
    
    
    