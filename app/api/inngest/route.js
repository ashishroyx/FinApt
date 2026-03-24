import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";

import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/function";

export const runtime = "nodejs"; // ✅ ADD THIS

export const { GET, POST } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});