var OrderDetailContainer = React.createClass({
	render: function() {
		return (
			<div className="col-md-4">OrderDetailContainer</div>
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
			<div>CategoryList</div>
		);
	}
});

var FlagList = React.createClass({
	render: function() {
		return (
			<div>FlagList</div>
		);
	}
});

var GoodsList = React.createClass({
	render: function() {
		return (
			<div>GoodsList</div>
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