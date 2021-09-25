
function increment1() {
      document.getElementById('demoInput').stepUp();
   }
   function decrement1() {
      document.getElementById('demoInput').stepDown();
   }

   function increment() {
         document.getElementById('demoPeople').stepUp();
      }
      function decrement() {
         document.getElementById('demoPeople').stepDown();
      }

  function calculate()
 {
   var b=document.getElementById("bill").value;
   var t=document.getElementById("demoInput").value;
   var n=document.getElementById("demoPeople").value;
   var tpp=(t/100)*(b)/n;
   var total=(b/n)+tpp;
   document.getElementById("tpp").textContent=tpp;
   document.getElementById("total").textContent=total;
 }
