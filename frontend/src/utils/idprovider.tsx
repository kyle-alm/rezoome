class UniqueIDProvider {
	private static instance: UniqueIDProvider;
	private timestamp: number;
	private randomNumbers: Set<number>;

	private constructor() {
		this.timestamp = Date.now();
		this.randomNumbers = new Set();
	}

	public static getInstance(): UniqueIDProvider {
		if (!UniqueIDProvider.instance) {
			UniqueIDProvider.instance = new UniqueIDProvider();
		}
		return UniqueIDProvider.instance;
	}

	public getUniqueId(): number {
		const now = Date.now();
		if (now !== this.timestamp) {
			this.timestamp = now;
			this.randomNumbers.clear();
		}

		let randomNumber;
		do {
			randomNumber = Math.floor(Math.random() * 1000); // Generate a random number in [0, 1000)
		} while (this.randomNumbers.has(randomNumber));

		this.randomNumbers.add(randomNumber);

		const idString = `${this.timestamp}${randomNumber}`;
		return parseInt(idString, 10);
	}
}

export default function getUniqueId(): number {
	return UniqueIDProvider.getInstance().getUniqueId();
}
