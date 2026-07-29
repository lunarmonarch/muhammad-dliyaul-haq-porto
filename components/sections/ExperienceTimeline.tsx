"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * Timeline case study format STAR (Situation-Task-Action-Result).
 * Konten & label mengikuti bahasa aktif.
 */
export default function ExperienceTimeline() {
  const { t } = useLanguage();
  const { items, labels } = t.experiencePage;

  return (
    <div className="relative">
      <div
        className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-border md:left-[19px]"
        aria-hidden
      />

      <div className="space-y-14">
        {items.map((item, i) => (
          <div key={item.title} className="relative pl-10 md:pl-14">
            <div className="absolute left-0 top-1.5">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3 }}
                className="block h-8 w-8 rounded-full border-4 border-surface bg-primary md:h-10 md:w-10"
              />
            </div>

            <Reveal delay={0.1}>
              <span className="text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-h3">{item.title}</h3>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-ink/50">{labels.situation}</dt>
                  <dd className="mt-0.5 text-ink/75">{item.situation}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink/50">{labels.task}</dt>
                  <dd className="mt-0.5 text-ink/75">{item.task}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink/50">{labels.action}</dt>
                  <dd className="mt-0.5 text-ink/75">{item.action}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink/50">{labels.result}</dt>
                  <dd className="mt-0.5 font-medium text-ink">{item.result}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
