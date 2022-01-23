import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewEventForm.module.css';

function NewEventForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const descriptionInputRef = useRef();
	const bitForceInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const enteredBitForce = bitForceInputRef.current.value;

		const eventData = {
			title: enteredTitle,
			image: enteredImage,
			description: enteredDescription,
			bitForce: enteredBitForce,
		};

		props.onAddEvent(eventData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Event Title</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Event Image</label>
					<input type='url' required id='image' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						required
						rows='5'
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.bitforcebutton}>
					<label htmlFor='bitForce'>Bit Force event?</label>
					<input type='checkbox' ref={bitForceInputRef} />
				</div>
				<div className={classes.actions}>
					<button>Add Event</button>
				</div>
			</form>
		</Card>
	);
}

export default NewEventForm;
