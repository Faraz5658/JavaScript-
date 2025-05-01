document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;
    const id = parseInt(document.getElementById("id").value);
    const output = document.getElementById("output");

    if (id < 1 || id > 10) {
      output.className = "error";
      output.innerText = "ID must be between 1 and 10.";
      return;
    }

    output.className = "";
    output.innerHTML = `
      <strong>Form Submitted:</strong><br>
      Name: ${first} ${last}<br>
      Email: ${email}<br>
      Phone: ${phone}<br>
      Age: ${age}<br>
      Address: ${address}<br>
      ID: ${id}
    `;

    this.reset();
  });