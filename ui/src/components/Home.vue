<template>
<div>
    <div id="main" >
        <div class="p-4" id="pic_background">
            <b-image
                :src="require('@/assets/Profile_image.jpg')"
                alt="Profile Picture"
                ratio="601by235"
                id="picture"
                :rounded="true"
                style="width: 12em; height: 12rem"
                ></b-image>
            <div class="has-text-black  mt-3" style="margin-top: 10px;">
                <p class="is-size-1 has-text-weight-bold"> Ken Kraft</p>
                <br>
                <p class="is-size-5"> Organizational Leadership and Development </p>
            </div>
        </div>

        <div class="has-background-white box p-4">
            <div class="has-text-dark mt-3" style="margin-top: 10px; width: 10em;">
                <h1 class="is-size-2 has-text-weight-bold"> Hello!</h1>
                <br>
                <p> Here's who I am and what I do </p>
            </div>
        </div>
    </div>
    <contact-form/>

</div>

</template>

<script>
import ContactForm from './ContactForm.vue';
export default {
    components: {
        ContactForm
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap');
#picture {
    max-width: 20em;
    margin-left: 2.5em;
    margin-bottom: 2.5em;
}
#pic_background {
    border-radius: 5px;
    width: 20em; 
    height: 25em; 
    height: 100%;
    border-color: transparent;
    background-color: #b1a7a6;
    
}
#main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 7em;
    padding: 10em;
    /* margin-left: 3em; */
    font-family: 'Roboto Condensed', sans-serif;
    background: linear-gradient(90deg, #e5383b 40%, white 5%);
}

</style>