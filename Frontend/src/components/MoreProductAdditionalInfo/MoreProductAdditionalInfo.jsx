import {
  Info,
  Star,
  ShieldCheck,
  UserRound,
  MessageCircle,
  Clock3,
  Flag,
} from "lucide-react";

const items = [
  {
    icon: Star,
    title: "About Reviews",
    description:
      "Customer reviews are collected from verified purchases and real users. Reviews are published after moderation to ensure authenticity.",
  },
  {
    icon: ShieldCheck,
    title: "How Ratings Work",
    description:
      'Ratings are based on a 5-star scale where 5 means "Excellent" and 1 means "Very Poor". The overall rating is an average of all customer ratings.',
  },
  {
    icon: UserRound,
    title: "Verified Purchases",
    description:
      'Reviews labeled as "Verified Purchase" are from customers who have purchased this product from our store.',
  },
  {
    icon: MessageCircle,
    title: "Review Guidelines",
    description:
      "Reviews should be helpful and relevant. Please avoid spam, offensive language, or content that violates our community guidelines.",
  },
  {
    icon: Clock3,
    title: "Review Updates",
    description:
      "You can edit your review within 30 days of submission. After that, it will be locked for maintaining review integrity.",
  },
  {
    icon: Flag,
    title: "Report a Review",
    description:
      "If you find a review that violates our guidelines, please report it. Our team will review and take appropriate action.",
  },
];

export default function AdditionalInformation() {
  return (
    <section className=" max-w-6xl h-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-10 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <Info size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Additional Information
          </h2>

          <p className="mt-1 text-slate-500">
            Details about reviews and ratings for this product.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                flex gap-5 p-8
                border-slate-200
                ${
                  index % 2 === 0
                    ? "md:border-r"
                    : ""
                }
                ${
                  index < 4
                    ? "border-b"
                    : ""
                }
              `}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Icon size={28} strokeWidth={2} />
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-start gap-4 rounded-2xl bg-indigo-50 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-600">
          <Info size={22} />
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">
            Have questions about a review?
          </h4>

          <p className="text-slate-600">
            Contact our support team at{" "}
            <a
              href="mailto:support@example.com"
              className="font-medium text-indigo-600 hover:underline"
            >
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}