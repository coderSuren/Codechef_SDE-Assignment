import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import  { useNavigate } from "react-router-dom";


const blogPosts = [
  {
    title: "Blog 1",
    description: "Description for blog post 1",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-01.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "1 days ago",
  },
  {
    title: "Blog 2",
    description: "Description for blog post 2",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-02.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "2 days ago",
  },
  {
    title: "Blog 3",
    description: "Description for blog post 3",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-03.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "3 days ago",
  },
  {
    title: "Blog 4",
    description: "Description for blog post 4",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-04.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "4 days ago",
  },
  {
    title: "Blog 5",
    description: "Description for blog post 5",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-05.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "5 days ago",
  },
  {
    title: "Blog 6",
    description: "Description for blog post 6",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-06.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "6 days ago",
  },
  
  {
    title: "Blog 7",
    description: "Description for blog post 7",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-07.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "7 days ago",
  },
  {
    title: "Blog 8",
    description: "Description for blog post 8",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-08.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "8 days ago",
  },
  
  {
    title: "Blog 9",
    description: "Description for blog post 9",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-09.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "9 days ago",
  },
  {
    title: "Blog 10",
    description: "Description for blog post 10",
    author: "Surendran G N",
    imageUrl: require('../../assets/images/image-10.jpg'),
    avatarUrl: require('../../assets/images/photo.jpg'),
    date: "10 days ago",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ display: "flex" }} 
            onClick={() => {
                navigate(`/blog/${index}`);
              
            }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={post.imageUrl}
                alt={post.title}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="h5" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                  <Avatar alt={post.author} src={post.avatarUrl} />
                  <Box sx={{ ml: 1 }}>
                    <Typography variant="subtitle2">{post.author}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {post.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}