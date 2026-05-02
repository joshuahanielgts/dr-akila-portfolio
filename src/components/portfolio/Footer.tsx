export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Dr. K. Akila. All rights reserved.</p>
        <p>
          Department of CSE · SRM Institute of Science and Technology, Vadapalani
        </p>
      </div>
    </footer>
  );
}
