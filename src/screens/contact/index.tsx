import React from "react";
import { Container, Typography, Box, Grid, Paper, Button } from "@mui/material";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactPage: React.FC = () => {
  return (
    <Container sx={{ py: 8, pb: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{ borderRadius: "16px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
        >
          Contactos
        </Typography>

        <Grid container spacing={4}>
          {/* Informações de Contato - Estilo Criativo */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Morada e Contactos
              </Typography>

              <Box sx={{ marginBottom: 3, textAlign: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Rua Exemplo, 123, Lisboa, Portugal
                </Typography>
              </Box>

              {/* Teléfono e Email */}
              <Box sx={{ marginBottom: 3, textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Telefone
                </Typography>
                <Typography variant="body1">
                  <FaPhoneAlt style={{ marginRight: 8 }} />
                  +351 912 345 678
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Email
                </Typography>
                <Typography variant="body1">
                  <FaEnvelope style={{ marginRight: 8 }} />
                  contacto@obarbeirosoueu.com
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 4,
                  borderRadius: 3,
                  padding: "10px 20px",
                  backgroundColor: "#FF7A00",
                  "&:hover": {
                    backgroundColor: "#FF7A00",
                  },
                }}
              >
                Fale Conosco
              </Button>
            </Paper>
          </Grid>

          {/* Mapa de Localização */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                Nossa Localização
              </Typography>

              {/* Seu iframe do Google Maps */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 2,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.2046928023524!2d-9.191329424906115!3d39.419495515731235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b34e2070213f%3A0x78f7bf620b01752c!2sR.%20Eng.%20Lu%C3%ADs%20de%20Paiva%20e%20Sousa%2061A%2C%202500-582%20Nadadouro!5e0!3m2!1spt-PT!2spt!4v1747062847202!5m2!1spt-PT!2spt"
                  width="100%"
                  height="255px"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
