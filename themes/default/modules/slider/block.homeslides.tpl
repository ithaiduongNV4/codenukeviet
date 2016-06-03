<!-- BEGIN: main -->
<script src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/responsiveslides.min.js"></script>
<link rel="stylesheet" type="text/css" href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/responsiveslides.css"/>
<script>
    $(function () {
      $("#slider-home").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 1020,
        namespace: "centered-btns"
      });
    });
</script>
<div class="rslides_container">
	<ul class="rslides" id="slider-home">
		<!-- BEGIN: loop -->
		<li>
			<div class="col-md-12">
				<h2>{DATA.title}</h2>
				<p>{DATA.description}</p>
				<p><a href="{DATA.link}" class="button"><i class="fa fa-long-arrow-right"></i> Xem chi tiết</a></p>
			</div>
			<div class="col-md-12">
				<a href="{DATA.link}"><img src="{DATA.image}" alt="{DATA.title}" width="445" height="273" /></a>
			</div>
		</li>
		<!-- END: loop -->
	</ul>
</div>
<!-- END: main -->