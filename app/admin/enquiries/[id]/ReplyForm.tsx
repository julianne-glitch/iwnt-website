"use client";

import { useState } from "react";
import { sendEnquiryReply } from "@/app/actions/email";

export default function ReplyForm({ enquiryId, status }: { enquiryId: string, status: string }) {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (status === "REPLIED") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mt-6">
        <h3 className="font-semibold mb-1">Reply Sent</h3>
        <p className="text-sm">This enquiry has already been replied to.</p>
      </div>
    );
  }

  const handleSend = async () => {
    if (!message.trim()) {
      setFeedback({ type: "error", text: "Message cannot be empty." });
      return;
    }

    setIsSending(true);
    setFeedback(null);

    const result = await sendEnquiryReply(enquiryId, message);

    if (result.success) {
      setFeedback({ type: "success", text: "Reply sent successfully!" });
      setMessage("");
    } else {
      setFeedback({ type: "error", text: result.error || "Failed to send reply." });
    }

    setIsSending(false);
  };

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Reply to Enquiry</h3>
      
      <div className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your reply here..."
          rows={6}
          className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-slate-900 p-3 border"
          disabled={isSending || status === "REPLIED"}
        />

        {feedback && (
          <div className={`p-3 rounded-lg text-sm ${feedback.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
            {feedback.text}
          </div>
        )}

        <button
          onClick={handleSend}
          disabled={isSending || status === "REPLIED" || !message.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
        >
          {isSending ? "Sending..." : "Send Reply"}
        </button>
      </div>
    </div>
  );
}
