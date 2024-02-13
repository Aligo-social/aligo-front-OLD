import React, { useRef } from "react"

const AutoResizeTextarea = () => {
	const textareaRef = useRef(null)

	const handleInput = () => {
		const textarea = textareaRef.current

		if (textarea) {
			textarea.style.height = "auto"
			textarea.style.height = `${Math.min(textarea.scrollHeight, 10 * 16)}px`
		}
	}

	return (
		<textarea
			ref={textareaRef}
			className="textarea textarea-primary w-full transition-all"
			rows={1}
			onInput={handleInput}
			placeholder="Votre message ici"
		></textarea>
	)
}

export default AutoResizeTextarea
