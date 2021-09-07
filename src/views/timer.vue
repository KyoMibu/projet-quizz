<template>
    <span :class="getClassName(seconds)">{{ seconds | toMinutes(seconds) }}:{{ seconds | toSeconds(seconds) }}</span>
</template>

<script>
export default {
    name: 'Timer',
    data() {
        return {
            seconds: 60,
        }
    },
    props: ["stopTimer"],
    mounted() {
        return this.handleTime();
    },
    methods: {
        handleTime() {
            let interval = null;
            interval = setInterval(() => {
                if (this.stopTimer) {
                    return () => clearInterval(interval);
                }
                if (!this.seconds) {
                    this.$emit('time-out');
                    return () => clearInterval(interval);
                }
                this.seconds--;
            }, 1000);
            return () => clearInterval(interval);
        },
        getClassName(seconds) {
            if (seconds <= 10) {
                return 'timeRunningOut';
            } 
            return null;
        }
    },
    filters: {
        toMinutes(secondes){
        let minutes = Math.floor(secondes/60);
        if (minutes < 10) {
            return '0' + minutes;
        }
        return minutes;
        },
        toSeconds(secondes){
        secondes %= 60;
        if (secondes < 10) {
            return '0' + secondes;
        }
        return secondes;
        }
    }
}
</script>
