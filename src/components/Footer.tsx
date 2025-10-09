export function Footer() {
  return (
    <footer className="py-8 border-t-4 border-double border-foreground bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-foreground p-6 bg-background">
          <div className="text-center mb-4">
            <div className="font-display text-xl font-black tracking-tight mb-2">
              PRIYANSHU PANDEY
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] font-serif tracking-widest text-muted-foreground">
              <span>DIGITAL PORTFOLIO</span>
              <span className="w-1 h-1 bg-foreground rounded-full"></span>
              <span>EST. 2025</span>
            </div>
          </div>
          
          <div className="border-t-2 border-foreground pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 font-serif text-xs">
              <p className="text-foreground/60">
                © {new Date().getFullYear()} Priyanshu Pandey • All Rights Reserved
              </p>
              {/* <p className="text-foreground/60">
                Crafted with Dedication and Precision
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
