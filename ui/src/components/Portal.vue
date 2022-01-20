<template>
  <div>
      <div v-if="!formSubmitted" class="form_parent">
          <form class="form">
            <label>Title</label>
            <input type="text" placeholder="Title" v-model="name">
            <label>Subtitle</label>
            <input type="text" placeholder="Subtitle" v-model="phone">
            <label>Picture</label> 
            <!-- something that would be really cool is if we allowed the user to pick a slot where they could insert a picture in the post -->
            <!-- drag and drop most likely -->
            <input type="text" placeholder="Picture" v-model="email">
            <label>Video</label>
            <!-- probably a link -->
            <input type="text" placeholder="Video" v-model="email"> 
            <label>Message</label>
            <textarea name="message" id="" cols="30" rows="10" v-model="message" placeholder="Enter your Post"></textarea>
            <!-- <input type="textarea" rows="4" cols="50" placeholder="MSG"> -->
            <input id="submit" @click="submit" type="Submit" >
          </form>
      </div>
      <div v-if="formSubmitted" class="form_parent">
          <div>
              <h1>Form Submitted</h1>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            message: null,
            formSubmitted: false,
            adminIsVerified: false //need to verify that the admin is actually who they say they are.
        }
    },
    methods: {
        submit() {
            // let formData = {
            //     name: this.name,
            //     phone: this.phone,
            //     email: this.email,
            //     message: this.message
            // }
            //hit the store call to submit the form and send the email
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap');
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        margin: 10px;
        width: 40em;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
    }
    .form_parent {
        border: 10px solid transparent;
        margin-top: 5em;
        display: flex;
        justify-content: center;
    }
    
    #submit {
        margin-top: 10px;
        max-width: 20%;
        background-color: #e5383b;
        border: transparent;
        border-radius: 6px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        color: white;
        padding: 15px;
        align-self: center;
    }
    #submit:hover{
        background-color: #f04d50;
    }    
</style>