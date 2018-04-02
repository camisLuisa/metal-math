import Component from 'metal-jsx';
import Mathematics from './components/Mathematics';

class App extends Component {
	render() {
		const {lvlDefault, lvls, showResult, countdown} = this.state;

		return (
			<div class="app">
				<Mathematics countdown={10} lvlDefault={'normal'} lvls={[
					{
						internalLabel: 'easy',
						label: '😸 easy',
						maxNumber: 3,
						operators: [
							{ label: '+', },
							{ label: '-', }
						],
						lostPoints: 1
					},
					{
						internalLabel: 'normal',
						label: '🧠 normal',
						maxNumber: 5,
						operators: [
							{ label: '+', },
							{ label: '-', },
							{ label: 'x', }
						],
						lostPoints: 2
					},
					{
						internalLabel: 'hard',
						label: '💀 hard',
						maxNumber: 10,
						operators: [
							{ label: '+', },
							{ label: '-', },
							{ label: 'x', }
						],
						lostPoints: 3
					}
				]} showResult={false} />

			</div>
		);
	}
}

export { App };
export default App;
