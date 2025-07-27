import { Icon } from '@iconify/react/dist/iconify.js';

const Footer = () => {
  const footerLinks = [
    {
      label: 'facebook',
      link: 'https://www.facebook.com',
      icon: <Icon icon="ic:round-facebook" width="24" height="24" />,
    },
    {
      label: 'discord',
      link: 'https://www.discord.com',
      icon: <Icon icon="ic:baseline-discord" width="24" height="24" />,
    },
    {
      label: 'github',
      link: 'https://www.github.com',
      icon: <Icon icon="mdi:github" width="24" height="24" />,
    },
    {
      label: 'medium',
      link: 'https://www.medium.com',
      icon: <Icon icon="ri:medium-fill" width="24" height="24" />,
    },
  ];
  return (
    <footer className="w-screen p-4 bg-neonViolet-300">
      <div className="w-full grid sm:grid-cols-[repeat(3,1fr)] place-items-center gap-4">
        <p className="text-sm font-circular-web font-light sm:justify-self-start">
          ©Mythology 2025. Conceptual Design By Jaymi Yam.
        </p>
        <div className="flex gap-2 items-center mjustify-start">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black transition-colors duration-500 hover:text-white ease-in-out"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          className="text-sm font-circular-web sm:justify-self-end underline font-light"
          href="#privacy-policy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
