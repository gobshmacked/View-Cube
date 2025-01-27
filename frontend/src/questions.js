//x is left/right x+ is right and x- is left
//y is libertarian, authoritarian y+ is authoritarian and y- is libertarian

export const questions = [
	{
		question: 'Healthcare should be freely provided by the government',
		subheading: 'Economics',
		x: -1,
		y: 0,
		u: 1,
		r: 0,
	},
	{
		question: 'Education should be freely provided by the government',
		x: -1,
		y: 0,
		u: 1,
		r: 0,
	},
	{
		question: 'All businesses should be owned and run by the government',
		x: -2,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: `The government should tax it's citizens`,
		x: -2,
		y: 0,
		u: 1,
		r: -1,
	},
	{
		question: 'The government should apply a progressive income tax',
		extraInfo: 'higher earners are taxed at a higher rate',
		x: -1,
		y: 0,
		u: 1,
		r: -1,
	},
	{
		question: 'The government should apply a progressive land tax',
		x: -1,
		y: 0,
		u: 1,
		r: -1,
	},
	{
		question: `The government should apply a tax on people's wealth`,
		x: -1,
		y: 0,
		u: 1,
		r: -1,
	},
	{
		question: `The government should apply a tax on inheritance`,
		x: -1,
		y: 0,
		u: 1,
		r: -1,
	},
	{
		question: 'A universal basic income is a good idea',
		extraInfo: 'Everyone is given money from the government',
		x: -1,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'The government should provide everything for free',
		x: -2,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'There should be a currency',
		x: 2,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'The government should fund entertainment e.g the arts and museums',
		x: -1,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'There should be tariffs on products imported from overseas',
		extraInfo: 'tax on imported products',
		x: -1,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'The free market should allocate resources rather than the government',
		x: 3,
		y: 0,
		u: 0,
		r: 0,
	},
	{
		question: 'Gay marriage should be legal',
		subheading: 'Individual Rights',
		x: 0,
		y: -2,
		u: 1,
		r: 1,
	},
	{
		question: 'Marijuana should be legal for medical use',
		x: 0,
		y: -1,
		u: 1,
		r: 1,
	},
	{
		question: 'Marijuana should be legal for recreational use',
		x: 0,
		y: -1,
		u: 0,
		r: 1,
	},
	{
		question: 'Murder should be allowed with no consequences',
		x: 0,
		y: -3,
		u: -1,
		r: -1,
	},
	{
		question: 'Abortion should be legal',
		x: 0,
		y: -2,
		u: 1,
		r: 1,
	},
	{
		question: 'People should be free to believe whatever they want',
		x: 0,
		y: -1,
		u: 0,
		r: 1,
	},
	{
		question: 'My beliefs should be forced onto others',
		x: 0,
		y: 2,
		u: -1,
		r: 1,
	},
	{
		question: 'Corporations should be required to pay for any pollution they create',
		x: -1,
		y: 0.5,
		u: 1,
		r: 0,
	},
	{
		question: 'The government should break up monopolies',
		x: -1,
		y: 0.5,
		u: 1,
		r: 0,
	},
	{
		question: 'Corporations should be allowed to lie to the public',
		x: 0,
		y: -1,
		u: -1,
		r: -1,
	},
	{
		question: 'Hitting children is an acceptable form of punishment',
		x: 0,
		y: -1,
		u: -1,
		r: 0,
	},
	{
		question: `The government should be allowed to spy on it's population`,
		x: 0,
		y: 1,
		u: -1,
		r: -1,
	},
	{
		question: 'The death penalty should be used on the worst criminals',
		x: 0,
		y: 1,
		u: 0,
		r: 0,
	},
	{
		question: 'All guns should be be legal for those without criminal records',
		x: 0,
		y: -1,
		u: -1,
		r: 1,
	},
	{
		question: 'Some guns should be be legal for those without criminal records',
		x: 0,
		y: -1,
		u: 0,
		r: 1,
	},
	{
		question: 'The aim of prisons should be to punish wrongdoers',
		x: 1,
		y: 1,
		u: -1,
		r: 0,
	},
	{
		question: 'All types of sex between consenting adults should be legal',
		x: 0,
		y: -1,
		u: 1,
		r: 1,
	},
	{
		question: 'Full time workers should get at least 4 weeks of paid time off per year',
		x: -1,
		y: 0,
		u: 1,
		r: 0,
	},
	{
		question: `I would prefer to help someone from my country than someone from another country`,
		subheading: "Morality",
		x: 0,
		y: 0,
		u: -1,
		r: 0,
	},
	{
		question: 'I would prefer to spend money on leisure activites than helping the poor',
		x: 0,
		y: 0,
		u: -3,
		r: 3,
	},
	{
		question: 'It is okay to steal food if you are starving',
		x: 0,
		y: 0,
		u: 2,
		r: 0,
	},
	{
		question: 'If something is legal then it is always right to do',
		x: 0,
		y: 1,
		u: -1,
		r: -1,
	},
	{
		question: 'I would sacrifice 1 person to save 5',
		x: 0,
		y: 0,
		u: 3,
		r: 0,
	},
	{
		question: 'I would muder 1 innocent person to save 5',
		x: 0,
		y: 0,
		u: 3,
		r: -1,
	},
	{
		question: 'I would sacrifice 1 person I know to save 5 strangers',
		x: 0,
		y: 0,
		u: 3,
		r: -3,
	},
]