import React from 'react';

const cityCode = 101010100;

class Weather extends React.Component {
	constructor() {
		super(...arguments);

		this.state = {weather: null};
	}

	componentDidMount() {
		const apiUrl = `/data/cityinfo/${cityCode}.html`;
		fetch(apiUrl).then((response) => {
			if(response.status !== 200){
				throw new Error('Fail to get response status '+response.status);
			}

			response.json().then((responseJson) => {
				console.log('展示一下后台返回的数据');
				console.log(responseJson);
				this.setState({weather: responseJson.weatherinfo});
			}).catch((error) => {
				this.setState({weather:null});
			})
		}).catch((error) => {
			this.setState({weather:null});
		});
	}

	//渲染函数
	render() {
		if(!this.state.weather){
			return <div>暂无数据</div>
		}

		const {city,weather,temp1,temp2} = this.state.weather;

		return (
            <div>
             {city} {weather} 最低温度{temp1} 最高温度 {temp2}
            </div>
		)
	}
}

export default Weather;