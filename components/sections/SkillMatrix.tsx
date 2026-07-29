"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * Skill Matrix — tab filter interaktif, konten mengikuti bahasa aktif.
 */
export default function SkillMatrix() {
  const { t } = useLanguage();
  const skillCategories = t.skillCategories;
  const [active, setActive] = useState(t.about.skillTabAll);
  const tabs = [t.about.skillTabAll, ...skillCategories.map((c) => c.title)];

  const visibleSkills =
    active === t.about.skillTabAll
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.title === active)?.skills ?? [];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === tab
                ? "bg-primary text-white"
                : "bg-white text-ink/60 border border-border hover:border-primary-light"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-6 flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {visibleSkills.map((skill) => (
            <motion.div
              key={skill}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="default">{skill}</Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
