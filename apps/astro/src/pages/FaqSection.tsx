import React, { useState } from 'react';
import CirclePlus from '@/src/components/icons/CirclePlus';
import CircleMinus from '@/src/components/icons/CircleMinus';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section id="faq">
      <div>
        <div className="header">
          <h3>
            <span>Pytaj</span>, jakby jutra miało nie być. Odpowiemy!
          </h3>
        </div>
        <ul>
          {faqs.map((faq, idx) => (
            <li key={idx} data-expanded={expanded === idx ? true : undefined}>
              <button type="button" onClick={() => handleToggle(idx)}>
                <strong>{(idx + 1).toString().padStart(2, '0')}</strong>
                <div>
                  <div className="question">
                    <p>{faq.question}</p>
                    <div>
                      {expanded === idx ? (
                        <CircleMinus
                          title="Green circle with minus inside"
                          size="2.4rem"
                          aria-label="Hide Answer"
                          className="icon minus"
                        />
                      ) : (
                        <CirclePlus
                          title="Green circle with plus inside"
                          size="2.4rem"
                          aria-label="Show Answer"
                          className="icon plus"
                        />
                      )}
                    </div>
                  </div>
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqSection;
