// import { Box, Button, Heading, Text, SimpleGrid, Input, Select, FormControl, FormLabel, Link, VStack, Image } from '@chakra-ui/react';

// export default function Home() {
//   const problems = [
//     { name: 'Coach Damage', image: 'https://tse4.mm.bing.net/th?id=OIP.vsBeXBo0gnJ-5SH6H4Mk_gHaEJ&pid=Api&P=0&h=180', value: 'coach-damage' },
//     { name: 'Billing Problem', image: 'https://tse4.mm.bing.net/th?id=OIP.gUmw7MRwlB3SZyG-QiOFJwHaEM&pid=Api&P=0&h=180', value: 'billing' },
//     { name: 'Cleanliness', image: 'https://tse2.mm.bing.net/th?id=OIP.fX8z7GoFITD3-upCl_0UGgHaE7&pid=Api&P=0&h=180', value: 'cleanliness' },
//     { name: 'Staff Behavior', image: 'https://tse1.mm.bing.net/th?id=OIP.ugaZvVF5aBM311d9NxikRAHaEK&pid=Api&P=0&h=180', value: 'staff-behavior' },
//     { name: 'Luggage Problem', image: 'https://tse2.mm.bing.net/th?id=OIP.1adqjAIGZWYa9_-iAwlMbwHaEN&pid=Api&P=0&h=180', value: 'luggage' },
//     { name: 'Electronics Problem', image: 'https://tse2.mm.bing.net/th?id=OIP.7HnNIlSLu0KW4qWhX0znjAHaFQ&pid=Api&P=0&h=180', value: 'electronics' },
//     { name: 'Seat Issue', image: 'https://tse4.mm.bing.net/th?id=OIP.Yjr72wrz6e2nfcC05W7DsAHaEd&pid=Api&P=0&h=180', value: 'seat-issue' },
//     { name: 'Food Problem', image: 'https://tse3.mm.bing.net/th?id=OIP.aUzevMkOcqCra-oPE-b6lQHaEK&pid=Api&P=0&h=180', value: 'food' },
//     { name: 'Train Delay', image: 'https://tse3.mm.bing.net/th?id=OIP.KvchybK__FWvvbeT1AP_MwHaFj&pid=Api&P=0&h=180', value: 'delay' },
//   ];

//   return (
//     <Box
//       bgImage="url('https://railmadad.indianrailways.gov.in/madad/final/images/body-bg.jpg')"
//       bgPosition="center"
//       bgRepeat="no-repeat"
//       bgSize="cover"
//       minH="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-between"
//     >
//       {/* Header Section */}
//       <Box bg="blue.600" color="white" py={4} px={6} >
//         <Box display="flex" flexDirection={"row"} justifyContent="space-between" alignItems="center">
//           {/* Left - Heading */}
//           <Box>
//             <Heading size="xl">RailMadad</Heading>
//             <Text>For Inquiry, Assistance & Grievance Redressal</Text>
//           </Box>

//           {/* Center - Image */}
//           <Box display="flex" flexDirection={"row"} >
//             <img
//               src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png"
//               alt="Logo"
//               style={{ width: '100px', height: '80px', marginRight: '20px' }} // Adjust width and height if needed
//             />
//             <img
//               src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png"
//               alt="Logo"
//               style={{ width: '400px', height: '80px', marginRight: '20px' }} // Adjust width and height if needed
//             />
//             <img
//               src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-7.png"
//               alt="Logo"
//               style={{ width: '100px', height: '80px', marginRight: '20px' }} // Adjust width and height if needed
//             />
//           </Box>

//           {/* Right - Buttons */}
//           <Box display="flex">
//             <Button colorScheme="orange">Login</Button>
//             <Button colorScheme="orange" ml={4}>Sign Up</Button>
//           </Box>
//         </Box>
//       </Box>

//       <Box bgGradient="linear(to-b, blue.600, white)" color="white" py={20} px={10} mb={10} borderRadius="md">
//         <Heading as="h1" size="2xl" mb={4}>
//           Welcome to Our Complaint Management System
//         </Heading>
//         <Text fontSize="lg" mb={6}>
//           We are here to solve your problems quickly and efficiently.
//         </Text>
//         <Button
//           as={Link}
//           //   bgGradient="linear(to-b, red, white)"
//           to="/cum"
//           size="lg"
//           colorScheme="teal"
//           bg="teal.400"
//           color="white"
//           _hover={{ bg: 'teal.500' }}
//         >
//           Submit a Complaint
//         </Button>
//       </Box>
//       {/* Main Content Layout */}
//       <Heading color={"white"} marginLeft={"37rem"} display="flex" flexDirection={"row"} justifyContent="space-between" alignItems="center" as="h2" size="xl" mb={2}>
//         Select a Problem Type
//       </Heading>
//       <Box display="flex" p={6} flexGrow={1}>
//         {/* Sidebar Section */}

//         <Box width="20%" bg="gray.200" p={4} marginLeft={10} borderRadius="md">
//           <Heading size="md" mb={4}>Services</Heading>
//           <SimpleGrid columns={1} spacing={4}>
//             <Button colorScheme="teal">Ticket Booking</Button>
//             <Button colorScheme="teal">Train Enquiry</Button>
//             <Button colorScheme="teal">Reservation Enquiry</Button>
//             {/* Add more buttons for the sidebar */}
//           </SimpleGrid>
//           <div>
//             <img src="https://railmadad.indianrailways.gov.in/madad/final/images/RailMadad.gif" alt="" />
//             <Box display="flex" flexWrap="wrap" justifyContent="center">
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-7.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-4.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-5.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//               <img
//                 src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-3.png"
//                 alt="Logo"
//                 style={{ width: '100px', height: '80px', margin: '10px' }}
//               />
//             </Box>

//           </div>
//         </Box>

//         {/* Grievance Form Section */}
//         <Box
//           width="75%"
//           bg="white"
//           p={8}
//           ml={10}
//           borderRadius="md"
//           boxShadow="lg"
//           opacity="0.95"  // Adjust opacity to allow background to show subtly
//         >

//           <Heading size="xl" mt={10} pb={4}>Grievance Detail</Heading>
//           <FormControl mb={4}>
//             <FormLabel>Mobile No.</FormLabel>
//             <Input type="tel" placeholder="Enter your mobile number" />
//             <Button colorScheme="blue" mt={2}>Get OTP</Button>
//           </FormControl>

//           <FormControl mb={4}>
//             <FormLabel>Journey Details (PNR)</FormLabel>
//             <Input placeholder="Enter PNR No." />
//           </FormControl>

//           <FormControl mb={4}>
//             <FormLabel>Incident Type</FormLabel>
//             <Select placeholder="Select Type">
//               <option value="coach-damage">Coach Damage</option>
//               <option value="billing">Billing Problem</option>
//               {/* Add more options */}
//             </Select>
//           </FormControl>

//           <FormControl mb={4}>
//             <FormLabel>Incident Date</FormLabel>
//             <Input type="date" />
//           </FormControl>

//           <FormControl mb={4}>
//             <FormLabel>Upload File</FormLabel>
//             <Input type="file" />
//           </FormControl>

//           <FormControl mb={4}>
//             <FormLabel>Grievance Description</FormLabel>
//             <Input type="text" placeholder="Enter grievance description" />
//           </FormControl>

//           <Button colorScheme="teal" w="full">Submit Grievance</Button>
//         </Box>
//       </Box>

//       {/* Problem Cards Section */}
//       <Heading color={"white"} marginLeft={"37rem"} display="flex" flexDirection={"row"} justifyContent="space-between" alignItems="center" as="h2" size="xl" mb={6}>
//         Select a Problem Type
//       </Heading>
//       <SimpleGrid textAlign={"center"} mb={10} columns={[1, 2, 3]} spacing={15}>
//         {problems.map((problem) => (
//           <Box
//             key={problem.value}
//             bgGradient="linear(to-b, blue.600, white)"
//             borderWidth="2px"
//             borderRadius="lg"
//             overflow="hidden"
//             _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
//             transition="transform 0.2s ease"
//           >
//             <Image src={problem.image} margin={"auto"} marginTop={"3rem"} alt={problem.name} />
//             <Box p={6}>
//               <Heading as="h4" size="md" mb={4}>
//                 {problem.name}
//               </Heading>
//               <Button
//                 as={Link}
//                 to={`/cum?problem=${problem.value}`}
//                 colorScheme="blue"
//                 w="full"
//                 bg="blue.500"
//                 _hover={{ bg: 'blue.600' }}
//               >
//                 File Complaint
//               </Button>
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//       {/* Footer Section */}
//       <Box bg="blue.600" color="white" py={4} textAlign="center">
//         <Text>&copy; {new Date().getFullYear()} RailMadad. All rights reserved.</Text>
//         <VStack spacing={2}>
//           <Link href="#">Privacy Policy</Link>
//           <Link href="#">Terms of Service</Link>
//           <Link href="#">Contact Us</Link>
//         </VStack>
//       </Box>
//     </Box>
//   );
// }




import { useState } from 'react';
import { Box, Button, Heading, Text, SimpleGrid, Input, Select, FormControl, FormLabel, VStack, Image, Link } from '@chakra-ui/react';
import axios from 'axios';

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
      const response = await axios.post('https://railway-server.onrender.com/api/message', formData, {
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
      const response = await axios.get(`https://railway-server.onrender.com/api/message/${trackId}`);
      console.log(response.data)
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Box
      bgImage="url('https://railmadad.indianrailways.gov.in/madad/final/images/body-bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Header Section */}
      <Box bg="blue.600" color="white" py={4} px={6} >
        <Box display="flex" flexDirection={"row"} justifyContent="space-between" alignItems="center">
          <Box>
            <Heading size="xl">RailMadad</Heading>
            <Text>For Inquiry, Assistance & Grievance Redressal</Text>
          </Box>
          <Box display="flex" flexDirection={"row"}>
            <img src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-1.png" alt="Logo" style={{ width: '100px', height: '80px', marginRight: '20px' }} />
            <img src="https://railmadad.indianrailways.gov.in/madad/final/images/logog20.png" alt="Logo" style={{ width: '400px', height: '80px', marginRight: '20px' }} />
            <img src="https://railmadad.indianrailways.gov.in/madad/final/images/booking-icon-7.png" alt="Logo" style={{ width: '100px', height: '80px', marginRight: '20px' }} />
          </Box>
          <Box display="flex">
            <Button colorScheme="orange">Login</Button>
            <Button colorScheme="orange" ml={4}>Sign Up</Button>
          </Box>
        </Box>
      </Box>

      {/* Complaint Form and Problem Section */}
      <SimpleGrid columns={[1, 2]} spacing={8} p={6}>
        <Box>
          <Heading size="lg" mb={6} color="#3182CE" textAlign="center">Submit Your Complaint</Heading>
          <VStack color={"white"} spacing={5} as="form">
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
                color={"white"}
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

            {/* <FormControl id="problem" isRequired>
              <FormLabel>Problem</FormLabel>
              <Select
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Select the problem"
                color={"white"}
                option={"black"}
                focusBorderColor="blue.500"
              >
                {problems.map((p) => (
                  <option color='black' placeholder='black' key={p.value} value={p.value}>{p.name}</option>
                ))}
              </Select>
            </FormControl> */}
            <FormControl id="problem" isRequired>
              <FormLabel>Problem</FormLabel>
              <Select
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Select the problem"
                color="white" // Controls the color of the selected text
                focusBorderColor="blue.500"
              >
                {problems.map((p) => (
                  <option key={p.value} value={p.value} style={{ color: 'black' }}>
                    {p.name}
                  </option>
                ))}
              </Select>
            </FormControl>


            <FormControl id="message" isRequired>
              <FormLabel>Describe the Problem</FormLabel>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue"
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="image" isRequired>
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
              <Text mt={2} fontSize={"xl"} color="white">Your complaint has been submitted! Tracking ID: {submittedId}</Text>
            )}
          </VStack>
        </Box>

        <Box>
          <Heading size="lg" mb={6} color="#3182CE" textAlign="center">Common Problems</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {problems.map((problem) => (
              <Box key={problem.name} textAlign="center">
                <Image src={problem.image} alt={problem.name} w="full" h="150px" borderRadius="md" />
                <Text fontWeight="bold" color={"black"} mt={2}>{problem.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
          {/* dfdfdfdf */}
        </Box>
      </SimpleGrid>

      {/* Footer Section */}
      <VStack mt={10} padding={30} w={1500}>
        <Heading size="xl" color="#3182CE" textAlign="center">Track Your Complaint</Heading>
        <Input
          value={trackId}
          onChange={(e) => setTrackId(e.target.value)}
          placeholder="Enter your Tracking ID"
          focusBorderColor="blue.500"
          color={"white"}
        />
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
          <Box mt={4} p={4} border="1px solid #ccc" borderRadius="md" bg="gray.50">
            <Heading size="md">Complaint Details</Heading>
            <Text>ID: {searchResult._id}</Text>
            <Text>Problem: {searchResult.problem}</Text>
            <Text>Status: {searchResult.description}</Text>
            <Text>Email: {searchResult.email}</Text>
            {searchResult.image && (
              <Image src={`https://railway-server.onrender.com/${searchResult.image}`} alt="Complaint" mt={4} />
            )}
          </Box>
        )}
      </VStack>
      <Box bg="blue.600" color="white" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} RailMadad. All rights reserved.</Text>
        <VStack spacing={2} display={"flex"} flexDirection={"row"} ml={"36rem"} gap={"2rem"} textAlign="center" alignContent={"center"}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Contact Us</Link>
        </VStack>
      </Box>
    </Box>
  );
}
