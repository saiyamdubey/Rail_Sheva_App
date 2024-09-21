import { Box, Button, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const problems = [
    { name: 'Coach Damage', image: 'https://tse4.mm.bing.net/th?id=OIP.vsBeXBo0gnJ-5SH6H4Mk_gHaEJ&pid=Api&P=0&h=180', value: 'coach-damage' },
    { name: 'Billing Problem', image: 'https://tse4.mm.bing.net/th?id=OIP.gUmw7MRwlB3SZyG-QiOFJwHaEM&pid=Api&P=0&h=180', value: 'billing' },
    { name: 'Cleanliness', image: 'https://tse2.mm.bing.net/th?id=OIP.fX8z7GoFITD3-upCl_0UGgHaE7&pid=Api&P=0&h=180', value: 'cleanliness' },
    { name: 'Staff Behavior', image: 'https://tse1.mm.bing.net/th?id=OIP.ugaZvVF5aBM311d9NxikRAHaEK&pid=Api&P=0&h=180', value: 'staff-behavior' },
    { name: 'Luggage Problem', image: 'https://tse2.mm.bing.net/th?id=OIP.1adqjAIGZWYa9_-iAwlMbwHaEN&pid=Api&P=0&h=180', value: 'luggage' },
    { name: 'Electronics Problem', image: 'https://tse2.mm.bing.net/th?id=OIP.7HnNIlSLu0KW4qWhX0znjAHaFQ&pid=Api&P=0&h=180', value: 'electronics' },
    { name: 'Seat Issue', image: 'https://tse4.mm.bing.net/th?id=OIP.Yjr72wrz6e2nfcC05W7DsAHaEd&pid=Api&P=0&h=180', value: 'seat-issue' },
    { name: 'Food Problem', image: 'https://tse3.mm.bing.net/th?id=OIP.aUzevMkOcqCra-oPE-b6lQHaEK&pid=Api&P=0&h=180', value: 'food' },
    { name: 'Train Delay', image: 'https://tse3.mm.bing.net/th?id=OIP.KvchybK__FWvvbeT1AP_MwHaFj&pid=Api&P=0&h=180', value: 'delay' },
  ];

  return (
    <Box textAlign="center" py={10} px={6}>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} px={10} mb={10} borderRadius="md">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Our Complaint Management System
        </Heading>
        <Text fontSize="lg" mb={6}>
          We are here to solve your problems quickly and efficiently.
        </Text>
        <Button
          as={Link}
          to="/cum"
          size="lg"
          colorScheme="teal"
          bg="teal.400"
          color="white"
          _hover={{ bg: 'teal.500' }}
        >
          Submit a Complaint
        </Button>
      </Box>

      {/* Problem Cards Section */}
      <Heading as="h2" size="xl" mb={6}>
        Select a Problem Type
      </Heading>
      <SimpleGrid textAlign={"center"} columns={[1, 2, 3]} spacing={15}>
        {problems.map((problem) => (
          <Box
            key={problem.value}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
            transition="transform 0.2s ease"
          >
            <Image src={problem.image} margin={"auto"} marginTop={"3rem"} alt={problem.name} />
            <Box p={6}>
              <Heading as="h4" size="md" mb={4}>
                {problem.name}
              </Heading>
              <Button
                as={Link}
                to={`/cum?problem=${problem.value}`}
                colorScheme="blue"
                w="full"
                bg="blue.500"
                _hover={{ bg: 'blue.600' }}
              >
                File Complaint
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
