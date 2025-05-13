// src/pages/Marcacoes.tsx
import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Marcacoes: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        minHeight: "100vh",
        py: 10,
        color: "white",
        overflowY: "auto", // permite scroll na página
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontFamily: "'Lobster', cursive",
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#FF7A00",
            }}
          >
            Marcações Online
          </Typography>

          <Typography variant="h6" align="center" sx={{ mb: 4, opacity: 0.8 }}>
            Escolhe o teu horário, reserva o teu lugar e garante o teu corte com
            estilo.
          </Typography>

          <Paper
            elevation={10}
            sx={{
              width: "100%",
              mx: "auto",
              borderRadius: 3,
              height: "80vh",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://obarbeirosoueu.setmore.com/"
              title="Marcações O Barbeiro Sou Eu"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
            ></iframe>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Marcacoes;
