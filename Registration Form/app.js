document.getElementById("myForm").addEventListener("submit", function (e) {

    e.preventDefault();
    let form = e.target;

    let firstName = form.fname.value;
   
    let lastName = form.lname.value;
   
    let userEmail = form.email.value;
   
    let phoneNumber = form.mynumber.value;
   
    let userAge = form.age.value;
    
    let userAddress = form.address.value;
   
    let userId = form.myid.value;
    
    const output = document.getElementById("output");

    // output.className = "";

    output.innerHTML = `

      <strong>Form Submitted:</strong><br>

      Name: ${firstName} ${lastName}<br>

      Email: ${userEmail}<br>
      
      Phone: ${phoneNumber}<br>

      Age: ${userAge}<br>
      
      Address: ${userAddress}<br>
      
      ID: ${userId}
    `;

    form.reset();

  });