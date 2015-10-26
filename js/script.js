var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);

accordian.controller("SummaryController" , function($scope){
	$scope.init = function () {
		$('.sd-block').click(function(){
		   	if(! $(this).hasClass('active') ){
		   		$('.sd-block').removeClass('active');
		   		$(this).addClass('active');
		   		if( $(this).hasClass('summary') ) {
			    	$("#mytask-grid").removeClass("mytask").addClass("summary");
			    }
			    else if ($(this).hasClass('mytask') ) {
			    	$("#mytask-grid").removeClass("summary").addClass("mytask");
			    }
		 	}
		});
	}
});

grid.controller("mytaskGridCtrl", function($scope){
	$scope.tooltipOpt = {"a":"Approve", "m":"Modify", "r":"Reject", "position":"top"};
	$scope.mainGridOptions = {
		dataSource: [ 
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						}
					],
		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false,
			sortable: true
		},
		filterable: {
			extra: false,
			mode: "menu"
        },
		pageable: {
			refresh: true,
			pageSizes: false,
			buttonCount: 2,
			pageSize: 10,
			info: true,
			messages: {
			  display: " {10}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [
		{
			title: "<input type='checkbox' name='before-taskid' value=''>",
			template: "<div class='amr-checks'><input type='checkbox' class='scheck'> </div>",
		},
		{
			field: "taskId",
			title: "Task ID",
			width: 200
		}, {
			field: "Event",
			title: "Event"
		}, 
		{
			field: "description",
			title: "Description"
		},
		{
			field: "originator",
			title: "Originator"
		},  
		{
			field: "type",
			title: "Type"
		}, 
		{
			field: "dateTime",
			title: "Date / Time"
		}],
		dataBinding: function(e) {
				var $pagerRefresh = $('.k-pager-refresh').clone();
				var $grid = $('#mytask-grid.mytask');
				//$('.k-pager-refresh').remove();
				$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

				$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

				$grid.on('click','.scheck',function(){
					if( this.checked ){
						$(this).closest('tr').addClass('active');
						$('.approval-buttons').addClass('active');
					} else {
						$(this).closest('tr').removeClass('active');
						if( $('.scheck:checked').length == 0 ) {
							$('.approval-buttons').removeClass('active');
						}
					}
				})
				
				$grid.on('click','.comment-btn',function(){		
					$('.commentbox,.sm-overlay').show();
					$('.sm-overlay,.sum-lightbox .buttons button').click(function(){
						$('.commentbox,.sm-overlay').hide()
					})
				});
		}
	};

	
});

$(document).ready(function(){
	$("#select-type").on('change', function(){
		if($(this).val() == "Item Create"){
			$("#mytask-grid .filter-by ul").css('display','inline-block');
		}else if($(this).val() == "Select Type"){
			$("#mytask-grid .filter-by ul").hide();
		}
	});

	$("#mytask-grid").on('click', 'i.fa-caret-down', function(){
		$(".item-create-dropdown").hide();
		$(this).siblings(".item-create-dropdown").show();
	});
});

	/* summary ctrl */
grid.controller("summaryGridCtrl", function($scope){
$scope.mainGridOptions = {
	dataSource: [ 
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				},
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				},
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				},
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				},
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				},
				{ ProcessId: "123456789876456",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Originator Name",
				 DateTime: "Originator Name"
				}],
	height: 180,
	sortable: true,
	selectable: "row",
	scrollable: false,
	columnMenu: {
		columns: false
	},
	filterable: {
		extra: false
    },
	pageable: {
		refresh: true,
		pageSizes: false,
		buttonCount: 2,
		pageSize: 5,
		info: true,
		messages: {
		  display: " {2}"
		}
	},
	dataBound: function() {
		this.expandRow(this.tbody.find("tr.k-master-row"));
	},
	columns: [
	{
		field: "ProcessId",
		title: "ProcessId",
		width: 200
	}, {
		field: "Description",
		title: "Description"
	}, {
		field: "Originator",
		title: "Originator"
	}, {
		field: "Description",
		title: "Description"
	}, {
		field: "Concept",
		title: "Concept"
	}, {
		field: "Type",
		title: "Type"
	}, {
		field: "DateTime",
		title: "Date / Time"
	}],
	dataBinding: function(e) {
			var $pagerRefresh = $('.k-pager-refresh').clone();
			var $grid = $('#mytask-grid.summary');
			$('.k-pager-refresh').remove();
			$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

			$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

			$grid.on('click','.scheck',function(){
				if( this.checked ){
					$(this).closest('tr').addClass('active');
					$('.approval-buttons').addClass('active');
				} else {
					$(this).closest('tr').removeClass('active');
					if( $('.scheck:checked').length == 0 ) {
						$('.approval-buttons').removeClass('active');
					}
				}
			});
	}
};
});



