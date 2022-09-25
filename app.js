  var f,p,a,samOfForce;
  f = 1000; 
  samOfForce = 0;
  for(a = 45; a> 0 ;a--){
    p = (Math.cos(a)/(2 * Math.sin(a)))*f;
    samOfForce += p;
    if (p >1000){
      console.log(p +" @ " + a );  
      
    }
  }
  console.log(samOfForce);  
