import Navber from "./components/navber";
import Sidebar from "./components/sidebar";
import Tabs from "./components/singleTab";

function BaseLayout({ children }: any) {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-screen">
          <div className="flex h-full">
            <Sidebar />
            <div className="ml-[70px]">
              <Navber />
              <Tabs />
              {/* Child Going To here!! */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BaseLayout;
