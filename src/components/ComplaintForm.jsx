import { useState } from 'react';
import { Box, Button, Input, VStack, FormControl, FormLabel, Textarea, Select, Flex, Heading, Text, Image, Divider } from '@chakra-ui/react';
import axios from 'axios';
import Chatbot from '../components/ChatBot';

export default function ComplaintForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [image, setImage] = useState(null);
  const [trackId, setTrackId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [submittedId, setSubmittedId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('problem', problem);
    formData.append('message', message);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/message', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSubmittedId(response.data.id);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const searchHandler = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/message/${trackId}`);
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Flex className='complaint' bg="#F7F9FC" justify="center" align="center">
      <Box bg="white" boxShadow="lg" borderRadius="lg" p={8}>
        <Flex direction={['column', 'row']} gap={10}>
          {/* Complaint Form */}
          <Box flex="1.5"  borderRadius="md">
            <Heading size="lg" mb={6} color="#3182CE" textAlign="center">
              Submit Your Complaint
            </Heading>
            <VStack spacing={5} as="form">
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              <FormControl id="problem" isRequired>
                <FormLabel>Problem</FormLabel>
                <Select
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Select the problem"
                  focusBorderColor="blue.500"
                >
                  <option value="Coach damage">Coach damage</option>
                  <option value="Billing problem">Billing problem</option>
                  <option value="Cleanliness">Cleanliness</option>
                  <option value="Staff behavior">Staff behavior</option>
                  <option value="Luggage problem">Luggage problem</option>
                  <option value="Electronics problem">Electronics problem</option>
                  <option value="Seat issue">Seat issue</option>
                  <option value="Food problem">Food problem</option>
                  <option value="Train delay">Train delay</option>
                  <option value="Others">Others</option>
                </Select>
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel>Describe the Problem</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              <FormControl id="image">
                <FormLabel>Upload Image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  border="none"
                  _hover={{ cursor: 'pointer' }}
                />
              </FormControl>

              <Button
                colorScheme="blue"
                w="full"
                onClick={submitHandler}
                bg="#3182CE"
                color="white"
                _hover={{ bg: '#2B6CB0' }}
              >
                Submit Complaint
              </Button>

              {isSubmitted && (
                <Text color="green.500" fontSize="lg">
                  Complaint submitted successfully! Your tracking ID is: <strong>{submittedId}</strong>
                </Text>
              )}
            </VStack>
          </Box>

          <Divider orientation="vertical" />

          {/* Complaint Tracker */}
          <Box flex="1" p={4} borderRadius="md">
            <Heading size="lg" mb={6} color="#3182CE" textAlign="center">
              Track Your Complaint
            </Heading>
            <VStack spacing={5}>
              <FormControl id="trackId" isRequired>
                <FormLabel>Tracking ID</FormLabel>
                <Input
                  type="text"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  placeholder="Enter your tracking ID"
                  focusBorderColor="blue.500"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                w="full"
                onClick={searchHandler}
                bg="#3182CE"
                color="white"
                _hover={{ bg: '#2B6CB0' }}
              >
                Search Complaint
              </Button>

              {searchResult && (
                <Box p={5} bg="gray.50" border="1px solid" borderColor="gray.200" borderRadius="md" w="full">
                  <Heading size="sm" mb={2}>
                    Complaint Details:
                  </Heading>
                  <Text><strong>Name:</strong> {searchResult.name}</Text>
                  <Text><strong>Problem:</strong> {searchResult.problem}</Text>
                  <Text><strong>Status:</strong> {searchResult.message}</Text>
                  {searchResult.image && (
                    <Image src={`http://localhost:5000/${searchResult.image}`} alt="Complaint" mt={4} />
                  )}
                </Box>
              )}
                  <Chatbot />

            </VStack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
