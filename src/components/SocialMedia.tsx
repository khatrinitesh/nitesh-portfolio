import { SocialIcons } from "../constants/icon";
import { SocialLinks } from "../constants/social";

const SocialMedia = () => {
  return (
    <div className="flex gap-6 justify-center items-center mt-6">
      {(Object.keys(SocialLinks) as Array<keyof typeof SocialLinks>).map(
        (key) => {
          const Icon = SocialIcons[key];
          return (
            <a
              key={key}
              href={SocialLinks[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition"
            >
              <Icon size={28} />
            </a>
          );
        },
      )}
    </div>
  );
};

export default SocialMedia;
