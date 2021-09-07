<template>
  <div class="hello">
    <navbar/>
    <main>
      <timer @time-out="timeIsOut" v-bind:stopTimer="stopTimer"/>
      <p>{{this.difficulty}}</p>
      
        <question 
            v-if="gameOver" 
            v-bind:question="question" 
            @next-question="nextQuestion"
            @answered="answered"
            v-bind:questionNumber="questionNumber" 
            v-bind:score="score"
        />
        <results v-else :score="score"/>
    </main>
  </div>
</template>

<script>
import Timer from './timer'
import Question from './Question'
import Results from './Results'
import Navbar from './Navbar'

export default {
    name: 'Quizz',
    components: {
        'timer': Timer,
        'question': Question,
        'results': Results,
        'navbar': Navbar
    },
    props: ["difficulty"],
    created() {
            this.difficulty = this.$route.params.difficulty;
        },
    data() {
        return {
            "question": null,
            "questionNumber": 0,
            "questionSerie": null,
            "score": 0,
            "stopTimer": false,
            "gameOver": false,
            "hasAnswered": false,
            "userAnswer": null,
            "questionsByCat":[
                {
                    "cat": 'animes',
                    "questionsList":[
                        {
                        "id": 1,
                        "difficulty": 'easy',
                        "question": 'Quelle est la phrase préférée de Naruto ? (Naruto)',
                        "answer": [
                            { "a": 'Sakka Yarouze!', "isValidAnswer": false },
                            { "a": 'Dattebayo!', "isValidAnswer": true },
                            { "a": 'Shine!', "isValidAnswer": false },
                            { "a": 'Yosha!', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 2,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom du titan d\'Eren ? (L\'Attaque des Titans)',
                        "answer": [
                            { "a": 'Le Titan Supérieur', "isValidAnswer": false },
                            { "a": 'Le Titan Marteau', "isValidAnswer": false },
                            { "a": 'Le Titan Colossal', "isValidAnswer": false },
                            { "a": 'Le Titan Assaillant', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 3,
                        "difficulty": 'easy',
                        "question": 'Quel est l\'aliment préféré de Ryuk ? (Death Note)',
                        "answer": [
                            { "a": 'Pomme', "isValidAnswer": true },
                            { "a": 'Poire', "isValidAnswer": false },
                            { "a": 'Kebab', "isValidAnswer": false },
                            { "a": 'P\'tit wrap', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 4,
                        "difficulty": 'easy',
                        "question": 'Quelle lettre de l\'alphabet a de l\'importance ? (One Piece)',
                        "answer": [
                            { "a": 'La réponse G', "isValidAnswer": false },
                            { "a": 'La réponse X', "isValidAnswer": false },
                            { "a": 'La réponse S', "isValidAnswer": false },
                            { "a": 'La réponse D', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 5,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom du parasite de Shinichi ? (Parasite)',
                        "answer": [
                            { "a": 'Migi', "isValidAnswer": true },
                            { "a": 'Alcatraz', "isValidAnswer": false },
                            { "a": 'Nigo', "isValidAnswer": false },
                            { "a": 'Shin', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 6,
                        "difficulty": 'easy',
                        "question": 'Dans l\'imaginaire de Kagami, qui est le gardien de la porte de la 2ème zone ? (Kuroko No Basket)',
                        "answer": [
                            { "a": 'Lui-même', "isValidAnswer": false },
                            { "a": 'Katsuki', "isValidAnswer": false },
                            { "a": 'Aomine', "isValidAnswer": false },
                            { "a": 'Kuroko', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 7,
                        "difficulty": 'easy',
                        "question": 'Quelle est la raison pour laquelle le principal préfère les fesses aux seins ? (Prison School)',
                        "answer": [
                            { "a": 'Parce que.', "isValidAnswer": false },
                            { "a": 'Car les seins sont des contrefaçons des fesses', "isValidAnswer": true },
                            { "a": 'Car il a été traumatisé', "isValidAnswer": false },
                            { "a": 'Car il adore dormir dessus', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 8,
                        "difficulty": 'easy',
                        "question": 'En quoi se transforme Blair? (Soul Eater)',
                        "answer": [
                            { "a": 'En libellule', "isValidAnswer": false },
                            { "a": 'En wrap MacDo', "isValidAnswer": false },
                            { "a": 'En chat', "isValidAnswer": true },
                            { "a": 'En dragon', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 9,
                        "difficulty": 'easy',
                        "question": 'Quel est le prenom de N ? (Death Note)',
                        "answer": [
                            { "a": 'Near', "isValidAnswer": true },
                            { "a": 'Nier', "isValidAnswer": false },
                            { "a": 'Nero', "isValidAnswer": false },
                            { "a": 'Nire', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 10,
                        "difficulty": 'easy',
                        "question": 'Pourquoi Miko est en compétition avec Miki ? (Devilman Crybaby)',
                        "answer": [
                            { "a": 'Pour rien', "isValidAnswer": false },
                            { "a": 'Par orgueil', "isValidAnswer": false },
                            { "a": 'Par jalousie', "isValidAnswer": false },
                            { "a": 'Pour le droit de porter son prénom', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 11,
                        "difficulty": 'easy',
                        "question": 'Qui possède des pouvoirs de 2e et 3e génération ? (Fire Force)',
                        "answer": [
                            { "a": 'Shinra', "isValidAnswer": false },
                            { "a": 'Benimaru', "isValidAnswer": true },
                            { "a": 'Arthu', "isValidAnswer": false },
                            { "a": 'Hibana', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 12,
                        "difficulty": 'easy',
                        "question": 'Quel est le prenom de Kyubi ? (Naruto)',
                        "answer": [
                            { "a": 'Gyuki', "isValidAnswer": false },
                            { "a": 'Feunard', "isValidAnswer": false },
                            { "a": 'Kurama', "isValidAnswer": true },
                            { "a": 'Saiken', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 13,
                        "difficulty": 'easy',
                        "question": 'Pourquoi il ne faut pas abuser du Mangekyuu Sharingan ? (Naruto)',
                        "answer": [
                            { "a": 'Car il rend fou', "isValidAnswer": false },
                            { "a": 'Car il transforme en monstre', "isValidAnswer": false },
                            { "a": 'Car il rend aveugle', "isValidAnswer": true },
                            { "a": 'Car il ne s\'arrêtera jamais', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 14,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom de la planète de Piccolo ? (DBZ)',
                        "answer": [
                            { "a": 'Vegeta', "isValidAnswer": false },
                            { "a": 'Namek', "isValidAnswer": true },
                            { "a": 'Piccolo', "isValidAnswer": false },
                            { "a": 'Verde', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 15,
                        "difficulty": 'easy',
                        "question": 'Dans quel univers se trouvent Goku et sa bande ? (Dragon Ball Super)',
                        "answer": [
                            { "a": 'Le 7', "isValidAnswer": true },
                            { "a": 'Le 6', "isValidAnswer": false },
                            { "a": 'Le 23', "isValidAnswer": false },
                            { "a": 'Le 42', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 16,
                        "difficulty": 'easy',
                        "question": 'Quel est le but des frères Elric ? (Fullmetal Alchimist: BH)',
                        "answer": [
                            { "a": 'Trouver le plus grand Trésor', "isValidAnswer": false },
                            { "a": 'Obtenir la Pierre Philosophale', "isValidAnswer": true },
                            { "a": 'Devenir les plus puissants', "isValidAnswer": false },
                            { "a": 'Avoir la connaissance infinie', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 17,
                        "difficulty": 'easy',
                        "question": 'Qui est désigné comme "The First Child"? (Neon Genesis Evangelion)',
                        "answer": [
                            { "a": 'Shinji Ikari', "isValidAnswer": false },
                            { "a": 'Asuka Soryu Langley', "isValidAnswer": false },
                            { "a": 'Rei Ayanami', "isValidAnswer": true },
                            { "a": 'Misato Katsuragi', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 18,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom de Barbe Blanche ? (One Piece)',
                        "answer": [
                            { "a": 'C\'est son vrai nom', "isValidAnswer": false },
                            { "a": 'Edward Newgate', "isValidAnswer": true },
                            { "a": 'Edisson Naestar', "isValidAnswer": false },
                            { "a": 'Edgar Norisuke', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 19,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom de Barbe Noire ? (One Piece)',
                        "answer": [
                            { "a": 'Marco D. Reach', "isValidAnswer": false },
                            { "a": 'Michael D. Seach', "isValidAnswer": false },
                            { "a": 'Michel D. Peach', "isValidAnswer": false },
                            { "a": 'Marshall D. Teach', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 20,
                        "difficulty": 'easy',
                        "question": 'Quel est le nom de l\'équipe de Sora et Shiro ? (No Game, No Life)',
                        "answer": [
                            { "a": 'Les Vides', "isValidAnswer": false },
                            { "a": 'Les Blancs', "isValidAnswer": true },
                            { "a": 'Les Fantômes', "isValidAnswer": false },
                            { "a": 'Les Absents', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 21,
                        "difficulty": 'easy',
                        "question": 'Combien y a-t-il de Bladers Légendaires ? (Beyblade)',
                        "answer": [
                            { "a": '4', "isValidAnswer": false },
                            { "a": '16', "isValidAnswer": false },
                            { "a": '10', "isValidAnswer": true },
                            { "a": '20', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 22,
                        "difficulty": 'easy',
                        "question": 'Comment s\'appellent les techniques ultimes ? (Fate)',
                        "answer": [
                            { "a": 'Hyper extravagances', "isValidAnswer": false },
                            { "a": 'Royales chimères', "isValidAnswer": false },
                            { "a": 'Ultimes utopies', "isValidAnswer": false },
                            { "a": 'Nobles fantasmes', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 23,
                        "difficulty": 'easy',
                        "question": 'Que se passe-t-il si Sora et Shiro sont séparés ? (No Game, No Life)',
                        "answer": [
                            { "a": 'Ils arrêtent de respirer', "isValidAnswer": false },
                            { "a": 'Ils s\'enfuient', "isValidAnswer": false },
                            { "a": 'Ils sont perdus et deviennent fous', "isValidAnswer": true },
                            { "a": 'Ils changent de personnalité', "isValidAnswer": false }
                        ] 
                    },
                    
                    {
                        "id": 24,
                        "difficulty": 'medium',
                        "question": 'Quel est le nom du 2e sabre que Zoro ? (One Piece)',
                        "answer": [
                            { "a": 'Shisui', "isValidAnswer": false },
                            { "a": 'Yubashiri', "isValidAnswer": false },
                            { "a": 'Sandai Kitetsu', "isValidAnswer": true },
                            { "a": 'Wado Ichimonji', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 25,
                        "difficulty": 'medium',
                        "question": 'Quel est le personnage principal de Fairy Tail ?',
                        "answer": [
                            { "a": 'Lucy Heartfillia', "isValidAnswer": true },
                            { "a": 'Natsu Dragneel', "isValidAnswer": false },
                            { "a": 'Grey Fullbuster', "isValidAnswer": false },
                            { "a": 'Erza Scarlett', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 26,
                        "difficulty": 'medium',
                        "question": 'Combien de prédécesseurs a eu le One For All ? (My Hero Academia)',
                        "answer": [
                            { "a": '7', "isValidAnswer": false },
                            { "a": '8', "isValidAnswer": true },
                            { "a": '9', "isValidAnswer": false },
                            { "a": '10', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 27,
                        "difficulty": 'medium',
                        "question": 'Laquelle de ces spécialités du Nen n\'existe pas ? (Hunter X Hunter)',
                        "answer": [
                            { "a": 'Emission', "isValidAnswer": false },
                            { "a": 'Renforcement', "isValidAnswer": false },
                            { "a": 'Matérialisation', "isValidAnswer": false },
                            { "a": 'Concentration', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 28,
                        "difficulty": 'medium',
                        "question": 'Quelle est la constellation sur le torse de Ken ? (Hokuto no Ken)',
                        "answer": [
                            { "a": 'Le Pégase', "isValidAnswer": false },
                            { "a": 'La Petite Ourse', "isValidAnswer": false },
                            { "a": 'La Grande Ourse', "isValidAnswer": true },
                            { "a": 'Andromède', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 29,
                        "difficulty": 'medium',
                        "question": 'Quel est le nom de la 5e Porte? (Naruto)',
                        "answer": [
                            { "a": 'La Rétention', "isValidAnswer": true },
                            { "a": 'La Guérison', "isValidAnswer": false },
                            { "a": 'La Contemplation', "isValidAnswer": false },
                            { "a": 'La Vie', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 30,
                        "difficulty": 'medium',
                        "question": 'Comment s\'appelle le pharaon qui habite le Puzzle du Millénium ? (Yu-Gi-Oh)',
                        "answer": [
                            { "a": 'Botem', "isValidAnswer": false },
                            { "a": 'Atem', "isValidAnswer": true },
                            { "a": 'Kantem', "isValidAnswer": false },
                            { "a": 'Zitem', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 31,
                        "difficulty": 'medium',
                        "question": 'Quel est le prénom de M dans Death Note ? (Death Note)',
                        "answer": [
                            { "a": 'Miro', "isValidAnswer": false },
                            { "a": 'Melo', "isValidAnswer": true },
                            { "a": 'Malo', "isValidAnswer": false },
                            { "a": 'Maso', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 32,
                        "difficulty": 'medium',
                        "question": 'Quel est le nom du pouvoir innée de Gojo ? (Jujustu Kaisen)',
                        "answer": [
                            { "a": 'La porte de la Rétention', "isValidAnswer": false },
                            { "a": 'Obtenir la Pierre Philosophale', "isValidAnswer": false },
                            { "a": 'Ils sont perdus et deviennent fous', "isValidAnswer": false },
                            { "a": 'Infini', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 33,
                        "difficulty": 'medium',
                        "question": 'Comment s\'appelle l\'homme qui est devenu un dragon après les avoir décimé ? (Fairy Tail)',
                        "answer": [
                            { "a": 'Ignir', "isValidAnswer": false },
                            { "a": 'Animus', "isValidAnswer": false },
                            { "a": 'Atlas Flame', "isValidAnswer": false },
                            { "a": 'Acnologia', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 34,
                        "difficulty": 'medium',
                        "question": 'Comment s\'appelle le fruit du démon de Trafalgar D Law ? (One Piece)',
                        "answer": [
                            { "a": 'Le fruit de l\'ablation', "isValidAnswer": false },
                            { "a": 'Le fruit du scalpel', "isValidAnswer": false },
                            { "a": 'Le fruit du bistouri', "isValidAnswer": true },
                            { "a": 'Le fruit de la suture', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 35,
                        "difficulty": 'medium',
                        "question": 'Quel est le nom du fantome de Jun Tao, la soeur de Ren Tao ? (Shaman King)',
                        "answer": [
                            { "a": 'Lee Pyron', "isValidAnswer": true },
                            { "a": 'Chuck Pyron', "isValidAnswer": false },
                            { "a": 'Jackie Pyron', "isValidAnswer": false },
                            { "a": 'Goku Pyron', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 36,
                        "difficulty": 'medium',
                        "question": 'Comment s\'appelle le pouvoir du héros principal Kurogane Ikki? (Rakudai Kishi No Cavalry)',
                        "answer": [
                            { "a": 'Perfect Touch', "isValidAnswer": false },
                            { "a": 'Perfect Smell', "isValidAnswer": false },
                            { "a": 'Perfect Vision', "isValidAnswer": true },
                            { "a": 'Perfect Audition', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 37,
                        "difficulty": 'medium',
                        "question": 'Qu\'a fait Luffy pour surpasser Oz ? (One Piece)',
                        "answer": [
                            { "a": 'Du sport', "isValidAnswer": false },
                            { "a": 'Beaucoup manger', "isValidAnswer": false },
                            { "a": 'Absorber 100 ombres', "isValidAnswer": true },
                            { "a": 'Forcer Hogback à le booster', "isValidAnswer": false }
                        ] 
                    },
                    { //14
                    "id": 38,
                        "difficulty": 'medium',
                        "question": 'Quelle techique à 3 sabres Zoro a utilisé pour vaincre Kaku ? (One Piece)',
                        "answer": [
                            { "a": 'Enbima Yonezu Oni Giri', "isValidAnswer": false },
                            { "a": 'Ougi: Sanzen Sekai', "isValidAnswer": false },
                            { "a": 'Ashur"a": Ichibugin', "isValidAnswer": true },
                            { "a": 'Nigori-Zake', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 39,
                        "difficulty": 'medium',
                        "question": 'Comment est appelée la "race des démons" ? (Attack of Titans)',
                        "answer": [
                            { "a": 'Les Eldiens', "isValidAnswer": true },
                            { "a": 'Les Renégats', "isValidAnswer": false },
                            { "a": 'Les Mahr', "isValidAnswer": false },
                            { "a": 'Les Enfants du Démon', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 40,
                        "difficulty": 'medium',
                        "question": 'Quelle est la profession de Yû ? (Kore Wa Zombie Desu Ka ?)',
                        "answer": [
                            { "a": 'Magicienne', "isValidAnswer": false },
                            { "a": 'Nécromancienne', "isValidAnswer": true },
                            { "a": 'Shinigami', "isValidAnswer": false },
                            { "a": 'Vampire-ninja', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 41,
                        "difficulty": 'medium',
                        "question": 'Comment se nomme le Dieu du monde de Disboard ? (No Game No Life)',
                        "answer": [
                            { "a": 'Old Deus', "isValidAnswer": false },
                            { "a": 'Sylph', "isValidAnswer": false },
                            { "a": 'Playlord', "isValidAnswer": false },
                            { "a": 'Tet', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 42,
                        "difficulty": 'medium',
                        "question": 'Quel péché capital a trahi Gluttony pour tenter de manger sa pierre philosophale? (FM"a":BH)',
                        "answer": [
                            { "a": 'Pride', "isValidAnswer": true },
                            { "a": 'Greed', "isValidAnswer": false },
                            { "a": 'Wrath', "isValidAnswer": false },
                            { "a": 'Lust', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 43,
                        "difficulty": 'medium',
                        "question": 'Que fait le frère de Mob pour espérer devenir plus fort ? (Mob Psycho 100)',
                        "answer": [
                            { "a": 'Devenir fou', "isValidAnswer": false },
                            { "a": 'Manger des fantômes', "isValidAnswer": false },
                            { "a": 'Absorber de l\'énergie psychique', "isValidAnswer": false },
                            { "a": 'Se laisser posséder par Ekubo(Smile)', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 44,
                        "difficulty": 'medium',
                        "question": 'Qui est le réalisateur de Your Name ? ',
                        "answer": [
                            { "a": 'Chieko Misaka', "isValidAnswer": false },
                            { "a": 'Makoto Shinkai ', "isValidAnswer": true },
                            { "a": 'Mamoru Hosada', "isValidAnswer": false },
                            { "a": 'Hayao Miyazaki', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 45,
                        "difficulty": 'medium',
                        "question": 'Quel âge a Kanna Kamui ? (Kobayashi Dragon\'s Maid) ',
                        "answer": [
                            { "a": '9 ans', "isValidAnswer": false },
                            { "a": '150 ans', "isValidAnswer": false },
                            { "a": '300 ans', "isValidAnswer": true },
                            { "a": '450 ans', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 46,
                        "difficulty": 'medium',
                        "question": "Qui est l'auteur de JoJo's Bizzare Adventures ? (JoJo) ",
                        "answer": [
                            { "a": 'Rechi Kazuki', "isValidAnswer": false },
                            { "a": 'Akira Toriyama', "isValidAnswer": false },
                            { "a": 'Hirohiko Araki', "isValidAnswer": true },
                            { "a": 'Yukito Ayatsuji', "isValidAnswer": false }
                        ] 
                    },
                        {
                            "id": 47,
                        "difficulty": 'hard',
                        "question": 'Comment se nomme le courrier que reçoivent les personnes de 16 ans ? (Love and Lies) ',
                        "answer": [
                            { "a": 'la déclaration d\'imposition', "isValidAnswer": false },
                            { "a": 'La déclaration d\'indépendance', "isValidAnswer": false },
                            { "a": 'L\'avis gouvernemental', "isValidAnswer": true },
                            { "a": 'L\'avis de travail', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 48,
                        "difficulty": 'hard',
                        "question": 'Comment s\'appelle le personnage vivant dans l\'application ? (Sacrificial Vote) ',
                        "answer": [
                            { "a": 'Lusty', "isValidAnswer": false },
                            { "a": 'Rerorero', "isValidAnswer": false },
                            { "a": 'Jigsaw', "isValidAnswer": true },
                            { "a": 'Neo-boureau', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 49,
                        "difficulty": 'hard',
                        "question": 'A la fin de l\'anime, combien de membres Uzumaki ont été montrés ? (Naruto Shippuden)',
                        "answer": [
                            { "a": '3', "isValidAnswer": false },
                            { "a": '5', "isValidAnswer": true },
                            { "a": '4', "isValidAnswer": false },
                            { "a": 'Seulement 1', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 50,
                        "difficulty": 'hard',
                        "question": 'Quel surnom se donne Shun Kaido ? (Saiki)',
                        "answer": [
                            { "a": "La Lame Obscure", "isValidAnswer": false },
                            { "a": "L'Arme des Ténèbres", "isValidAnswer": false },
                            { "a": "L'Ombre vengeresse", "isValidAnswer": false },
                            { "a": "L'Aile Noire", "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 51,
                        "difficulty": 'hard',
                        "question": 'Quel est le surnom de Yujiro Hanma ? (Baki)',
                        "answer": [
                            { "a": "L'Ogre", "isValidAnswer": true },
                            { "a": 'Le Monstre', "isValidAnswer": false },
                            { "a": 'La Bête', "isValidAnswer": false },
                            { "a": 'Le Démon', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 52,
                        "difficulty": 'hard',
                        "question": 'Quelle personnalité célèbre se trouve dans Baki ?',
                        "answer": [
                            { "a": 'Teddy Riner', "isValidAnswer": false },
                            { "a": 'Undertaker', "isValidAnswer": false },
                            { "a": 'Mohammed Ali', "isValidAnswer": true },
                            { "a": 'Hoàng Nghi', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 53,
                        "difficulty": 'hard',
                        "question": 'Quelle technique unique Luffy a-t-il utilisé pour vaincre Don Accino ? (One Piece)',
                        "answer": [
                            { "a": 'Gum Gum Rush Gatling', "isValidAnswer": true },
                            { "a": 'Gum Gum Bazooka 1 000 000°C', "isValidAnswer": false },
                            { "a": 'Gum Gum Super Rocket', "isValidAnswer": false },
                            { "a": 'Gum Gum Jet Pistol', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 54,
                        "difficulty": 'hard',
                        "question": 'Quel est le vrai prénom de Yû ? (Kore Wa Zombie Desu Ka ?)',
                        "answer": [
                            { "a": 'David Coperfield', "isValidAnswer": false },
                            { "a": 'Johnson Deathkill', "isValidAnswer": false },
                            { "a": 'Eucliwood Hellscythe', "isValidAnswer": true },
                            { "a": 'Frankestein Grey', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 55,
                        "difficulty": 'hard',
                        "question": ' Que faut-il exécuter pour éviter la malédiction de la classe 3-3 ? (Another) ',
                        "answer": [
                            { "a": 'Ignorer un élève', "isValidAnswer": true },
                            { "a":'Tuer un camarade', "isValidAnswer": false },
                            { "a": 'Faire une prière', "isValidAnswer": false },
                            { "a": 'Devenir un professeur', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 56,
                        "difficulty": 'hard',
                        "question": ' Combien y a-t-il de races dans le monde de Disboard ? (No Game, No Life) ',
                        "answer": [
                            { "a": 'ils ont pas d\'race', "isValidAnswer": false },
                            { "a": '8', "isValidAnswer": false },
                            { "a": '16', "isValidAnswer": true },
                            { "a": '42', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 57,
                        "difficulty": 'hard',
                        "question": ' Où est-ce que Aikuro, le professeur principal de Ryuko, veut emmener cette dernière ? (Kill la Kill) ',
                        "answer": [
                            { "a": 'Nudist Beach', "isValidAnswer": true },
                            { "a": 'a akihabara', "isValidAnswer": false },
                            { "a": 'a la japan expo', "isValidAnswer": false },
                            { "a": 'Au karaoké', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 58,
                        "difficulty": 'hard',
                        "question": ' Comment sont surnommés les couples montant dans les FranXX ? (Darling in the FranXX) ',
                        "answer": [
                            { "a": 'Fleures pourpres', "isValidAnswer": false },
                            { "a": 'Les Elitas', "isValidAnswer": false },
                            { "a": 'Les Slayer', "isValidAnswer": false },
                            { "a": 'Pistil-étamine', "isValidAnswer": true },
                        ] 
                    },
                    {
                        "id": 59,
                        "difficulty": 'hard',
                        "question": ' Comment Toichiro Suzuki est-il devenu plus fort ? (Mob Psycho 100) ',
                        "answer": [
                            { "a": "en méditant", "isValidAnswer": false },
                            { "a": 'En faisant des pompes', "isValidAnswer": false },
                            { "a": "En stockant de l'énergie psychique pendant 20 ans", "isValidAnswer": true },
                            { "a": 'En absorbant l\'energie psychique des gens', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 60,
                        "difficulty": 'hard',
                        "question": ' Quel personnage a été affecté par les ténèbres de L-Drago ? (Beyblade) ',
                        "answer": [
                            { "a": 'Gingka', "isValidAnswer": false },
                            { "a": 'Tsubasa', "isValidAnswer": true },
                            { "a": 'Kyoya', "isValidAnswer": false },
                            { "a": 'Kuroko', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 61,
                        "difficulty": 'hard',
                        "question": ' Quel est le coup spécial que Gingka a utilisé pour vaincre Ryuga ? (Beyblade) ',
                        "answer": [
                            { "a": 'Galaxie Attack', "isValidAnswer": false },
                            { "a": 'Galaxie Meteor', "isValidAnswer": false },
                            { "a":'Galaxie Impact', "isValidAnswer": false },
                            { "a": 'Galaxie Nova', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 62,
                        "difficulty": 'hard',
                        "question": ' Que representent les pièces ? (Gleipnir) ',
                        "answer": [
                            { "a": 'Des extraterrestres', "isValidAnswer": true },
                            { "a": 'Des ames', "isValidAnswer": false },
                            { "a": 'de l\'argent', "isValidAnswer": false },
                            { "a": 'des pouvoirs', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 63,
                        "difficulty": 'hard',
                        "question": " Quel était l'objet le plus cher de Zero Two dans sa jeunesse ?  (Darling in the FranXX) ",
                        "answer": [
                            { "a": 'une clé', "isValidAnswer": false },
                            { "a": 'une photo de ça famille', "isValidAnswer": false },
                            { "a": 'Un livre de contes', "isValidAnswer": true },
                            { "a": 'une barette a cheveux', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 64,
                        "difficulty": 'hard',
                        "question": " Comment s'appelle le systeme pour acceder a l'underworld ? (Sao Alicization) ",
                        "answer": [
                            { "a": 'acces UW', "isValidAnswer": false },
                            { "a": 'nerv gear', "isValidAnswer": false },
                            { "a": 'Médicuboid', "isValidAnswer": false },
                            { "a": 'Soul Translator', "isValidAnswer": true }
                        ] 
                    },
                    {
                        "id": 65,
                        "difficulty": 'hard',
                        "question": " Comment s'appelle la source d'énergie que produit la toupie Twisted Tempo ? (Beyblade) ",
                        "answer": [
                            { "a": 'L\'énergie spirale', "isValidAnswer": true },
                            { "a": 'L\'energie cinétique', "isValidAnswer": false },
                            { "a": 'L\'énergie tournoyante', "isValidAnswer": false },
                            { "a": 'L\'énergie cosmique', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 66,
                        "difficulty": 'hard',
                        "question": " Combien de parasites y'a t'il dans le corps de Goto ? (Parasyte) ",
                        "answer": [
                            { "a": '0', "isValidAnswer": false },
                            { "a": '3', "isValidAnswer": false },
                            { "a": '5', "isValidAnswer": true },
                            { "a": '8', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 67,
                        "difficulty": 'hard',
                        "question": " Comment s'appelle le jeu dans lequel est bloqué le héros principal ? (Overlord) ",
                        "answer": [
                            { "a": 'Yggdrasil', "isValidAnswer": true },
                            { "a": 'Valhalla', "isValidAnswer": false },
                            { "a": 'Nifelheim', "isValidAnswer": false },
                            { "a": 'Jotunheim', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 68,
                        "difficulty": 'hard',
                        "question": " D'où proviennent les pouvoirs des ESPers ? (Charlotte) ",
                        "answer": [
                            { "a": 'de la planete ESP154', "isValidAnswer": false },
                            { "a": 'de la pretresse Charlotte', "isValidAnswer": false },
                            { "a": 'De la comète Charlotte', "isValidAnswer": true },
                            { "a": 'Du Laboratoire ESP', "isValidAnswer": false }
                        ] 
                    },
                    {
                        "id": 69,
                        "difficulty": 'hard',
                        "question": ' Qui est la 2ème personne à mourir ? (Danganronpa) ',
                        "answer": [
                            { "a": 'Ikosobo Mukuru', "isValidAnswer": false },
                            { "a": 'Makuro Ikusoba', "isValidAnswer": false },
                            { "a": 'Ikusabo Mukura', "isValidAnswer": false },
                            { "a": 'Mukuro Ikusaba', "isValidAnswer": true }
                        ] 
                    }
                    ]
                }
            ],
        }
    },
    methods: {
        fisherShuffle( arr )
        {
        for(var i =arr.length-1 ; i>0 ;i--)
            {
            var j = Math.floor( Math.random() * (i + 1) ); //random index
             [ arr[i],arr[j]]=[arr[j],arr[i]]; // swap
            }
        return arr;
        },
        timeIsOut() {
            this.gameOver = false;
        },
        getRandomQuestions() {
            
            this.gameOver = true;
            let animeQuestions = this.questionsByCat[0].questionsList.filter( question => question.difficulty == this.difficulty );
            console.log(this.fisherShuffle( animeQuestions )[0]);
            this.questionSerie = this.fisherShuffle( animeQuestions ).slice(0, 10);
            this.question = this.questionSerie[this.questionNumber++];
        },
        answered(answer, index) {
            this.userAnswer = index;
            if (!this.hasAnswered && answer.isValidAnswer) {
                this.score++;
            }
            this.hasAnswered = true;
        },
        nextQuestion() {
            
            if (this.questionNumber == this.questionSerie.length) {
                // Questions terminées
                this.question = null;
                this.stopTimer = true;
                this.gameOver = false;
                return null;
            }
            this.question = this.questionSerie[this.questionNumber++];
            this.hasAnswered = false;
            this.userAnswer = null;
        }
    },
    computed: {
        easyAnimeQuizz() {
            let animeQuestions = this.questionsByCat[0].questionsList.filter( question => question.difficulty == 'easy' );
            let randomQuestions = this.fisherShuffle( animeQuestions );
            let quizzQuestions = [];
            for( let i = 0; i < 10; i++ )
            {
                quizzQuestions.push( randomQuestions[i] );
            }
            return quizzQuestions;
        },
        mediumAnimeQuizz() {
            let animeQuestions = this.questionsByCat[0].questionsList.filter( question => question.difficulty == 'medium' );
            let randomQuestions = this.fisherShuffle( animeQuestions );
            let quizzQuestions = [];
            for( let i = 0; i < 10; i++ )
            {
                quizzQuestions.push( randomQuestions[i] );
            }
            return quizzQuestions;
        },
        hardAnimeQuizz() {
            let animeQuestions = this.questionsByCat[0].questionsList.filter( question => question.difficulty == 'hard' );
            let randomQuestions = this.fisherShuffle( animeQuestions );
            let quizzQuestions = [];
            for( let i = 0; i < 10; i++ )
            {
                quizzQuestions.push( randomQuestions[i] );
            }
            return quizzQuestions;
        }
    },
    mounted() {
        return this.getRandomQuestions();
    }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

span {
    font-size: 24px;
    color: gold;
    background-color: #E6E6E6;
    font-weight: bold;
    border: 2px solid lightskyblue;
    padding: 10px;
    margin: 10px;
}

.timeRunningOut {
    font-size: 24px;
    color: red;
    font-weight: bold;
}

.question {
    border: 3px dashed gold;
    width: 60%;
}

button span{
    color:white
}

header {
    margin-bottom: 18px;
    padding-top: 20px;
    background: rgba(20, 118, 149, 1);
    padding-bottom:20px;
}

p {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: lime;
}


</style>
