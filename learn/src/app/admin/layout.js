import AdminContent from "@/components/AdminContent";

export default function AdminLayout({ children }) {
  return (
    <section>
      <AdminContent />
      {children}
    </section>
  );
}
