Implemented Feature:
-----------

1. When you read email:
if the email has someone's tungle.me public url in the message and 
click the url on ZimbraWebClient, popup window is displayed on zimbra pages and the widget
provided by Tungle.Me is loaded into the window.
By the widget you can check and book the schedule of someone who owns 
the public url while checking your own schedule on Zimbra.
Without this zimlet, when you click the public url, tungle.me page is loaded into other tab,
or other window than zimbra's.

2. When you compose email:
your tungle.me public url can be added to the message you are writing by pushing the tungle.me public url button on toolbar.

3. When you register your tungle.me public url to Zimbra:
click tungle.me icon in the Zimlets panel on the lower-left of the Zimbra client interface and put your tungle.me name into the text box.
Then you can use tungle.me public url button with your tungle.me public url.

Planed Feature:
-----------

+tungle.me public url button
When you compose email and push this button, your tungle.me public url will be
added to the message you are writing.
=> done


Note:
-----------

+When you delpoy this zimlet with zimlets which have similar URL match patterns 
like com_zimbra_url zimlet, you have to set priority for them.
See below about how to set up:
http://wiki.zimbra.com/index.php?title=ZimletUtil#Priority

+Test was done only for FF3.6 and ZD2.0 on Mac OS X 10.5.

+When you load tungle.me widget, you could notice a javascript error which could be only for Japanese environment.
But you will not have any problem for booking someone's schedule by the widget. I am still investigating on that issue.
If it gets clear, I will put this zimlet on the gallery.
 
