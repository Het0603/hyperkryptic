import { createLovableConfig } from "lovable-agent-playwright-config/config";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "e2e/features/*.feature",
  steps: "e2e/steps/*.ts",
});

export default createLovableConfig({
  testDir,
});
