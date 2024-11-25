import Header from "@/components/common/header";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default SiteLayout