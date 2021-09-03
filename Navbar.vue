<template>
    <header>
        <nav class="flex space">

            <router-link href="" to="/"><button><div class="home"></div>Accueil</button></router-link>
            <router-link href="" to="/categories"><button><div class="book"></div>Catégories</button></router-link>
            <router-link href="" to="/"><button><div class="user"></div>Profile</button></router-link>
            
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
@font-face {
    font-family: "Gutenberg";
    src: url("../fonts/Gutenberg.ttf");
}
@font-face {
    font-family: "Sora";
    src: url("../fonts/Sora.ttf");
}
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
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
nav button{
    border:0px solid;
    background: rgba(20, 118, 149, 1);
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
.titre{
    padding-top: 20px;
    margin-bottom: 20px;
    font-family: "Gutenberg";
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 54px;
}
.c{
    border-collapse : separate;
    border-spacing : 10px;
}
.player{
    color: orangered
}
.header{
    font-size: 18px;
}
i{
    width: 37.5px;
    height: 32.5px;
}
.categorie{
    display: grid;
    gap: 1rem;
    align-items: stretch;
    justify-items: stretch;
}
.center{
    margin-left: 150px;
    margin-right: auto;
    margin-top: 50px;
}
img{
    width:250px;
    height: 250px;
    border-radius: 15px;
    position:rela
}
td{
    position: relative;
}
.cat{
    width: 250px;
    height: 59px;
    line-height: 59px;
    font-weight: 800;
    color: #E5E5E5;
    font-size: 18px;
    position: absolute;
    bottom: 5px;
    border-radius: 15px;
    background-color: rgba(11, 63, 79, 0.69);;
}
.categories{
    padding-top:80px
}
footer{
    margin-left: auto;
    margin-right: auto;
}
.footer{
    border-collapse : separate;
    border-spacing : 90px;
    margin-top: -70px;
}
main div button{
    width:260px;
    height: 260px;
    background: transparent;
    border:0px solid;
    border-radius:15px;
    position:relative;
    text-align:center
}
@media screen and (max-width: 768px) and (max-height:830px){
    .btn{
        height:175px;
        width:100px;
    }
    .diff{
        height:75px;
        width:75px;

    }
    .cat{
        width:75px
    }
}
</style>