import type { IObjective } from '$lib/interfaces/objective.interface';

const objectivesMock: IObjective[] = [
	{
		index: 0,
		title: 'Step 1',
		objectives: ['Objective 1', 'Objective 2'],
		imageSrc: 'path/to/image1.jpg',
	},
	{
		index: 1,
		title: 'Step 2',
		objectives: ['Objective 3', 'Objective 4'],
		imageSrc: 'path/to/image2.jpg',
	},
];

export default objectivesMock;
