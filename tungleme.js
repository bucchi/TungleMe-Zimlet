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
	
	var widget_url = "https://www.tungle.me/portal/widget.htm"
	var tungle_me_name = contentObjText.replace(Net_Bucchi_TungleMe.BASE_PUBLIC_URL,"");
	
	DBG.println(AjxDebug.DBG1, "display tungle me public schedule of "+tungle_me_name);
	
	this.makeCanvas(canvasData,widget_url+"#"+tungle_me_name);

  	return true;
};

Net_Bucchi_TungleMe.prototype.initializeToolbar =
function(app, toolbar, controller, viewId) {

    if (viewId.indexOf(ZmId.VIEW_COMPOSE) != -1) {
        
        var buttonIndex = 0;
		for (var i = 0; i < toolbar.opList.length; i++) {
                if (toolbar.opList[i] == "COMPOSE_OPTIONS") {
                        buttonIndex = i + 1;
                        break;
                }
        }

        var buttonParams = {
                text    : "Tungle.me URL",
                tooltip: "insert your own Tungle.me public url to mail",
                index: buttonIndex, // position of the button
                image: "TungleMe-toolbarIcon" // icon
        };

        // creates the button with an id and params containing the button details
        var button = toolbar.createOp("TUNGLE_ME_ZIMLET_TOOLBAR_BUTTON", buttonParams);
        button.addSelectionListener(new AjxListener(this, this._setSelectionText));   
    }
};

Net_Bucchi_TungleMe.prototype._createDialog = function(params){
	//create modeless dialog only for loading tungle.me widget
	if(params.title.indexOf("http://tungle.me/")!=-1){
		params.parent = this.getShell();
		params.mode = DwtBaseDialog.MODELESS;
		var dialog = new ZmDialog(params);
		dialog.setSize(380,500);
		return dialog;
	}else{
		params.parent = this.getShell();
		return new ZmDialog(params);
	}
};

Net_Bucchi_TungleMe.prototype._setSelectionText = function(){
	
	var username = this.getUserProperty("my_tungleme_name");
	var user_public_url = Net_Bucchi_TungleMe.BASE_PUBLIC_URL+username;
	var curView = appCtxt.getAppViewMgr().getCurrentView();
	var htmlEditor = curView.getHtmlEditor();
	if(htmlEditor.getMode()==DwtHtmlEditor.HTML){
		var tinyMCE = window.tinyMCE;
		tinyMCE.execCommand("mceInsertContent", false, user_public_url);
	}else if(htmlEditor.getMode()==DwtHtmlEditor.TEXT){
		var input = document.getElementsByTagName("textarea");
		for (var i = 0; i < input.length; i++) {
			if ((input[i].className == "DwtHtmlEditorTextArea") && (input[i].id == htmlEditor.getBodyFieldId())) {
				Dwt.setSelectionText(input[i],user_public_url);
			}
		}
	}
	
};
