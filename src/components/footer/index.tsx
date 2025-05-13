// src/components/Footer.tsx
import React from "react";
import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import { Instagram, Facebook, WhatsApp } from "@mui/icons-material";

const Footer: React.FC = () => {
  // Função para verificar se o dispositivo é móvel
  const isMobile = window.innerWidth <= 768; // Considerando 768px como limite para mobile

  // Determina o link para os créditos com base no dispositivo
  const getCreditsLink = () => {
    if (isMobile) {
      // Para dispositivos móveis, redireciona para a chamada telefônica
      return `tel:+351916581046`;
    } else {
      // Para desktop ou tablet, redireciona para o e-mail
      return `mailto:oestenanet@gmail.com`;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2E3641",
        color: "#fff",
        py: 6,
        paddingBottom: "65px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Identidade Visual */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Alfa Slab One, serif",
                fontWeight: "bold",
                letterSpacing: 1,
                mb: 2,
              }}
            >
              O BARBEIRO SOU EU
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Estilo clássico com um toque moderno. Cuidando do seu visual desde
              2025.
            </Typography>
          </Grid>

          {/* Informações de Contato */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contatos
            </Typography>
            <Typography variant="body2">
              Rua Engenheiro Luis Paiva e Sousa 61A
            </Typography>
            <Typography variant="body2">Nadadouro, Caldas da Rainha</Typography>
            <Typography variant="body2">2500-582</Typography>
            <Typography variant="body2">Tel: +351 916 581 046</Typography>
          </Grid>

          {/* Redes Sociais e Horário */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Siga-nos
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <IconButton
                component="a"
                href="https://www.instagram.com/obarbeirosoueu"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/obarbeirosoueu"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://api.whatsapp.com/send/?phone=%2B351916581046&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener"
                sx={{ color: "#fff" }}
              >
                <WhatsApp />
              </IconButton>
            </Box>
            <Typography variant="h6" gutterBottom>
              Horário
            </Typography>
            <Typography variant="body2">Seg - Sex: 10h - 19h</Typography>
            <Typography variant="body2">Sábado/Domingo: Fechado</Typography>
          </Grid>
        </Grid>

        {/* Créditos */}
        <Box sx={{ textAlign: "center", mt: 4, opacity: 0.6 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Website criado por{" "}
            <a
              href={getCreditsLink()}
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Etronic Digitals. {"+351 932 141 109"}
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
