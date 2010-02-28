<!--
***** BEGIN LICENSE BLOCK *****

Copyright 2010 Yutaka Obuchi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

***** END LICENSE BLOCK *****
-->


<%
 String tungle_name = request.getParameter("tungle_name");
 %>
<html>
<head>
<script type="text/javascript">
window.onload = function(){
	this.tgl_glb_obj.onclickFunction(document.getElementsByClassName("tungle-me")[0]);
	var scheEl = document.getElementsByClassName("tgl_me_schedule")[0];
	scheEl.style.left = "0px";
	}

</script></head>
<body>
<div class="tungle-me" teml=<%=tungle_name%> />
<script src="https://www.tungle.com/portal/js/plugins/tungle.mwmWidget.js" type="text/javascript"></script>
</body>
</html>
