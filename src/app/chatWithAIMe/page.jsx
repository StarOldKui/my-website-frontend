"use client"

import React, { useState } from "react";
import styles from "./chatwithaime.module.css";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";


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
            const response = await fetch("https://k4mkdiprt7cpjb6dbup5yi3qrq0hjpgc.lambda-url.us-east-2.on.aws/", {
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
            <LampContainer>
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    Meet Me,<br /> Virtually
                </h1>
            </LampContainer>
            <br />
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
