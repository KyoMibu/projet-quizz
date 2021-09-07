<template>
    <div class="question">
        <h2>{{ question.question }}</h2>
        <form>
            <p v-for="(answer, index) in question.answer" :key="index" >
                <input type="radio" name="reponse" @click="$emit('answered', answer, index)"><label for="reponse">{{ answer.a }}</label>
            </p>
        </form>

        <button @click="$emit('next-question')">Question suivante</button>
        <p class="question">Question {{questionNumber}} / 10</p>
        <p class="score">Score {{score}} / 10</p>

    </div>
</template>

<script>
export default {
    name: 'Question',
    props: ['question', 'questionNumber', 'score']
}
</script>

<style scoped>
.wrong {
    color: red;
}
.correct {
    color: blue;
}
button{
    height:50px;
    width:75px;
}

</style>