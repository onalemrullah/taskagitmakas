
 let resimler=document.getElementsByTagName("img");
  let secilen;

  [...resimler].forEach((resim,index)=>{
      resim.addEventListener("click" , ()=>{
          secilen=resim.getAttribute("alt");
          oyna(secilen);
      });
  });

   function oyna(secilen){
       let oyun=["resimler/kağıt.png","resimler/makas.png","resimler/taş.png"];
       let resim=document.getElementById("s1");
        let random=Math.round(Math.random()*2);
        resim.src=oyun[random];
        if (secilen=="taş"){
            if (random==0){
                document.getElementsByTagName("h3")[0].innerHTML="Bilgisayar Kazandı";
            }
            else if (random==1){
            document.getElementsByTagName("h3")[0].innerHTML="Tebrikler , Kazandınız";
            }
            else{
            document.getElementsByTagName("h3")[0].innerHTML="Berabere";
            }
        }
        else if (secilen=="makas"){
            if (random==0){
                document.getElementsByTagName("h3")[0].innerHTML="Tebrikler , Kazandınız";
            }
            else if (random==1){
                document.getElementsByTagName("h3")[0].innerHTML="Berabere";
            }
            else{
            document.getElementsByTagName("h3")[0].innerHTML="Bilgisayar Kazandı";
            }
        }
        else{
            if (random==0){
                document.getElementsByTagName("h3")[0].innerHTML="Berabere";
            }
            else if (random==1){
                document.getElementsByTagName("h3")[0].innerHTML="Bilgsayar Kazandı";
            }
            else{
                document.getElementsByTagName("h3")[0].innerHTML="Tebrikler Kazandınız";
            }
        }
   }