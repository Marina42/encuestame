define([
     "dojo/_base/declare",
     "dijit/_WidgetBase",
     "dijit/_TemplatedMixin",
     "dijit/_WidgetsInTemplateMixin",
     "me/core/main_widgets/EnmeMainLayoutWidget",
     "me/web/widget/rated/Comment",
     "me/web/widget/rated/RatedOperations",
     "me/web/widget/rated/UsersProfile",
     "me/core/enme",
     "dojo/text!me/web/widget/rated/templates/profile-rate.html" ],
    function(
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    main_widget,
    comment,
    ratedOperations,
    userProfile,
    _ENME,
     template) {

  return declare([ _WidgetBase, _TemplatedMixin, ratedOperations,  main_widget, _WidgetsInTemplateMixin], {

      // template string.
      templateString : template,

      /*
      *
      */
     service : 'encuestame.service.list.rate.profile',

     /*
      *
      */
     _key : ["profile"],

    /*
     *
     */
    postCreate : function() {
      if (this.service != null) {
          this._loadItems();
      }
     },

     /*
      *
      */
      _createItem : function(item) {
          var widget = new userProfile({
              data : item
          });
          return widget.domNode;
      },

      /*
       * comment params.
       */
      getParams : function() {
          return { status : true };
      }
  });
});

//dojo.provide("encuestame.org.core.commons.rated.RatedProfile");
//
//dojo.require('encuestame.org.core.commons');
//dojo.require("encuestame.org.core.commons.rated.RatedOperations");
//dojo.require("encuestame.org.core.shared.utils.AccountPicture");
//
//dojo.declare(
//    "encuestame.org.core.commons.rated.RatedProfile",
//    [encuestame.org.core.commons.rated.RatedOperations],{
//
//    /*
//     * template.
//     */
//     templatePath: dojo.moduleUrl("encuestame.org.core.commons.rated", "templates/profile-rate.html"),
//

//});
//
//
//dojo.declare(
//    "encuestame.org.core.commons.rated.UsersProfile",
//    [encuestame.org.main.EnmeMainLayoutWidget],{
//
//     /*
//      *
//      */
//     templatePath: dojo.moduleUrl("encuestame.org.core.commons.rated", "templates/profile-item.html"),
//
//     /*
//      *
//      */
//     data : null,
//
//     postCreate : function(){
//     }
//
//});