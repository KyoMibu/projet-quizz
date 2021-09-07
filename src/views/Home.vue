<template>
  <div class="hello">
    <div class="container">
      <header>
        <div class="titre">Z<span class="orangered">O</span>NE <span class="orangered">42</span></div>
      </header>
      <main>
       <div class="desc">Teste tes connaissances, même si on est sûrs que t’en as plein.</div>
       <img src="../img/perso.svg" alt="" class="perso">

       
      </main>
      <footer>
        <router-link href="" to="/categories"><button><span class="button">JOUER</span></button></router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
background-color: rgba(20, 118, 149, 0.16);

}
.desc{
  line-height: 45px;
  font-size: 36px;
}
.titre{
  padding-top: 20px;
}
.container{
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.orangered{
  color: red
}

@media screen and (min-width: 768px) and (min-height:810px){
  
  .titre{
    font-size: 144px;
    line-height: 86px;
    padding: 50px 0;
    font-family: "Gutenberg";
    font-style: normal;
  }
  .desc{
    width: 482px;
    font-size: 36px;
    line-height: 45px;
  }
  button{
  width: 506px;
  height: 98px;
  background: rgba(20, 118, 149, 0.65);
  box-shadow: 0px 4px 4px rgba(20, 118, 149, 0.27);
  border-radius: 10px;
  margin-bottom: 500px;
  border: 0px solid;
  margin-top: 60px;
}
.button{
  font-family: "Gutenberg";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color:white
}
}
@media screen and (max-width:767px)  {

  .titre{
    
    font-size: 72px;
    line-height: 86px;
    padding: 50px 0;
    font-family: "Gutenberg";
    font-style: normal;
  }
  .desc{
    width: 281px;
    padding-top: 30px;
    font-size: 18px;
    line-height: 23px;
  }
  button{
    width: 300px;
    height: 64px;
    background: rgba(20, 118, 149, 0.65);
    box-shadow: 0px 4px 4px rgba(20, 118, 149, 0.27);
    border-radius: 10px;
    border: 0px solid;
    margin-bottom: 500px;
    margin-top: 10px;
}
  .button{
    font-family: "Gutenberg";
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color:white
  }
}
@media screen and (min-width: 768px) and (max-height:809px){
  
  .titre{
    
    font-size: 144px;
    line-height: 86px;
    padding: 50px 0;
    font-family: "Gutenberg";
    font-style: normal;
  }
  .desc{
    width: 482px;
    font-size: 24px;
    line-height: 45px;
  }
  button{
  width: 506px;
  height: 98px;
  background: rgba(20, 118, 149, 0.65);
  box-shadow: 0px 4px 4px rgba(20, 118, 149, 0.27);
  border-radius: 10px;
  margin-bottom: 500px;
  border: 0px solid;
}
.button{
  font-family: "Gutenberg";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color:white
}
}
</style>
