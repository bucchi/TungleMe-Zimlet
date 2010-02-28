Implemented Feature:
-----------

When you read the email which has someone's tungle.me public url in the message and 
click the url on ZimbraWebClient, popup window is displayed on zimbra pages and the widget
provided by Tungle.Me is loaded into the window.
By the widget you can check and book the schedule of someone who owns 
the public url while checking your own schedule on Zimbra.
Without this zimlet, when you click the public url, tungle.me page is loaded into other tab,
or other window than zimbra's.

Planed Feature:
-----------

+tungle.me public url button
When you compose email and push this button, your tungle.me public url will be
added to the message you are writing.

+

Note:
-----------

+When you delpoy this zimlet with zimlets which have similar URL match patterns 
like com_zimbra_url zimlet, you have to set priority for them.
See below about how to set up:
http://wiki.zimbra.com/index.php?title=ZimletUtil#Priority

+Test was done for FF3.6 only.
