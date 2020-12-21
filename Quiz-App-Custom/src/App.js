import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Pakistan?',
			answerOptions: [
				{ answerText: 'Karachi', isCorrect: false },
				{ answerText: 'Lahore', isCorrect: false },
				{ answerText: 'Islamabad', isCorrect: true },
				{ answerText: 'Multan', isCorrect: false },
			],
		},
		{
			questionText: 'Who is PM of Pakistan?',
			answerOptions: [
				{ answerText: 'Nawaz Shareef', isCorrect: false },
				{ answerText: 'Imran Khan', isCorrect: true },
				{ answerText: 'Bilawal Bhutto', isCorrect: false },
				{ answerText: 'Jibran Nasir', isCorrect: false },
			],
		},
		{
			questionText: 'Real name of Superman?',
			answerOptions: [
				{ answerText: 'Kal el', isCorrect: true },
				{ answerText: 'Kal bel', isCorrect: false },
				{ answerText: 'Aaj bel', isCorrect: false },
				{ answerText: 'Parsoo ', isCorrect: false },
			],
		},
		{
			questionText: 'There should be more series like Mandolorian?',
			answerOptions: [
				{ answerText: 'yes', isCorrect: true },
				{ answerText: 'yes', isCorrect: true },
				{ answerText: 'yes', isCorrect: true },
				{ answerText: 'yes', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
