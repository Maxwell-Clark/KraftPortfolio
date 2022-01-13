<template>
  <div>
      <div class="container is-fluid is-flex mt-4 is-justify-content-center" id="title">
          <h1 class="is-size-1 has-text-weight-bold has-text-light">Manager Moments</h1>
      </div>
      <div class="post" v-for="post in posts" :key="post.id" >
        <section class="section">
            <h1 class="title">{{post.title}}</h1>
            <h2 v-if="post.subtitle" class="subtitle">
               {{post.subtitle}}
            </h2>
            <p class="has-text-dark">{{post.body}}</p>
        </section>
      </div>
  </div>
</template>

<script>
import PostsDataService from "../../services/PostsDataService"

export default {
    data() {
        return {
            posts: []
        }
    },
    async mounted() {
        await PostsDataService.getAll()
        .then(response => {
            this.posts = response.data
            console.log(response.data)
        })
        .catch(e => {
            console.error(e)
        })
        console.log(this.posts)
    }

}
</script>

<style>
 .post {
     padding: 0.5em;
     margin: 1em;
     background-color: #b1a7a6;
     border-radius: 3px;
 }
 #title {
     background-color: #660708;
     border-radius: 3px;
     width: 90%;
 }
</style>