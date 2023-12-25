import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { Container, Typography, Box, Divider, TextField, Button, Grid } from '@mui/material';

const BlogPost = ({ match }) => {
  // Get the blog post ID from the URL parameter

  const { id } = useParams();

  return (
    <div>
      <Header/>
      <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
        
        <Button variant="contained" color="primary" sx={{ float: 'right' }} onClick={() => window.history.back()} >
          Back
        </Button>

      <Typography variant="h3" gutterBottom>
        Blog {parseInt(id) + 1}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        By: Surendran G N
      </Typography>
      <Divider sx={{ marginBottom: '2rem' }} />
      
      <Typography variant="body1" gutterBottom align="justify">
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar sapien nec velit ultricies iaculis. Nunc at dolor vitae lorem suscipit venenatis. Praesent scelerisque fringilla elit ut eleifend. Nunc aliquet laoreet varius. Donec et lobortis tortor, non luctus justo. Nam vitae diam lectus. Nam sodales justo vitae lacus rhoncus commodo. Nulla porttitor est ut mauris fermentum, non luctus lectus eleifend.
      </p>
      <p>
      Suspendisse vel finibus lacus, a accumsan nulla. Pellentesque non lorem turpis. In faucibus, ante nec bibendum tempus, ipsum purus auctor justo, ut dapibus orci mauris a lacus. Nam fermentum risus ut feugiat cursus. In ac lectus pharetra, dignissim felis a, vestibulum metus. Suspendisse consequat accumsan est a hendrerit. Suspendisse felis dui, mollis vel libero et, facilisis tincidunt ipsum. Vestibulum suscipit, felis maximus efficitur vestibulum, nibh libero malesuada leo, in pulvinar magna sem ut sem. Suspendisse blandit enim justo, vitae imperdiet ipsum lacinia at. Nam feugiat ac nibh in scelerisque. Ut pellentesque nisi sit amet velit viverra, quis porttitor sem egestas.
      </p>
      <p>
      Vestibulum ultricies odio sit amet lacus sodales tempus. In hac habitasse platea dictumst. Maecenas vestibulum ut nisl eu bibendum. Donec ornare risus id elit lacinia ultrices at a tellus. Donec bibendum libero in sapien viverra euismod. Sed sit amet sagittis diam, id feugiat felis. Nam tincidunt turpis in sapien pharetra fringilla. Aliquam blandit est feugiat massa finibus, sed venenatis turpis vehicula.
      </p>
      <img src={require(`../../assets/images/image-${(parseInt(id, 10) + 1).toString().padStart(2, '0')}.jpg`)} alt="Blog Image" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '75%' }} />
    
        <p>
      Morbi in fringilla erat, vel ultricies enim. Nulla eget tortor eu elit porttitor commodo ac eget enim. Duis sit amet massa risus. Nunc id tortor vitae leo dignissim posuere tempus eu ex. Donec ut efficitur est, eget consectetur neque. Duis sollicitudin ex tellus, id consectetur nisl venenatis a. Integer vestibulum justo quis tortor malesuada faucibus vitae et sapien. Donec sit amet sapien ac enim commodo bibendum. Aenean sagittis rutrum molestie. Maecenas pellentesque nulla ornare quam facilisis, gravida rhoncus nisi commodo. Duis scelerisque pellentesque mi non pellentesque.
      </p>
      <p>
      Ut eget euismod mi. Praesent felis eros, tempus id enim non, congue malesuada turpis. Vestibulum eu sollicitudin justo, id vehicula mauris. Suspendisse sit amet mattis ex, id bibendum nisi. Nulla tincidunt ultrices dolor, id rutrum velit cursus nec. Integer vitae iaculis libero. Nulla egestas consequat erat vel porta. Quisque commodo hendrerit ante, a aliquam urna tincidunt sed. Aenean vulputate laoreet ornare. In maximus vel ipsum malesuada sagittis. Nulla pellentesque nisl eleifend lorem accumsan, vitae consectetur erat suscipit. Sed eget accumsan nibh, commodo semper erat. Morbi lectus lorem, scelerisque et ex quis, fermentum bibendum dolor. Vestibulum viverra ligula quam, et commodo enim molestie nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis erat sit amet tellus tempus tincidunt.
      </p>
      </Typography>

  
      {/* Comment Section */}
      <Box sx={{ marginTop: '3rem' }}>
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>
        {/* Comments List */}
        {/* Replace this with your comment system logic */}
        <Box>
          {/* Comment components will go here */}
          {/* Example: */}
          {/* <Comment /> */}
        </Box>
      </Box>
      </Container>
    </div>
  );
};

export default BlogPost;