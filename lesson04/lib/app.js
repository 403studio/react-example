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
			React.createElement(CategoryList, { onCategoryClick: this.props.onCategoryClick, category: this.props.category }),
			React.createElement(FlagList, { flag: this.props.flag }),
			React.createElement(GoodsList, { filterCategory: this.props.filterCategory, goods: this.props.goods })
		);
	}
});

var CategoryList = React.createClass({
	displayName: "CategoryList",

	onClick: function (e) {
		var category_id = e.target.getAttribute("data-id");
		//console.log(category_id);
		this.props.onCategoryClick(category_id);
	},

	render: function () {
		var categoryNode = this.props.category.map(function (category) {
			return React.createElement(
				"span",
				{ onClick: this.onClick, "data-id": category.id, key: category.id, className: "btn btn-lg btn-success" },
				category.category_name
			);
		}.bind(this));
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
			categoryNode
		);
	}
});

var FlagList = React.createClass({
	displayName: "FlagList",

	render: function () {
		var flagNode = this.props.flag.map(function (flag) {
			return React.createElement(
				"span",
				{ key: flag.key, className: "btn btn-sm btn-warning" },
				flag.value
			);
		});
		return React.createElement(
			"div",
			{ className: "col-md-12 block", id: "flag-list" },
			flagNode
		);
	}
});

var GoodsList = React.createClass({
	displayName: "GoodsList",

	render: function () {
		var goodsNode = this.props.goods.map(function (goods) {
			var filterCategory = this.props.filterCategory;
			if (filterCategory != 0 && filterCategory != goods.category_id) {
				return;
			}
			return React.createElement(
				"div",
				{ key: goods.id, className: "goods-detail btn btn-default" },
				React.createElement(
					"span",
					null,
					goods.goods_name
				)
			);
		}.bind(this));
		return React.createElement(
			"div",
			{ className: "col-md-12 block", id: "goods-list" },
			goodsNode
		);
	}
});

var OrderBox = React.createClass({
	displayName: "OrderBox",

	getInitialState: function () {
		return {
			goods: [{ id: "1", goods_name: "青草悠然", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "15", unit: "杯" }, { id: "2", goods_name: "燕麦兰香", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "12", unit: "杯" }, { id: "3", goods_name: "幽兰拿铁", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "15", unit: "杯" }, { id: "4", goods_name: "声声乌龙", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "14", unit: "杯" }, { id: "5", goods_name: "卡布奇诺", barcode: "0", plucode: "0", category_id: "2", category_name: "咖啡", price: "18", unit: "杯" }],
			category: [{ id: "1", parent_id: "0", category_name: "奶茶", open: "0" }, { id: "2", parent_id: "0", category_name: "咖啡", open: "0" }],
			flag: [{ key: 1, value: "常温" }, { key: 2, value: "加冰" }, { key: 3, value: "加热" }],
			filterCategory: 0
		};
	},

	/**这里是采用jQuery的Ajax从服务器获取数据this.props.url修改成实际的地址就可以
 componentDidMount: function() {
 	$.ajax({
 		url: this.props.url,
 		dataType: "json",
 		cache: false,
 		success: function(data) {
 			this.setState({goods: data.goods});
 			this.setState({category: data.category});
 		}.bind(this),
 		error: function(xhr, status, err) {
 			console.error(this.props.url, status, err.toString);
 		}.bind(this)
 	});
 },
 **/

	handleCategoryClick: function (category_id) {
		this.setState({ filterCategory: category_id });
	},

	render: function () {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(OrderDetailContainer, null),
			React.createElement(GoodsContainer, { onCategoryClick: this.handleCategoryClick, filterCategory: this.state.filterCategory, goods: this.state.goods, category: this.state.category, flag: this.state.flag })
		);
	}
});

ReactDOM.render(React.createElement(OrderBox, null), document.getElementById('example'));