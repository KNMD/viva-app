
import { ActivityTheme } from '@/types'
import React, { CSSProperties, Component, useEffect, useRef } from 'react'
import styles from '../../BaseActiviyNode.module.css'

type TextAreaProps = {
    themes: ActivityTheme 
    style?: CSSProperties | undefined
    readOnly?: boolean
    value: string
}

const Textarea = (props: TextAreaProps) => {
    
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [props.value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        // onValueChange(event.target.value);
    };
  
    return (
        <div className='node-textarea'>
            <input className={`w-full border-0 font-medium resize-none outline-none rounded px-2 ${styles['theme_title_' + props.themes.colorName]} ${styles['theme_bg_' + props.themes.colorName]} ${styles['theme_text_hover_bg_' + props.themes.colorName]}`}
                style={props.style} 
                value={props.value}
            />
            
        </div>
    )
}

Textarea.displayName = "Textarea"

export default Textarea
