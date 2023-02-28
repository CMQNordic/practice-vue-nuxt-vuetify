<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->
        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->
        <!-- Exercise 3 -->
        <!-- Edit the Example from above and create a custom "Full Name" Control -->
        <!-- which still holds the First Name and Last Name Input Field -->
        <form action>
          <div class="form-group">
            <label for="fname">First name:</label>
            <input class="form-control"
                   type="text"
                   id="fname" placeholder="Enter first name" v-model="fname" />
          </div>

          <div>
            <div class="form-group">
              <label for="lname">Last name:</label>
              <input class="form-control" type="text" id="lname" placeholder="Enter last name"
                     v-model="lname" />
            </div>

            <div class="form-group">
              <label placeholder="Enter email"
                     for="email" type="email" id="email"
                     class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3fsafsafsdafadsfsadfsadfsadfdsfsaddfasdfsadfsadfsafsad"> Email:</label>
              <input class="form-control" type="email" id="email" placeholder="Enter email" />

            </div>
            <div style="margin-top: 10px;">
              <img class="aligncenter wp-image-6383" src="http://www.devoote.se/wp-content/uploads/2019/07/map-300x300.png" alt="" width="500"
                   height="500" srcset="
                http://www.devoote.se/wp-content/uploads/2019/07/map-300x300.png 300w,
                http://www.devoote.se/wp-content/uploads/2019/07/map-150x150.png 150w,
                http://www.devoote.se/wp-content/uploads/2019/07/map-55x55.png    55w,
                http://www.devoote.se/wp-content/uploads/2019/07/map-800x800.png 800w,
                http://www.devoote.se/wp-content/uploads/2019/07/map-220x220.png 220w,
                http://www.devoote.se/wp-content/uploads/2019/07/map.png         850w
              " sizes="(max-width: 500px) 100vw, 500px" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input class="form-control"
                     type="password"
                     id="password" placeholder="Enter last name" />

              <div class="a"></div>
              <div style="ba">
                <p>{{p}}</p>
              </div>

            </div>
        </form>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>

          <div>
            <p>test</p>
            <a href="./"></a>
          </div>
          <div>

            <div class="panel-body">
              <p>Full Name: {{ fullName }}</p>
              <p>Mail:</p>
              <p> Password:</p>
              <p style="back">Store in Database?:</p>

              <div class="your-syle"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template> 

<script>
  export default {
    data() {
      return {
        fname: '',
        lname: ''
      }
    },
    computed: {
      fullName: 'Martin Czerwinski'
    }
  }
</script>

