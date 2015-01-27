 

var ViewMyModel=function(first,last,email)
{
this.firstName=ko.observable(first);
this.lastName=ko.observable(last);
this.email_id=ko.observable(email);
this.fullName=ko.pureComputed(function(){return this.firstName() + " " + this.lastName() },this);
};



