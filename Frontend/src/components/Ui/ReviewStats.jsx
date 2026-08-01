import {
  ShieldCheck,
  MessageCircleMore,
  Sparkles,
  History,
} from "lucide-react";

function ReviewStats({totalReview,AvgRating}) {
  return (
    <section className="h-20 bg-[#F9F8FE]  justify-center flex  border-gray-200  border-t items-center">

    <div className="container  flex w-full flex gap-2  h-10">

      <div className="container border-r border-gray-200   w-[25%] flex gap-3 items-center h-full ">
        <div className="logo  ">
          <ShieldCheck
            color="var(--color-accent-dark)"
            size={30}
            strokeWidth={2}
            />
        </div>
        <div className="box flex flex-col">
          <div className="head flex gap-2">
            <p className="  font-medium text-[var(--color-heading)] font-[var(--font-heading)]">
              Trusted By Custombers
            </p>
          </div>
          <div className="body">
            <p className="font-[var(--font-body) text-gray-600">
              Real Reviews from  Buyers
            </p>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <div className="container  border-r border-gray-200  w-[25%] flex gap-3 items-center h-full ">
        <div className="logo  ">
          <MessageCircleMore
            color="var(--color-accent-dark)"
            size={30}
            strokeWidth={2}
          />
        </div>
        <div className="box flex flex-col">
          <div className="head flex gap-2">
            <p className="  font-medium text-[var(--color-heading)] font-[var(--font-heading)]">
              {totalReview} Total Reviews
            </p>
          </div>
          <div className="body">
            <p className="font-[var(--font-body) text-gray-600">
              Reviews from Real Costomers
            </p>
          </div>
        </div>
        
      </div>
      <div className="container  border-r border-gray-200  w-[25%] flex gap-3 items-center h-full ">
        <div className="logo  ">
          <Sparkles
            color="var(--color-accent-dark)"
            size={30}
            strokeWidth={2}
            />
        </div>
        <div className="box flex flex-col">
          <div className="head flex gap-2">
            <p className="  font-medium text-[var(--color-heading)] font-[var(--font-heading)]">
              {AvgRating} Average Rating
            </p>
          </div>
          <div className="body">
            <p className="font-[var(--font-body) text-gray-600">
             Overall Product Rating
            </p>
          </div>
        </div>
       
      </div>
      <div className="container   w-[25%] flex gap-3 items-center h-full ">
        <div className="logo  ">
          <History
            color="var(--color-accent-dark)"
            size={30}
            strokeWidth={2}
            />
        </div>
        <div className="box flex flex-col">
          <div className="head flex gap-2">
            <p className="  font-medium text-[var(--color-heading)] font-[var(--font-heading)]">
             Recent Reviews
            </p>
          </div>
          <div className="body">
            <p className="font-[var(--font-body) text-gray-600">
             Users reviewed recently
            </p>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
            </section>
  );
}

export default ReviewStats;
