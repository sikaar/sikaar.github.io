
      var myStringArray = [
        "#001",
        "#002",
        "#003",
        "#004",
        "#005",
        "#006",
        "#007",
        "#008",
        "#009",
        "#010",
        "#011",
        "#012"
      ];
      var indexi=0;
      document.querySelector("#previous").setAttribute('visible',false);
      document.querySelector("#next").addEventListener("click", (e)=> {
        // do stuff here.
        var X=document.querySelector('#background'); 
        if(indexi <= myStringArray.length - 1  )
          {
            indexi ++;
            X.setAttribute("src",myStringArray[indexi] );
            ORA.click({'data':{'wt.ti':'Slide ' + indexi }});
            document.querySelector("#previous").setAttribute('visible',true);
            if(indexi == myStringArray.length - 1)
              {
                document.querySelector("#next").setAttribute('visible',false); 
              }
          }
      });
      document.querySelector("#previous").addEventListener("click", (e)=> {
        // do stuff here.
        var X=document.querySelector('#background'); 
        if(indexi >= 0  )
          {
            indexi --;
            X.setAttribute("src",myStringArray[indexi] );
            ORA.click({'data':{'wt.ti':'Slide ' + indexi }});
            document.querySelector("#next").setAttribute('visible',true);
            if(indexi == 0)
              {
                document.querySelector("#previous").setAttribute('visible',false);
              }
          }
      });