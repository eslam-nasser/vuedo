<template>
  <div class="about-page">
    <navbar></navbar>
    <div class="about">
        <div class="logo">
            <img src="../assets/logo.svg">
        </div>
        <div class="social">
            <a target="_blank" href="https://github.com/Eslam-nasser-wd/vuedo" class="front"><i class="icon ion-social-github"></i></a>
            <a target="_blank" href="https://github.com/Eslam-nasser-wd/vuedo-api" class="back"><i class="icon ion-social-github"></i></a>
        </div>
        <div class="content">
            <h1>VueDo - Simple trello clone <a href="https://github.com/Eslam-nasser-wd/node-trello-clone-api"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome"></a></h1>
            <blockquote>
            <p>Basic trello clone made with Vue,node,express and mongo</p>
            </blockquote>
            <h2><a id="Usage_4"></a>Usage</h2>
            <p>To get up and running run:</p>
            <pre><code class="language-bash"><span class="hljs-comment"># install dependencies</span>
$ npm install

<span class="hljs-comment"># serve with hot reload at localhost:8080</span>
$ npm run dev

<span class="hljs-comment"># build for production with minification</span>
$ npm run build
</code></pre>
            <p>Yes, that’s it. Only two commands!</p>
            <p>If you still think that’s too much effort, you could also run:</p>
            <pre><code class="language-bash">$ npm i &amp;&amp; npm run dev</code></pre>
            <p>But yeah, this will basically do the same as <code>npm install</code>.</p>
            <p>Now the app will auto open in a new browser window at <code>http://localhost:8080/#/</code>, or what ever is the configs you made</p>
            <p>For detailed explanation on how things work, checkout the <a href="http://vuejs-templates.github.io/webpack/">guide</a> and <a href="http://vuejs.github.io/vue-loader">docs for vue-loader</a>.</p>
            <h2><a id="Author_28"></a>Author</h2>
            <p>This app made by <a href="https://www.facebook.com/Eslam.nasser.yousef">Eslam nasser</a></p>
            <h2><a id="Contributing_31"></a>Contributing</h2>
            <p>Contributions, questions and comments are all welcome and encouraged. For code contributions submit a pull request with unit test.</p>
            <h2><a id="License_35"></a>License</h2>
            <p>This project is licensed under the <a href="https://github.com/KunalKapadia/express-mongoose-es6-rest-api/blob/master/LICENSE">MIT License</a></p>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar'

export default {
  name: 'about',
  components: {
      Navbar
  },
  created: function(){
      window.document.title = 'About | VueDo'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
    width: 720px;
    max-width: 100%;
    margin: 40px auto;
    padding: 10px 15px;
    background: #34495e;
    position: relative;
    top: 35px;
}
.about .logo{
    width: 120px;
    height: 120px;
    margin: auto;
    margin-bottom: 20px;
    position: relative;
    top: -40px;
    background: #34495e;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid rgba(238, 238, 238, 0.05);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.social{
    display: flex;
    margin-top: -45px;
    margin-bottom: 55px;
}
.social a{
    display: block;
    margin: auto;
    color: #FFF;
    font-size: 22px;
    position: relative;
}
.social a:after{
    content: 'asd';
    position: absolute;
    right: 0;
    top: 100%;
    color: #FFF;
    font-size: 13px;
    width: 100px;
    left: -11px;
}

.social a.front{margin-right: 20px}
.social a.front:after{content: 'Front end'}
.social a.back:after{content: 'Back end'}
.social a.back{margin-left: 20px}
</style>
