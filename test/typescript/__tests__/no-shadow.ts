
enum States {
	Prepare = 'state-a-gondel--prepare',
	Motion = 'state-a-gondel--motion',
}

export class Gondel {

	private _ctx = document.getElementById('root');

	private _handleMouseOver() {
		if (!this._ctx) {
			return;
		}
		this._ctx.classList.add(States.Prepare);
	}
	private _handleMouseOut() {
		if (!this._ctx) {
			return;
		}
		this._ctx.classList.remove(States.Prepare);
	}
	private _handleChange() {
		if (!this._ctx) {
			return;
		}
		this._ctx.classList.toggle(States.Motion);
	}
}
