<template>
  <div id="schedule">
    <h1>Schedule</h1>

    <div class="calendar">
    	<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=zips.uakron.edu_t8kdqbjcprls0qcapfcvqu97a8%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=America%2FNew_York" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
	</div>

  </div>
</template>


<style>
#schedule h1 {
  text-align: center;
  margin: 0.5em;
}

h1 {
  text-align: center;
  margin: 0.5em;
}

.calendar{
	text-align: center;
	margin: 0 auto;
}



.calendar{
  position: relative;
  height: 0;
  width: 50%;
  padding-bottom: 50%;
}

.calendar iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 10%;
}

</style>
