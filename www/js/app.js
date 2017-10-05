angular.module("lapiz_app", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","chart.js","lapiz_app.controllers", "lapiz_app.services"])
	.run(function($ionicPlatform,$window,$interval,$timeout,$ionicHistory,$ionicPopup,$state,$rootScope){

		$rootScope.appName = "Lapiz App" ;
		$rootScope.appLogo = "" ;
		$rootScope.appVersion = "1.0" ;

		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : [localforage.WEBSQL,localforage.INDEXEDDB,localforage.LOCALSTORAGE],
				name : "lapiz_app",
				storeName : "lapiz_app",
				description : "The offline datastore for Lapiz App app"
			});



		});
		$ionicPlatform.registerBackButtonAction(function (e){
			if($ionicHistory.backView()){
				$ionicHistory.goBack();
			}else{
				$state.go("lapiz_app.dashboard");
			}
			e.preventDefault();
			return false;
		},101);
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})
	.filter("strUnscape", ["$sce", function($sce) {
		var div = document.createElement("div");
		return function(text) {
			div.innerHTML = text;
			return $sce.trustAsHtml(div.textContent);
		};
	}])

	.filter("objLabel", function(){
		return function (obj) {
			var new_item = [];
			angular.forEach(obj, function(child) {
				new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v,l) {
					if (indeks !== 0) {
					new_item.push(l);
				}
				indeks++;
				});
			});
			return new_item;
		}
	})
	.filter("objArray", function(){
		return function (obj) {
			var new_items = [];
			angular.forEach(obj, function(child) {
				var new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v){
						if (indeks !== 0){
							new_item.push(v);
						}
						indeks++;
					});
					new_items.push(new_item);
				});
			return new_items;
		}
	})




.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("lapiz_app",{
		url: "/lapiz_app",
			abstract: true,
			templateUrl: "templates/lapiz_app-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("lapiz_app.about_us", {
		url: "/about_us",
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.categoras", {
		url: "/categoras",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-categoras.html",
						controller: "categorasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.categorie123_singles", {
		url: "/categorie123_singles/:id",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-categorie123_singles.html",
						controller: "categorie123_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.categorie_singles", {
		url: "/categorie_singles/:id",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-categorie_singles.html",
						controller: "categorie_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.categories", {
		url: "/categories",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-categories.html",
						controller: "categoriesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.dashboard", {
		url: "/dashboard/:categories",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.faqs", {
		url: "/faqs",
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-faqs.html",
						controller: "faqsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.home", {
		url: "/home",
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.post_bookmark", {
		url: "/post_bookmark",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-post_bookmark.html",
						controller: "post_bookmarkCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.post_singles", {
		url: "/post_singles/:id",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-post_singles.html",
						controller: "post_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.posts", {
		url: "/posts/:categories",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-posts.html",
						controller: "postsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("lapiz_app.users", {
		url: "/users",
		cache:false,
		views: {
			"lapiz_app-side_menus" : {
						templateUrl:"templates/lapiz_app-users.html",
						controller: "usersCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/lapiz_app/dashboard");
});
