"use client"

import React, { useState } from "react";
import styles from "./chatwithaime.module.css";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [

    {
        text: "Virtually.",
        className: "text-blue-500 dark:text-blue-500",
    },
];

const ChatWithAIMe = () => {
    const [messages, setMessages] = useState([
        { text: "Hello, how can I help you?", sender: "ai" }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!inputMessage.trim()) return;

        const newMessages = [...messages, { text: inputMessage, sender: "user" }];
        setMessages(newMessages);

        setInputMessage("");
        setLoading(true);

        try {
            const response = await fetch("https://w4rw4m5sk7ad6c3jdgu5riuxtm0kyems.lambda-url.us-east-2.on.aws/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ input_message: inputMessage })
            });

            if (response.ok) {
                const data = await response.text();
                setMessages([...newMessages, { text: data, sender: "ai" }]);
            } else {
                throw new Error(`Server responded with status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error occurred while fetching AI response:", error);
            setMessages([...newMessages, { text: "Oops! Something went wrong, please try again.", sender: "ai" }]);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className={styles.chatPage}>
            <h1 className="lg:text-8xl font-bold">
                Meet Me, <TypewriterEffectSmooth words={words} />
            </h1>
            <p>👋 Welcome to the AI chat interaction! Feel free to ask me anything about myself.</p>
            <p>For example, you can ask about my visa status, personal background, lifestyle, and work situation.</p>
            <p>My intelligent persona 🤖 will try to answer any questions related to my job search. 😊</p>
            <p>Example question 1: Could you tell me about your background?</p>
            <p>Example question 2: What&apos;s your notice period?</p>
            <br />
            <div className={styles.chatContainer}>
                <div className={styles.chatMessages}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`${styles.messageCard} ${msg.sender === "user" ? styles.userMessage : ""}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                    {loading && <div className={styles.messageCard}>I am typing...</div>}
                </div>
                <div className={styles.chatInputArea}>
                    <input
                        type="text"
                        className={styles.chatInput}
                        placeholder="Type a message..."
                        value={inputMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                    />
                    <button className={styles.sendButton} onClick={sendMessage} disabled={loading}>
                        Send
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
};

export default ChatWithAIMe;
