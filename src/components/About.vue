<template>
  <div class="about-page">
    <navbar></navbar>
    <div class="about">
        <div class="logo">
            <img src="../assets/logo.svg">
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem temporibus sit numquam rerum porro quos, nisi expedita aperiam a repudiandae voluptates perspiciatis nobis, provident, nam soluta! Vero, est veniam autem!
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
}
.about .logo:after{
    content: 'VueDo';
    position: absolute;
    top: 105%;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 28px;
}

</style>
