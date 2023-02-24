<script lang="ts">
    let a: number = 1;

    const handleClick = () => {
        a++;        
    }
</script>

<div>
    <button on:click={handleClick}>
    { a }
</div>