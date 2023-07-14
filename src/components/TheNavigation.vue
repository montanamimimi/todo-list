<template>
    <header> 
        <nav id="nav">        
            <router-link :to="{ name: 'Tasks'}">Tasks</router-link>
            <router-link :to="{ name: 'About'}">About</router-link>
        </nav>
    </header>

</template>

<style>

    #nav {
        display: flex;
        justify-content: center;
        width: 100%;    
        margin-top: 24px;
        padding-inline-start: 0;
        /* position: sticky;
        top: 0;
        background-color: white;
        z-index: 1 */
    }

    #nav a {
        padding: 6px 12px;
        text-decoration: none;
        color: rgb(93, 93, 93);
    }

    #nav a:hover {
        color: black;
        font-weight: 600;
    }

    #nav .router-link-active {
        color: black;
        font-weight: 600;
    }


</style>