import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "O doutor é um excelente profissional. Recomendo a todos.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Ana",
    username: "@ana",
    body: "O doutor foi muito atencioso e prestativo. Excelente atendimento.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "João",
    username: "@joao",
    body: "O doutor me ajudou muito com meu problema de saúde. Muito obrigado!",
    img: "https://avatar.vercel.sh/joao",
  },
  {
    name: "Maria",
    username: "@maria",
    body: "O doutor é um profissional incrível. Muito satisfeita com o atendimento.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Fernanda",
    username: "@fernanda",
    body: "O doutor foi muito atencioso e competente. Recomendo!",
    img: "https://avatar.vercel.sh/fernanda",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "O doutor é um excelente médico. Muito satisfeito com o atendimento.",
    img: "https://avatar.vercel.sh/pedro",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MedicTestimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default MedicTestimonials;