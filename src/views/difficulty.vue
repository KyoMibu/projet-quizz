<template>
  <div class="hello">
    <div class="container">
      <header>
        <nav class="flex space">

            <router-link href="" to="/"><button><div class="home"></div>Accueil</button></router-link>
            <router-link href="" to="/categories"><button><div class="book"></div>Catégories</button></router-link>
            <router-link href="" to="/"><button><div class="user"></div>Profile</button></router-link>
        
        </nav>
      </header>
      <main>
           <div class="categorie">Catégorie choisie : <span id="choix"></span></div>
           <div class="desc">Tu commences doucement ou tu veux booster ton égo ?</div>
       <div class="flex">
           <router-link href="" :to='{name:"quizz", params:{ difficulty:"easy" }}' ><button class="button" id="easy" ><img src="../img/peep_white.png" alt="" class="diff"><span>aigre-doux</span></button></router-link>
           <router-link href="" :to="{name:'quizz', params:{ difficulty:`medium` }}"><button class="button" id="normal" ><img src="../img/peep-10.png" alt="" class="diff"><span>poussin balèze</span></button></router-link>
           <router-link href="" :to='{name:"quizz", params:{ difficulty:"hard" }}' ><button class="button" id="hard" ><img src="../img/peep-10-1.png" alt="" class="diff"><span>pimenté</span></button></router-link>
           <router-link href="" :to='{name:"quizz", params:{ difficulty:"random" }}' ><button class="button" id="random" ><img src="../img/peep-10-2.png" alt="" class="diff"><span>kebab mixte</span></button></router-link>
       </div>

       
      </main>
      <footer>

      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Difficulty',
  data() {
    return {
      difficulty: String
    }
  },

}

</script>

<style scoped>

.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
.space{
    margin-bottom: 50px;
}
nav{
    padding-top: 20px;
    background: rgba(20, 118, 149, 1);
    padding-bottom:20px;
}
.home{
    background: url('https://api.iconify.design/bx/bx-home.svg') no-repeat center center / contain;
    width: 60px;
    height: 60px;
    margin: 0;
}
.book{
    background: url('https://api.iconify.design/bx/bx-book.svg') no-repeat center center / contain;
    width: 60px;
    height: 60px;
    margin: 0;
}
.user{
    background: url('https://api.iconify.design/ant-design/user-outlined.svg') no-repeat center center / contain;
    width: 60px;
    height: 60px;
    margin: 0;
}
.button{
    width: 291px;
    height: 350px;
    background: #147695;
    border-radius: 15px;
    position:relative;
    border:0px solid;
}
.diff{
    position:absolute;
    left:50px;
    bottom:70px
}
.categorie{
    font-family: "Sora";
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    padding-bottom: 40px;
}
button span{
    position:absolute;
    bottom:0;
    left:0;
    width: 291px;
    height:50px;
    font-size: 30px;
    line-height: 50px;
    border-radius: 15px;
    font-family: "Sora";
    background: #0d5064;
}
.desc{
    font-family: "Sora";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 60px;
}
nav button{
    border:0px solid;
    background: rgba(20, 118, 149, 0.65);
    font-size: 14px;
    color:white
}
button span{
    color:white
}
@media screen and (max-width: 768px) and (max-height:830px){ 
    .categorie {
      text-align:center;
      font-size:20px;
      font-weight:bold
    } 
    .desc{
      font-size:20px;
      font-weight:bold;
      position:relative;
      bottom:70px;
    }
    
    .button{
      height:175px;
      width:145px;
      position:relative;
      bottom:90px;
      margin-top:20px
      
    }
    .diff {
      height:80px;
      display:block;
      text-align:center;
      
    
    }
    button span{
      width:145px;
      height:50px;
      font-size:15px;
      text-align:center;
    }
    
    .categorie{
      position:relative;
      bottom:35px;
    }
    }

  
</style>