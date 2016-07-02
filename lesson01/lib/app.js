var OrderDetailContainer = React.createClass({
	displayName: "OrderDetailContainer",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-md-4" },
			"OrderDetailContainer"
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
			null,
			"CategoryList"
		);
	}
});

var FlagList = React.createClass({
	displayName: "FlagList",

	render: function () {
		return React.createElement(
			"div",
			null,
			"FlagList"
		);
	}
});

var GoodsList = React.createClass({
	displayName: "GoodsList",

	render: function () {
		return React.createElement(
			"div",
			null,
			"GoodsList"
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