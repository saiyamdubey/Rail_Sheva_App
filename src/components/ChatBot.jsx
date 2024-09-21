import  { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, FormControl, Flex, Heading, Text } from '@chakra-ui/react';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', text: 'Hello! I am here to help you with the complaint form. You can ask me anything about the form.' },
  ]);
  const getBotResponse = async (input) => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat', { prompt: input });
      return response.data.response; 
    } catch (error) {
      console.error('Error fetching response from the server:', error);
      return 'Sorry, I am having trouble processing your request. Please try again.';
    }
  };
  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setChatLog((prevLog) => [
        ...prevLog,
        { sender: 'user', text: userMessage },
      ]);

      const botReply = await getBotResponse(userMessage);

      setChatLog((prevLog) => [
        ...prevLog,
        { sender: 'bot', text: botReply },
      ]);

      setUserMessage('');
    }
  };

  return (
    <Box w="100%" maxW="400px" p={4} boxShadow="lg" borderRadius="lg" bg="black" bottom="120px" right="20px">
      <Heading size="md" mb={4} color="#3182CE">Chatbot Assistant</Heading>
      <Box height="300px" overflowY="auto" mb={4} bg="#F7F7FB" p={3} borderRadius="md" boxShadow="md">
        {chatLog.map((chat, index) => (
          <Flex key={index} justify={chat.sender === 'bot' ? 'flex-start' : 'flex-end'}>
            <Box
              bg={chat.sender === 'bot' ? '#7685D7' : '#E2E8F0'}
              color={chat.sender === 'bot' ? 'white' : 'black'}
              p={3}
              m={1}
              borderRadius="md"
              maxW="75%"
            >
              <Text>{chat.text}</Text>
            </Box>
          </Flex>
        ))}
      </Box>

      <FormControl>
        <Input
          placeholder="Ask me anything..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button
          colorScheme="blue"
          mt={2}
          w="full"
          bg="#7685D7"
          color="white"
          _hover={{ bg: '#5B6DC7' }}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </FormControl>
    </Box>
  );
};
export default Chatbot;