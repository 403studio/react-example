var OrderDetailContainer = React.createClass({
	render: function() {
		return (
			<div className="col-md-4">
				<div className="panel panel-default">
					<div className="panel-heading">订单明细</div>
					<div className="panel-body" id="order-detail-container">
						<div className="row order-goods-detail">
							<div className="col-md-4">深深乌龙</div>
							<div className="col-md-2">1</div>
							<div className="col-md-3">12</div>
							<div className="col-md-3">12.00</div>
							<div className="col-md-12 text-right">
								<small className="btn btn-tiny btn-warning">加冰</small>
								<small className="btn btn-tiny btn-warning">常温</small>
							</div>
						</div>

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
				<CategoryList category={this.props.category}  />
				<FlagList flag={this.props.flag} />
				<GoodsList goods={this.props.goods} />
			</div>
		);
	}
});

var CategoryList = React.createClass({
	render: function() {
		var categoryNode = this.props.category.map(function(category) {
			return (<span key={category.id} className="btn btn-lg btn-success">{category.category_name}</span>);
		});
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
	render: function() {
		var flagNode = this.props.flag.map(function(flag) {
			return (<span key={flag.key} className="btn btn-sm btn-warning">{flag.value}</span>);
		});
		return (
			<div className="col-md-12 block" id="flag-list">
				{flagNode}
			</div>
		);
	}
});

var GoodsList = React.createClass({
	render: function() {
		var goodsNode = this.props.goods.map(function(goods) {
			return (
				<div key={goods.id} className="goods-detail btn btn-default">
					<span>{goods.goods_name}</span>
				</div>
			);
		});
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
				{key: 1, value: "常温"}, 
				{key: 2, value: "加冰"},
				{key: 3, value: "加热"}
			],
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
	render: function() {
		return (
			<div className="row">
				<OrderDetailContainer />
				<GoodsContainer goods={this.state.goods} category={this.state.category} flag={this.state.flag} />
			</div>
		);
	}
});

ReactDOM.render(
  	<OrderBox />,
  	document.getElementById('example')
);