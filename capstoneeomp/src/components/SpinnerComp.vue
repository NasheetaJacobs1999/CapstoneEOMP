<template>
    <div class="loader">
        <span></span>
    </div>
</template>
<script>
export default {
    name: "LoaderComp"
}
</script>

<style scoped>
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
}

.loader span {
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    animation: spin 1.5s linear infinite, glow 1.5s ease-in-out infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 10px #3498db, 0 0 20px #3498db, 0 0 30px #3498db, 0 0 40px #3498db;
    }
    50% {
        box-shadow: 0 0 20px #3498db, 0 0 30px #3498db, 0 0 40px #3498db, 0 0 50px #3498db;
    }
}
</style>