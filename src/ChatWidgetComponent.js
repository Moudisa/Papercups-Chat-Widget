import React, {useState} from 'react';
import { ChatWidget, ChatWindow } from '@papercups-io/chat-widget';
import './ChatWidgetComponent.css';
import { AiOutlineMessage, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const ChatWidgetComponent = () => {

  const [showChat, setShowChat] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  //for searching in the FAQ section
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  const toggleFAQ = () => {
    setShowFAQ((prevShowFAQ) => !prevShowFAQ);
    // Clear the search term and filtered questions when toggling FAQ visibility
    setSearchTerm('');
    setFilteredQuestions([]);
  };

  //handle the close chat button
  const handleCloseChat = () => {
    toggleChat();
  };

  //handle the see FAQ button
  const handleFAQClick = () => {
    toggleFAQ();
  };

  //array of harcoded questions - each element of the array is an object containing a question and an answer
  const questions = [
    {
      question: 'Are you using using GPT-4?',
      answer: 'This site uses a combination of GPT-3.5 and GPT-4, along with various fine-tuned models specifically trained to perform chat support. If you choose to bring your own OpenAI API key, it will consume the GPT-4 (specifically, the new gpt-4-turbo) model on your behalf.'
    },
    {
      question: 'Do you have an API?',
      answer: "Yes, we do. It's still in beta, but we're constantly improving and updating its capabilities."
    },
    {
      question: 'Will you have lead capturing?',
      answer: "Yes, this is something we're actively looking into adding. Soon you will be able to ask for the user's email address through the chatbot itself, and you will be able to give the chatbot an objective, e.g. \"collect leads\" which will make the chatbot agent ask for the user's email at an appropriate time during the conversation."
    },
    {
      question: 'How do I train a model?',
      answer: 'First, you need to add the knowledge you want to use for training. In the left menu, under "Knowledge Base" you will find multiple options including "Websites", "Videos", "Documents", and "FAQs".'
    }
  ];

  //filter questions based on the keyword in search query
  const handleSearch = () => {
    const filtered = questions.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  //Render the FAQ questions based on the search term
  const renderFAQQuestions = () => {
    // If search term is entered and filtered questions exist, show filtered questions
    if (searchTerm && filteredQuestions.length > 0) {
      return filteredQuestions.map((q, index) => (
        <div key={index} className="FAQ-question-component">
          <h4>{q.question}</h4>
          <p>{q.answer}</p>
        </div>
      ));
    } else if (!searchTerm) {
      // If search term is not entered, show all questions
      return questions.map((q, index) => (
        <div key={index} className="FAQ-question-component">
          <h4>{q.question}</h4>
          <p>{q.answer}</p>
        </div>
      ));
    } else {
      // If search term is entered but no matching questions found, show message
      return <p>No matching questions found.</p>;
    }
  };

  return (
    <>
      <h1>This is a test web page for customized papercups chat widget</h1>
      <div className="chat-widget-toggle" onClick={toggleChat}>
        {showChat ? <AiOutlineClose /> : <AiOutlineMessage />}
      </div>
      {showChat && (
        <div className="chat-widget-container">
          <div className="chat-widget-header">
            <h2>Chat with our Experts </h2>
            <p>Ask us anything in the chat window 😊</p>
            <div className="buttons-container">
              {showFAQ ? null : <button onClick={handleCloseChat}>Close Chat</button>}
              <button onClick={handleFAQClick}>{showFAQ ? 'Back to Chat' : 'See FAQ'}</button>
            </div>
          </div>
          {showFAQ ? (
            <div className="FAQ-container">
              <div className="FAQ-search">
                <input className='FAQ-search-bar'
                type="text"
                placeholder="Search FAQ by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search-button' onClick={handleSearch}>
                  <AiOutlineSearch />
                </button>
              </div>
              
              <div className="FAQ-body">
                <h3>Frequently asked questions</h3>
                {renderFAQQuestions()}
              </div>
            </div>
          ) : (
            <div className="chat-widget-body">
              <ChatWindow
                token="7cb0e05f-1764-48a4-a7f3-16084644659d"
                inbox="a40ca603-5169-48ba-a0c7-2e5b67d3e700"
                title=""
                subtitle=""
                primaryColor="#753C4B"
                newMessagePlaceholder="Start typing..."
                newMessagesNotificationText="View new messages."
                showAgentAvailability={false}
                agentAvailableText="We're online right now!"
                agentUnavailableText="We're away at the moment."
                requireEmailUpfront={false}
                iconVariant="outlined"
                baseUrl="https://app.papercups.io"
              />
            </div>
          )}
               

          </div>
       
      )}
    </>
  );
}

export default ChatWidgetComponent;
