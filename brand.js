// San Martin Dent — Brand Identity Config
// Uso: base visual para piezas elegantes, premium y editables en Canva/Meta Ads.

const brand = {
  name: "San Martin Dent",
  slogan: "sonríe con nosotros",
  location: "Avenida San Martín 0795, Temuco, La Araucanía, Chile",
  shortLocation: "Av. San Martín 0795, Temuco",
  whatsapp: "+56 9 6727 0623",
  hours: {
    weekdays: "Lunes a Viernes 9:00–19:00",
    saturday: "Sábado 9:00–14:00",
  },

  colors: {
    // Identidad principal
    bgDark: "#172940",      // Navy principal — fondo elegante
    bgLight: "#1e3551",     // Navy secundario — capas, paneles y degradados
    accent: "#f19f05",      // Dorado corporativo — CTAs, bordes, íconos, líneas finas
    text: "#f2f2f2",        // Blanco suave — títulos y textos principales
    textMuted: "#a8b8cc",   // Azul grisáceo — cuerpo, bajadas y textos secundarios
    whatsapp: "#25D366",    // Solo cuando el CTA sea explícitamente WhatsApp

    // Variaciones para diseño premium
    bgDeep: "#0f1d2f",      // Navy más profundo — zonas de contraste
    bgCard: "#14263b",      // Cards o contenedores elegantes
    accentSoft: "#f6b33a",  // Dorado suave — brillos sutiles
    borderSoft: "rgba(241,159,5,0.75)",
    glowGold: "rgba(241,159,5,0.32)",
  },

  typography: {
    headings: {
      family: "Montserrat",
      weights: [700, 800],
      source: "Google Fonts",
      usage: "Títulos, llamados principales, CTA",
    },
    body: {
      family: "Open Sans",
      weights: [400, 600],
      source: "Google Fonts",
      usage: "Información, dirección, beneficios, textos secundarios",
    },
    elegant: {
      family: "Playfair Display",
      weights: [400, 600, 700],
      style: "Italic",
      source: "Google Fonts",
      usage: "Frases emocionales o cierres premium",
    },
  },

  buttons: {
    primary: {
      bg: "#f19f05",
      text: "#172940",
      border: "#f19f05",
      radius: "18px",
      shadow: "0 0 22px rgba(241,159,5,0.35)",
      label: "Agenda tu evaluación",
    },
    outline: {
      bg: "transparent",
      text: "#f19f05",
      border: "#f19f05",
      radius: "18px",
    },
    whatsapp: {
      bg: "#25D366",
      text: "#ffffff",
      radius: "18px",
      label: "Agenda por WhatsApp",
    },
  },

  style: {
    theme: "dark-premium",
    mood: "elegante, sobrio, moderno, confiable, de alto valor percibido",
    borderRadius: "24px",
    borderRadiusSmall: "14px",
    borderRadiusPill: "999px",
    shadow: "0 12px 42px rgba(0,0,0,0.38)",
    softShadow: "0 8px 28px rgba(0,0,0,0.28)",
    goldGlow: "0 0 18px rgba(241,159,5,0.32)",
    icons: "Font Awesome 6.5",
    iconStyle: "minimalista, lineal, dorado, sin rellenos pesados",
    texture: "navy profundo con textura sutil o degradado fino",
    decorativeLines: "líneas curvas inferiores finas en dorado, con brillo muy sutil",
  },

  logo: {
    source: "Logo oficial PNG enviado por el usuario",
    rules: [
      "No rediseñar el logo",
      "No inventar isotipos",
      "No modificar proporciones",
      "No cambiar colores del archivo original",
      "Mantener espacio limpio alrededor",
      "Usar siempre el logo oficial de San Martin Dent",
    ],
  },

  layoutTemplates: {
    testimonialOverlay: {
      format: "vertical",
      size: {
        width: 1080,
        height: 1920,
        ratio: "9:16",
      },

      purpose: [
        "Meta Ads",
        "Instagram Stories",
        "Reels",
        "Videos testimoniales",
        "Prueba social",
      ],

      structure: {
        leftVideoFrame: {
          position: "left",
          width: "58%–64%",
          height: "82%–88%",
          bg: "linear-gradient(180deg, #172940 0%, #0f1d2f 100%)",
          border: "1.5px solid #f19f05",
          borderRadius: "28px",
          shadow: "0 12px 42px rgba(0,0,0,0.38)",
          purpose: "Espacio limpio para insertar video testimonial real",
          rules: [
            "No insertar rostros generados por IA",
            "No alterar el video real del paciente",
            "Mantener el marco protagonista",
            "Dejar el interior limpio para reemplazo fácil en Canva",
          ],
        },

        testimonialBadge: {
          text: "TESTIMONIO REAL",
          position: "top center sobre el marco de video",
          bg: "linear-gradient(180deg, #f19f05 0%, #b87300 100%)",
          textColor: "#f2f2f2",
          letterSpacing: "0.12em",
          borderRadius: "999px",
          padding: "10px 28px",
          shadow: "0 0 18px rgba(241,159,5,0.32)",
        },

        rightInfoPanel: {
          position: "right",
          width: "34%–40%",
          align: "center",
          spacing: "amplio y respirable",
          hierarchy: [
            "Logo oficial",
            "Separador dorado fino",
            "Dirección",
            "Facilidades de pago",
            "Atención cercana y profesional",
            "CTA principal",
            "Frase emocional de cierre",
          ],
        },
      },

      content: {
        address: "Av. San Martín 0795, Temuco",
        benefits: [
          "Facilidades de pago",
          "Atención cercana y profesional",
        ],
        cta: "Agenda tu evaluación",
        closing: {
          line1: "Recupera tu sonrisa",
          line2: "con un plan pensado para ti",
        },
      },

      visualRules: [
        "Usar navy como base dominante, no negro puro dominante",
        "Usar dorado como acento fino, no saturar",
        "Dejar mucho espacio negativo",
        "Usar separadores delgados y elegantes",
        "Aplicar brillos muy sutiles, nunca exagerados",
        "Mantener una estética premium y sobria",
        "Evitar diseño genérico o recargado",
      ],

      editableLayers: [
        "Fondo navy principal",
        "Degradado/textura de fondo",
        "Ondas decorativas inferiores",
        "Marco del video",
        "Etiqueta TESTIMONIO REAL",
        "Logo oficial",
        "Separador superior",
        "Ícono ubicación",
        "Texto dirección",
        "Separadores dorados",
        "Ícono facilidades de pago",
        "Texto facilidades de pago",
        "Ícono atención",
        "Texto atención cercana y profesional",
        "Botón CTA",
        "Texto CTA",
        "Frase final",
        "Brillos/destellos sutiles",
      ],
    },
  },

  copyGuidelines: {
    tone: "profesional cercano, elegante, claro y confiable",
    avoid: [
      "exceso de tecnicismos",
      "promesas exageradas",
      "tono agresivo de venta",
      "diseño visual saturado",
    ],
    preferredPhrases: [
      "Testimonio real",
      "Agenda tu evaluación",
      "Recupera tu sonrisa",
      "Con un plan pensado para ti",
      "Atención cercana y profesional",
      "Facilidades de pago",
    ],
  },
};

export default brand;
