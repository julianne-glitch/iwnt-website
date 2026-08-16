import ArticleForm from "@/app/components/admin/ArticleForm";

export default function NewArticlePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Create New Article</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <ArticleForm />
      </div>
    </div>
  );
}
