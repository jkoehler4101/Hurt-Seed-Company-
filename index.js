<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'Address')">Address</button>
  <button class="tablinks" onclick="openCity(event, 'Company Number')">Company Number</button>
  <button class="tablinks" onclick="openCity(event, 'Email')">Email</button>
</div>
</body>
<style>
  .button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body {
    font-family: Arial;
  }

  /* Style the tab */

  .tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  }

  /* Style the buttons inside the tab */

  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
  }

  /* Change background color of buttons on hover */

  .tab button:hover {
    background-color: #ddd;
  }

  /* Create an active/current tablink class */

  .tab button.active {
    background-color: #ccc;
  }

  /* Style the tab content */

  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }

  /* Style the close button */

  .topright {
    float: right;
    cursor: pointer;
    font-size: 28px;
  }

  .topright:hover {
    color: red;
  }
</style>
</head>

<div id=Email class="tabcontent">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Email</h3>
  <p>rayhurt@bellsouth.net</p>
</div>

<div id="Address" class="tabcontent">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Address</h3>
  <p>1210 Industrial Park Road Halls TN 38040</p>
</div>

<div id="Company Number" class="tabcontent">
  <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
  <h3>Company Number</h3>
  <p>(731) 836-7574</p>
</div>

<div id="left"></div>
<div id="right"></div>
<div id="top"></div>
<div id="bottom"></div>
