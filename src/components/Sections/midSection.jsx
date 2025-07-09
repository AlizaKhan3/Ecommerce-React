import MidCard from "./midCard"

const MidSection = () => {
  return (
    <div className="container gap-4 grid grid-cols-1 md:grid-cols-2">
      <MidCard title="Free & Fast Delivery" description="Get your orders delivered quickly and safely, anywhere in Pakistan." />
      <MidCard title="24/7 Customer Support" description="Our support team is available round the clock to help you with your queries." />
      <MidCard title="Secure Payments" description="Your transactions are protected with industry-leading payment security." />
      <MidCard title="Easy Returns & Refunds" description="Hassle-free returns within 7 days if you’re not satisfied with your purchase." />
    </div>
  )
}

export default MidSection
