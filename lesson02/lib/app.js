var OrderDetailContainer = React.createClass({
	displayName: "OrderDetailContainer",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-4" },
			React.createElement(
				"div",
				{ className: "panel panel-default" },
				React.createElement(
					"div",
					{ className: "panel-heading" },
					"订单明细"
				),
				React.createElement(
					"div",
					{ className: "panel-body", id: "order-detail-container" },
					React.createElement(
						"div",
						{ className: "row order-goods-detail" },
						React.createElement(
							"div",
							{ className: "col-md-4" },
							"深深乌龙"
						),
						React.createElement(
							"div",
							{ className: "col-md-2" },
							"1"
						),
						React.createElement(
							"div",
							{ className: "col-md-3" },
							"12"
						),
						React.createElement(
							"div",
							{ className: "col-md-3" },
							"12.00"
						),
						React.createElement(
							"div",
							{ className: "col-md-12 text-right" },
							React.createElement(
								"small",
								{ className: "btn btn-tiny btn-warning" },
								"加冰"
							),
							React.createElement(
								"small",
								{ className: "btn btn-tiny btn-warning" },
								"常温"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"div",
							{ className: "col-md-12 text-right" },
							"合计:32.00"
						)
					),
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
							"button",
							{ className: "btn btn-success" },
							"结账出单"
						)
					)
				)
			)
		);
	}
});

var GoodsContainer = React.createClass({
	displayName: "GoodsContainer",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-8" },
			React.createElement(CategoryList, null),
			React.createElement(FlagList, null),
			React.createElement(GoodsList, null)
		);
	}
});

var CategoryList = React.createClass({
	displayName: "CategoryList",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-12", id: "category-list" },
			React.createElement(
				"span",
				{ className: "btn btn-lg btn-danger" },
				"最热"
			),
			React.createElement(
				"span",
				{ className: "btn btn-lg btn-danger" },
				"推荐"
			),
			React.createElement(
				"span",
				{ className: "btn btn-lg btn-success" },
				"奶茶"
			),
			React.createElement(
				"span",
				{ className: "btn btn-lg btn-success" },
				"咖啡"
			)
		);
	}
});

var FlagList = React.createClass({
	displayName: "FlagList",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-12 block", id: "flag-list" },
			React.createElement(
				"span",
				{ className: "btn btn-sm btn-warning" },
				"常温"
			),
			React.createElement(
				"span",
				{ className: "btn btn-sm btn-warning" },
				"加冰"
			),
			React.createElement(
				"span",
				{ className: "btn btn-sm btn-warning" },
				"加热"
			)
		);
	}
});

var GoodsList = React.createClass({
	displayName: "GoodsList",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-12 block", id: "goods-list" },
			React.createElement(
				"div",
				{ className: "goods-detail btn btn-default" },
				React.createElement(
					"span",
					null,
					"燕麦兰香"
				)
			),
			React.createElement(
				"div",
				{ className: "goods-detail btn btn-default" },
				React.createElement(
					"span",
					null,
					"生生乌龙"
				)
			),
			React.createElement(
				"div",
				{ className: "goods-detail btn btn-default" },
				React.createElement(
					"span",
					null,
					"幽兰拿铁"
				)
			),
			React.createElement(
				"div",
				{ className: "goods-detail btn btn-default" },
				React.createElement(
					"span",
					null,
					"卡布奇诺"
				)
			)
		);
	}
});

var OrderBox = React.createClass({
	displayName: "OrderBox",

	render: function () {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(OrderDetailContainer, null),
			React.createElement(GoodsContainer, null)
		);
	}
});

ReactDOM.render(React.createElement(OrderBox, null), document.getElementById('example'));