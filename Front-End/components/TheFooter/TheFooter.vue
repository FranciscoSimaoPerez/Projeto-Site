<template>
    <!-- Footer -->
	<section id="footer">
		<b-container class="container">
			<b-row class="row">
				<b-col class="col-xs-12 col-sm-12 col-md-12">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</b-col>
				<hr>
			</b-row>	
			<b-row class="row">
				<b-col class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Akai Ito is a Registered MSP/ISO of Madeira, Inc. Portugal</p>
					<p class="h6">&copy All rights Reversed<a class="text ml-2" href="https://lol.com" target="_blank">Akai Ito</a></p>
				</b-col>
				<hr>
			</b-row>	
		</b-container>
	</section>
</template>

<script>
   
    export default {
        name: "TheFooter",
        components: {
           
        },
    }

</script>

<style scoped>
    
    /* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}



#footer {
    background: rgb(240, 188, 67) !important;
}

#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
</style>
