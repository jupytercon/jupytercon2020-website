export const state = () => ({
  sponsors: {
    platinum: [
      {
        name: "OVHCloud",
        link: "https://www.ovh.com",
        description:
          "OVHcloud provides everything you need for a successful online project: web hosting, domain names, dedicated servers, CDN, cloud environments, big data, and more.",
        image: require("~/assets/images/sponsors/OVH.png"),
      },
      {
        name: "Bloomberg",
        link: "https://techatbloomberg.com",
        description:
          "Bloomberg is building the world’s most trusted information network for financial professionals. Our 6,000+ engineers are dedicated to advancing and building new systems for the Bloomberg Terminal and other products to solve complex, real-world problems.",
        image: require("~/assets/images/sponsors/bloomberg.png"),
      },
    ],
    gold: [
      {
        name: "Facebook",
        link: "https://facebook.com",
        description:
          "Facebook offers a suite of products that help people connect to their friends and family, find communities and grow businesses.",
        image: require("~/assets/images/sponsors/facebook.png"),
      },
      {
        name: "Google",
        link: "https://google.com",
        description:
          "Google's goal is to organize the world's information and make it universally accessible and useful.",
        image: require("~/assets/images/sponsors/google.png"),
      },
    ],
    silver: [
      {
        name: "NVidia",
        link: "https://www.nvidia.com",
        description:
          "Fueled by the insatiable demand for better 3D graphics, and the massive scale of the gaming market, NVIDIA has evolved the GPU into a computer brain at the exciting intersection of virtual reality, high performance computing, and artificial intelligence.",
        image: require("~/assets/images/sponsors/nvidia.png"),
      },
    ],
    bronze: [
      {
        name: "IBM",
        link: "https://www.ibm.com",
        description:
          "IBM's goal is to lead in the creation, development, and manufacture of the industry’s most advanced information technologies, including computer systems, software, networking systems, storage devices, and microelectronics.",
        image: require("~/assets/images/sponsors/ibm.png"),
      },
      {
        name: "InfuseAI",
        link: "https://www.infuseai.io",
        description:
          "InfuseAI is a machine learning company whose goal is to equip enterprises with an effortless entrance into the world of artificial intelligence. Top-rated educational and financial institutions in Taiwan use its platform, PrimeHub, to collaborate in multi-user Jupyter environments. PrimeHub paves the way for productivity, collaboration, and innovation across industries.",
        image: require("~/assets/images/sponsors/infuseai.png"),
      },

      {
        name: "GitHub",
        link: "https://github.com",
        description:
          "GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers.",
        image: require("~/assets/images/sponsors/github.png"),
      },
    ],
    core: [
      {
        link: "https://numfocus.org",
        description:
          "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
        image: require("~/assets/images/sponsors/NumFocus.png"),
      },
      {
        link: "https://jupyter.org",
        description:
          "Project Jupyter exists to develop open-source software, open-standards, and services for interactive computing across dozens of programming languages.",
        image: require("~/assets/images/sponsors/jupyter.png"),
      },
    ],
  },
});
