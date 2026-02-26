// ============================================================
// useNavigation.js  — Custom Hook
//
// WHY A CUSTOM HOOK?
// Logic (what section is active, how to switch) is separated
// from UI (how it looks). This is the senior way:
//   - Components handle DISPLAY
//   - Hooks handle LOGIC
//
// In C# terms: think of this like a ViewModel or a Service
// that your component consumes.
// ============================================================

import { useState } from "react";

export function useNavigation(initialSection = "About") {
  const [activeSection, setActiveSection] = useState(initialSection);

  // You could add more logic here later:
  // - update URL hash (window.location.hash)
  // - track analytics events
  // - animate scroll
  // ...all without touching your components

  return { activeSection, setActiveSection };
}
