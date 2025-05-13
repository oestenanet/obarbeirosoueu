import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section com Vídeo */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source
            src="src\assets\AQNYjHvOQSkZ9tTCVZnSubQFwmC25Ow_bsX-XPnC9HuAAX_oPZsyAI7edk6xK8BF65qxy6Os7SLERrKIm6lG5J_-2tB4D_Y13S-wElo.mp4"
            type="video/mp4"
          />
        </video>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Barbas e Cabelos
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Ao estilo de barbearia tradicional
            </Typography>
            <Button
              component={Link}
              to={"/schedule"}
              variant="contained"
              color="success"
              size="large"
              sx={{
                backgroundColor: "#25D366",
                "&:hover": {
                  backgroundColor: "#2e7d32", // Efeito de hover
                },
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Marcações
              </Typography>
            </Button>
          </motion.div>
        </Box>
      </Box>

      {/* Seção Informativa */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* CEO e Foto de Perfil */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "#f4f4f4",
                }}
              >
                <Avatar
                  src="src\assets\473714414_17944826120943241_2585765885343530930_n.jpeg"
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Ruben Ribeiro
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  CEO & Fundador
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Ruben fundou a barbearia em 2025, com o objetivo de trazer o
                  toque clássico e atemporal para cada cliente. A paixão por
                  cortes de cabelo e pela arte de fazer barba transmite-se em
                  cada detalhe do serviço oferecido.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Porque escolher a barbearia clássica */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontFamily: "'Lobster', cursive",
                    fontWeight: "bold",
                    letterSpacing: 1,
                  }}
                >
                  Porque escolher a nossa barbearia?
                </Typography>
                <Typography variant="body1">
                  Em um ambiente acolhedor e ao estilo das barbearias antigas,
                  oferecemos mais do que simples cortes. Oferecemos uma
                  experiência imersiva, onde cada cliente é tratado como
                  especial. Nosso objetivo é proporcionar momentos de
                  tranquilidade e cuidado enquanto cortamos o seu cabelo e
                  barba.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Sente-se à vontade, relaxe e deixe-nos cuidar do seu visual
                  com todo o profissionalismo e a tradição que você merece.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
