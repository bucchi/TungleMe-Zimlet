/*
 * ***** BEGIN LICENSE BLOCK *****
 *
 * Copyright 2010 Yutaka Obuchi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.

 * ***** END LICENSE BLOCK *****
 */

function Net_Bucchi_TungleMe() {
}

Net_Bucchi_TungleMe.prototype = new ZmZimletBase();
Net_Bucchi_TungleMe.prototype.constructor = Net_Bucchi_TungleMe;

Net_Bucchi_TungleMe.prototype.init =
function() {
	DBG.println(AjxDebug.DBG1, "Net_Bucchi_TungleMe initialized.");
};

Net_Bucchi_TungleMe.BASE_PUBLIC_URL="http://tungle.me/";

Net_Bucchi_TungleMe.prototype.clicked = function(spanElement, contentObjText, matchContext, event){

    var view = new DwtComposite(this.getShell());

    var canvasData = {
        title: contentObjText,
		view:  view,
		type:  "dialog",
		width: "350",
		height:"450"
		};
	var jspurl = this.getResource("tungleme.jsp");
	var tungle_name = contentObjText.replace(Net_Bucchi_TungleMe.BASE_PUBLIC_URL,"");
	
	DBG.println(AjxDebug.DBG1, "display tungle me public schedule of "+tungle_name);
	
	this.makeCanvas(canvasData,jspurl+"?tungle_name="+tungle_name);
  	return true;
};

Net_Bucchi_TungleMe.prototype._createDialog = function(params){
	params.parent = this.getShell();
	params.mode = DwtBaseDialog.MODELESS;
	var dialog = new ZmDialog(params);
	dialog.setSize(380,500);
	return dialog;
};
