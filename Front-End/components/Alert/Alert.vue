<template>
    <b-row class="row" >
        <b-col class="col-md-3"></b-col>
        <b-col class="col-md-6">
            <b-alert variant="danger" show><slot></slot></b-alert>
        </b-col>
    </b-row>
</template>
<script>
   
    export default {
        name: "Alert",
        components: {
           
        },
    }

</script>