import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Select, Textarea, Button, VStack, HStack, Image, Text } from "@chakra-ui/react";
import { FaTrash, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted");
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          <FaTrash /> Waste Disposal Service Booking
        </Heading>
        <Image src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMGRpc3Bvc2FsJTIwdHJ1Y2t8ZW58MHx8fHwxNzEwNjgzMTAwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Waste Disposal" />
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>
                <FaMapMarkerAlt /> Address
              </FormLabel>
              <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <FormControl id="wasteType" isRequired>
              <FormLabel>Type of Waste</FormLabel>
              <Select placeholder="Select waste type" value={wasteType} onChange={(e) => setWasteType(e.target.value)}>
                <option value="household">Household Waste</option>
                <option value="construction">Construction Debris</option>
                <option value="yard">Yard Waste</option>
                <option value="hazardous">Hazardous Waste</option>
              </Select>
            </FormControl>
            <FormControl id="pickupDate" isRequired>
              <FormLabel>
                <FaCalendar /> Pickup Date
              </FormLabel>
              <Input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Additional Notes</FormLabel>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="green" size="lg">
              Book Pickup
            </Button>
          </VStack>
        </form>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          We'll get back to you within 24 hours to confirm your booking.
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
