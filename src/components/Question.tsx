import Accordion from "./Accordion";

const Questions = () => {
  return (
    <div className="Container">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <p className="title">Got Questions?</p>
          <p className="title_section">Frequently Asked Questions</p>
        </div>
        <div className="flex flex-col gap-6">
          <Accordion
            title="What services does your company provide?"
            answer="We specialize in cybersecurity solutions, including penetration
                testing, security assessments, compliance support, and secure
                code training to help businesses strengthen their defenses."
          />
          <Accordion
            title="Who can benefit from your services?"
            answer="Our services are designed for businesses of all sizes, from
                startups to enterprises, looking to enhance their security
                posture and protect against cyber threats."
          />
          <Accordion
            title="How do you ensure the security of client data?"
            answer="We follow industry best practices, strict confidentiality
                policies, and secure methodologies to protect client information
                throughout our engagements."
          />
          <Accordion
            title="Do you offer customized security solutions?"
            answer="Yes, we tailor our services to meet specific business needs,
                providing personalized security strategies and recommendations."
          />
          <Accordion
            title="How can we get started with your services?"
            answer="Simply reach out to us through our contact page, and our team
                will guide you through the next steps based on your security
                requirements."
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
