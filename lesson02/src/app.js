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
				<CategoryList  />
				<FlagList />
				<GoodsList />
			</div>
		);
	}
});

var CategoryList = React.createClass({
	render: function() {
		return (
			<div className="col-md-12" id="category-list">
				<span className="btn btn-lg btn-danger">最热</span>
				<span className="btn btn-lg btn-danger">推荐</span>
				<span className="btn btn-lg btn-success">奶茶</span>
				<span className="btn btn-lg btn-success">咖啡</span>
			</div>
		);
	}
});

var FlagList = React.createClass({
	render: function() {
		return (
			<div className="col-md-12 block" id="flag-list">
				<span className="btn btn-sm btn-warning">常温</span>
				<span className="btn btn-sm btn-warning">加冰</span>
				<span className="btn btn-sm btn-warning">加热</span>
			</div>
		);
	}
});

var GoodsList = React.createClass({
	render: function() {
		return (
			<div className="col-md-12 block" id="goods-list">
				<div className="goods-detail btn btn-default">
					<span>燕麦兰香</span>
				</div>
				<div className="goods-detail btn btn-default">
					<span>生生乌龙</span>
				</div>
				<div className="goods-detail btn btn-default">
					<span>幽兰拿铁</span>
				</div>
				<div className="goods-detail btn btn-default">
					<span>卡布奇诺</span>
				</div>
			</div>
		);
	}
});

var OrderBox = React.createClass({
	render: function() {
		return (
			<div className="row">
				<OrderDetailContainer />
				<GoodsContainer />
			</div>
		);
	}
})

ReactDOM.render(
  	<OrderBox />,
  	document.getElementById('example')
);