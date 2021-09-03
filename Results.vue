<template>
    <div class="results">
        <div style="width:100%;height:0;padding-bottom:56%;position:absolute;">
            <iframe :src="getImageSrc(score)" width="30%" height="30%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>Votre résultat :<span :class="getClassName(score)" > {{score}}</span> / 10</p>
        <p class="getText(text)"></p>
    </div>
</template>

<script>


export default {
    name: 'Results',
    props: ["score"],
    methods: {
        getClassName(score) {
            if (score > 5) {
                return 'perfectScore';
            }
            if (score == 5) {
                return 'goodScore';
            }
            if (score < 5) {
                return 'idiot';
            }
            return null;
        },
        getImageSrc(score) {
            if (score > 5) {
                return 'https://giphy.com/embed/3o72FcJmLzIdYJdmDe';
            }
            if (score == 5) {
                return 'https://giphy.com/embed/9xijGdDIMovchalhxN';
            }
            return 'https://giphy.com/embed/35EpkElYuNCaXzLXNA';
        },
        getText(text) {
        if (score > 5) {
                return 'On a une bonne et une mauvaise nouvelle. La mauvaise, c’est que maintenant on sait que t’as pas de vie. La bonne, c’est que ça rend plus intelligent. GG Champion !';
            }
            if (score == 5) {
                return 'C’est bien tenté, n’abandonne pas, crois en toi et tu peux faire des grandes choses. T’as ni échoué, ni réussi, et ça c’est beau.';
            }
            if (score < 5) {
                return 'Alors... Bah, à ta place on se dirait que ça va, c’est rien c’est la rue, puis c’est qu’un quizz à la con fait par des idiots, les questions étaient nazes et c’est pas ta faute. Puis après tu pourras retourner à ta vie géniale, mais aime nous un peu quand même stp. Non j’déconne : NOOOOOOOOOOOB !';
            }
            return null;
        },



        }
    }

</script>
<style scoped>

p{
    font-weight:bold ;
    position : absolute ;
 margin-left:200px ;
    text-align: center;
}
.idiot {
color : red
}
.goodScore{
color : yellow
}
.perfectScore{
color : green
}
</style>
