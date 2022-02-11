import { useEffect, useState } from "react";
import CompanyCard from "../../_master/components/companyCard";
import CompanyCardSkeleton from "../../_master/components/companyCardSkeleton";
import BaseLayout from "../../_master/_layout";
import { getManufacturersApi } from "./api";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [manufacturers, setManufacturers] = useState<Array<any> | null>([]);

  useEffect(() => {
    getManufacturersApi(setManufacturers, setLoading);
  }, []);

  return (
    <>
      <BaseLayout>
        <div className="grid grid-cols-4 p-4">
          {manufacturers === null ? (
            <div className="text-center text-xl col-span-4">No Data Found</div>
          ) : (
            <>
              {!loading ? (
                <>
                  {manufacturers?.map((item, index) => (
                    <CompanyCard item={item} />
                  ))}
                </>
              ) : (
                <>
                  {[...Array(8)]?.map((item, index) => (
                    <CompanyCardSkeleton />
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </BaseLayout>
    </>
  );
}

export default Dashboard;
