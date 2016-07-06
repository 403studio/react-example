var OrderDetailContainer = React.createClass({
	render: function() {
		var orderGoodsNode = this.props.orderGoods.map(function(goods) {
			var flagNode = goods.flag.map(function(flag) {
				if (flag.checked) {
					return (<small key={flag.key} className="btn btn-tiny btn-warning">{flag.value}</small>);
				}
			});
			return (
				<div className="row order-goods-detail" key={goods.key} >
					<div className="col-md-4">{goods.goods_name}</div>
					<div className="col-md-2">1</div>
					<div className="col-md-3">{goods.price}</div>
					<div className="col-md-3">{goods.price * goods.number}</div>
					<div className="col-md-12 text-right">
						{flagNode}
					</div>
				</div>
			);
		}.bind(this));

		return (
			<div className="col-md-4">
				<div className="panel panel-default">
					<div className="panel-heading">订单明细</div>
					<div className="panel-body" id="order-detail-container">
						{orderGoodsNode}
						<div className="row">
							<div className="col-md-12 text-right">
								合计:32.00
							</div>
						</div>

						<div className="row">
							<button className="btn btn-success">结账出单</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

var GoodsContainer = React.createClass({
	render: function() {
		return (
			<div className="col-md-8">
				<CategoryList onCategoryClick={this.props.onCategoryClick} category={this.props.category}  />
				<FlagList onFlagClick={this.props.onFlagClick} flag={this.props.flag} />
				<GoodsList onGoodsClick={this.props.onGoodsClick} filterCategory={this.props.filterCategory} goods={this.props.goods} />
			</div>
		);
	}
});

var CategoryList = React.createClass({
	onClick: function(e) {
		var category_id = e.target.getAttribute("data-id");
		//console.log(category_id);
		this.props.onCategoryClick(category_id);
	},

	render: function() {
		var categoryNode = this.props.category.map(function(category) {
			return (<span onClick={this.onClick} data-id={category.id} key={category.id} className="btn btn-lg btn-success">{category.category_name}</span>);
		}.bind(this));
		return (
			<div className="col-md-12" id="category-list">
				<span className="btn btn-lg btn-danger">最热</span>
				<span className="btn btn-lg btn-danger">推荐</span>
				{categoryNode}
			</div>
		);
	}
});

var FlagList = React.createClass({
	onClick: function(e) {
		var nodeName = e.target.nodeName;
		var divNode = e.target;
		if (nodeName == "SPAN") {
			divNode = e.target.parentNode;
		}
		var key = divNode.getAttribute("data-key");
		this.props.onFlagClick(key);
	},

	render: function() {
		var flagNode = this.props.flag.map(function(flag) {
			var spanStyle = flag.checked ? {display: "inline"} : {display: "none"};
			return (
				<div className="btn btn-sm btn-warning" data-key={flag.key} key={flag.key} onClick={this.onClick}>
					<span>{flag.value}</span>
					<span style={spanStyle} className="text-success glyphicon glyphicon-ok"></span>
				</div>
			);
		}.bind(this));
		return (
			<div className="col-md-12 block" id="flag-list">
				{flagNode}
			</div>
		);
	}
});

var GoodsList = React.createClass({
	onClick: function(e) {
		var nodeName = e.target.nodeName;
		var divNode = e.target;
		if (nodeName == "SPAN") {
			divNode = e.target.parentNode;
		}
		var goods_id = divNode.getAttribute("data-id");
		this.props.onGoodsClick(goods_id);
	},

	render: function() {
		var goodsNode = this.props.goods.map(function(goods) {
			var filterCategory = this.props.filterCategory;
			if (filterCategory != 0 && filterCategory != goods.category_id) {return}
			return (
				<div onClick={this.onClick} data-id={goods.id} key={goods.id} className="goods-detail btn btn-default">
					<span>{goods.goods_name}</span>
				</div>
			);
		}.bind(this));
		return (
			<div className="col-md-12 block" id="goods-list">
				{goodsNode}
			</div>
		);
	}
});

var OrderBox = React.createClass({
	getInitialState: function() {
		return {
			goods: [
				{id: "1", goods_name: "青草悠然", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "15", unit: "杯"},
				{id: "2", goods_name: "燕麦兰香", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "12", unit: "杯"},
				{id: "3", goods_name: "幽兰拿铁", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "15", unit: "杯"},
				{id: "4", goods_name: "声声乌龙", barcode: "0", plucode: "0", category_id: "1", category_name: "奶茶", price: "14", unit: "杯"},
				{id: "5", goods_name: "卡布奇诺", barcode: "0", plucode: "0", category_id: "2", category_name: "咖啡", price: "18", unit: "杯"}
			],
			category: [
				{id: "1", parent_id: "0", category_name: "奶茶", open: "0"},
				{id: "2", parent_id: "0", category_name: "咖啡", open: "0"}
			], 
			flag: [
				{key: 1, value: "常温", checked: false}, 
				{key: 2, value: "加冰", checked: false},
				{key: 3, value: "加热", checked: false}
			],
			filterCategory: 0,
			orderGoods: [],
		}
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

	handleCategoryClick: function(category_id) {
		this.setState({filterCategory: category_id});
	},

	handleGoodsClick: function(goods_id) {
		var goodsClick = this.state.goods.find(function(value, index, arr) {
			return (value.id == goods_id);
		});
		var orderGoods = this.state.orderGoods;
		var time = (new Date()).getTime();
		var flag = this.state.flag.filter(function(flag) {
			return (flag.checked === true);
		});
		var flagNew = flag.map(function(flag) {
			return ({key: flag.key, value: flag.value, checked: flag.checked})
		});

		var orderGoodsNew = {
			key: time, 
			id: goodsClick.id,
			goods_name: goodsClick.goods_name,
			barcode: goodsClick.barcode,
			plucode: goodsClick.plucode,
			category_id: goodsClick.category_id,
			category_name: goodsClick.category_name,
			price: goodsClick.price,
			unit: goodsClick.unit,
			number: 1,
			flag: flagNew,
		};
		this.setState({orderGoods: orderGoods.concat(orderGoodsNew)});
		this.state.flag.forEach(function(flag) {
			flag.checked = false;
		});
	},

	handleFlagClick: function(key) {
		var flag = this.state.flag;
		var flagClick = flag.find(function(value, index, arr) {
			return (value.key == key);
		});
		flagClick.checked = !flagClick.checked;
		this.setState({flag: flag});
	},

	render: function() {
		return (
			<div className="row">
				<OrderDetailContainer orderGoods={this.state.orderGoods} />
				<GoodsContainer onFlagClick={this.handleFlagClick} onGoodsClick={this.handleGoodsClick} onCategoryClick={this.handleCategoryClick} filterCategory={this.state.filterCategory} goods={this.state.goods} category={this.state.category} flag={this.state.flag} />
			</div>
		);
	}
});

ReactDOM.render(
  	<OrderBox />,
  	document.getElementById('example')
);