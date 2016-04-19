FlowRouter.route("/home", {
	name: "officerProfile",
	action() {
    BlazeLayout.render('mainLayout', {main: 'officerProfileView'});
  }
});


