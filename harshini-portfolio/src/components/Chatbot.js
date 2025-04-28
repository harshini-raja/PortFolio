import { useState } from "react";
import "../css/Chatbot.css";

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey there! 👋 I'm Harshini's portfolio bot. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const RULES = [
    { keywords: ["name", "who are you"], answer: "My name is Harshini Raja." },
    {
      keywords: ["university", "where are you studying", "college"],
      answer:
        "I'm pursuing my Master's in Computer Science and Engineering at Santa Clara University, graduating in June 2025.",
    },
    {
      keywords: ["undergraduate", "bachelor"],
      answer:
        "I completed my Bachelor's in Computer Science at Visveswaraya Technological University, Bengaluru, India.",
    },
    {
      keywords: ["developer experience", "developer work"],
      answer:
        "As a developer at Santa Clara University's Frugal Innovation Hub, I worked on building bilingual educational apps to support children's math learning in an engaging way.",
    },
    {
      keywords: ["mobile developer", "flutter apps", "bilingual apps"],
      answer:
        "At SCU's Frugal Innovation Hub, I developed bilingual math-learning applications using Flutter and Firebase, aimed at making elementary education fun and accessible for kids.",
    },
    {
      keywords: [
        "skills",
        "technical skills",
        "technologies",
        "what can you do",
      ],
      answer:
        "My skills include Java, JavaScript, Python, SQL, HTML5, CSS, ReactJS, NodeJS, Docker, AWS services (EC2, S3, Lambda, DynamoDB, Amplify, CloudWatch, Textract), MongoDB, SQLite, MySQL, GitHub, Figma, IntelliJ IDEA, Google Colab, Jupyter, Postman, TensorFlow, PyTorch, Streamlit, Flask, Spring Boot, and Flutter.",
    },
    {
      keywords: ["cloud", "aws"],
      answer:
        "I have experience working with AWS services like EC2, S3, Lambda, DynamoDB, Amplify, CloudWatch, and Textract.",
    },
    {
      keywords: [
        "work experience",
        "where have you worked",
        "previous experience",
      ],
      answer:
        "I worked as a Full-Stack Developer at Embit Technologies, an Automation Engineer at Tata Consultancy Services, and a Mobile Developer at Frugal Innovation Hub, Santa Clara University.",
    },
    {
      keywords: ["projects", "project"],
      answer:
        "I have worked on several projects: 1) Facial Recognition System (93% accuracy using PCA and LDA); 2) Distributed Message Queue System inspired by Kafka; 3) Multi-Tech Semantic Engine using Flask, Streamlit, and NLP; 4) Resume AI Scanner with AWS Textract; 5) Bilingual Math-Learning App with Flutter.",
    },
    {
      keywords: ["facial recognition"],
      answer:
        "The Facial Recognition System used SVM, KNN, and ensemble methods along with PCA and LDA to achieve 93% accuracy.",
    },
    {
      keywords: ["distributed system", "kafka", "queue"],
      answer:
        "The Distributed Message Queue System I built uses Java and Docker, featuring leader election, partitioning, and fault tolerance.",
    },
    {
      keywords: ["semantic engine", "semantic search"],
      answer:
        "The Multi-Tech Semantic Engine combines Flask, Streamlit, and NLP techniques like TF-IDF and cosine similarity to enable efficient documentation search.",
    },
    {
      keywords: ["resume scanner", "ai resume"],
      answer:
        "The Resume AI Scanner matches resumes to job descriptions using AWS Textract, Amplify, and keyword comparison techniques.",
    },
    {
      keywords: ["flutter", "bilingual app", "mobile app"],
      answer:
        "I built a bilingual math learning app using Flutter and Firebase to help elementary students learn math in an engaging and fun way.",
    },
    {
      keywords: ["automation", "testing", "playwright"],
      answer:
        "I have experience with automation testing using Playwright and TypeScript at TCS, improving testing efficiency by 30%.",
    },
    {
      keywords: ["machine learning", "ml", "ai"],
      answer:
        "I applied machine learning techniques in my facial recognition and sentiment analysis projects.",
    },
    {
      keywords: ["languages"],
      answer: "I know Java, Python, JavaScript, SQL, HTML5, and CSS.",
    },
    {
      keywords: ["github", "code"],
      answer: "Here's my GitHub: https://github.com/harshini-raja",
    },
    {
      keywords: ["hobby", "hobbies"],
      answer:
        "In my free time, I enjoy exploring new tech trends, working on personal coding projects, reading, and traveling!",
    },
    {
      keywords: ["favorite technology", "favorite tech"],
      answer:
        "I'm passionate about cloud computing, distributed systems, and machine learning technologies.",
    },
    {
      keywords: ["favorite language"],
      answer:
        "My favorite programming languages are Java and Python because of their versatility and power!",
    },
    {
      keywords: ["motivation", "what motivates you"],
      answer:
        "I'm driven by solving real-world problems through technology and continuously learning new skills to grow as a developer.",
    },
    {
      keywords: ["strength", "strongest skill"],
      answer:
        "My strongest skills are problem-solving, distributed systems design, and full-stack development with a focus on scalability.",
    },
    {
      keywords: ["future goals", "where do you see yourself"],
      answer:
        "I aspire to work as a Software Engineer specializing in scalable systems and AI applications at a leading tech company.",
    },
  ];

  const fetchLocalReply = (userInput) => {
    const input = userInput.toLowerCase();
    for (let rule of RULES) {
      for (let keyword of rule.keywords) {
        if (input.includes(keyword)) {
          return rule.answer;
        }
      }
    }
    return "I'm not sure how to answer that yet! Try asking about my skills, experience, projects, or hobbies!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setTyping(true);

    const botReply = fetchLocalReply(userMsg);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
      setTyping(false);
    }, 500); // Simulate typing delay
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chat-header" onClick={() => setOpen(!open)}>
          {open ? "Close Chat ❌" : "Chat with Me 💬"}
        </div>
        {open && (
          <>
            <div className="chat-body">
              <div className="messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.from}`}>
                    <div className="message-bubble">{msg.text}</div>
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..."
                />
                <button onClick={handleSend}>Send</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
