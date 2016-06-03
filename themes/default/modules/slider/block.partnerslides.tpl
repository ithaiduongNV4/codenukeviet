<!-- BEGIN: main -->
<script type="text/javascript">
	$(document).ready(function() {
	  $("#partner").owlCarousel({
		navigation : true,
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,1]
	  });
	});
</script>
<h3>Sản phẩm của chúng tôi</h3>
<div id="partner">
	<!-- BEGIN: loop -->
	<div class="item"><img src="{DATA.image}" alt="{DATA.title}"></div>
	<!-- END: loop -->
</div>
<!-- END: main -->