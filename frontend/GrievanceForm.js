import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography } from '@mui/material';

const GrievanceForm = ({ loggedInUser }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Debugging statement to check the loggedInUser prop
  useEffect(() => {
    console.log('Logged In User in GrievanceForm:', loggedInUser);
  }, [loggedInUser]);

  const submitGrievance = async () => {
    if (!loggedInUser || !loggedInUser.id) {
      alert('You must be logged in to submit a grievance');
      return;
    }

    if (category && description) {
      try {
        const response = await axios.post('http://localhost:8080/api/grievances', {
          user: {
            id: loggedInUser.id, // Ensure user ID is populated correctly
          },
          category,
          description,
          status: 'Pending', // Use "Pending" or appropriate initial status
        });

        if (response.status === 200) {
          alert('Grievance submitted successfully!');
          // Reset form fields after submission
          setCategory('');
          setDescription('');
        }
      } catch (error) {
        console.error('Error submitting grievance:', error);
        setError('Failed to submit grievance. Please try again.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h4" mb={3}>Submit Grievance</Typography>
      <TextField
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ mb: 2, width: '300px' }}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2, width: '300px' }}
      />
      <Button
        variant="contained"
        onClick={submitGrievance}
        sx={{ width: '300px' }}
      >
        Submit
      </Button>
      {error && <Typography color="red">{error}</Typography>} {/* Display error message if exists */}
    </Box>
  );
};

export default GrievanceForm;


