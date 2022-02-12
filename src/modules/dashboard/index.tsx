import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CompanyCard from "../../_master/components/companyCard";
import CompanyCardSkeleton from "../../_master/components/companyCardSkeleton";
import BaseLayout from "../../_master/_layout";
import { getManufacturersApi } from "./api";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>({ manufacturers: [], count: 0 });
  const [skip, setSkip] = useState(0);
  const [limit] = useState(8);

  useEffect(() => {
    (async () => {
      let data = await getManufacturersApi(skip, limit, setLoading);
      setResult(data);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    setTimeout(async () => {
      if (result?.manufacturers) {
        let data = await getManufacturersApi(skip + 8, limit, setLoading);
        setSkip(skip + 8);
        setResult({
          manufacturers: result?.manufacturers?.concat(data?.manufacturers),
          count: data?.count,
        });
      }
    }, 500);
  };

  return (
    <>
      <BaseLayout>
        {result === null ? (
          <div className="text-center text-xl w-full my-6">No Data Found</div>
        ) : (
          <>
            <InfiniteScroll
              dataLength={result?.manufacturers?.length}
              next={fetchMoreData}
              hasMore={result?.count > result.manufacturers?.length}
              loader={<></>}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 px-1 pt-2 md:pt-3 md:px-4 pb-[200px]">
                {result?.manufacturers?.map((item: any, index: number) => (
                  <Fragment key={index}>
                    <CompanyCard item={item} />
                  </Fragment>
                ))}

                {loading && (
                  <>
                    {[...Array(8)]?.map((item, index) => (
                      <Fragment key={index}>
                        <CompanyCardSkeleton />
                      </Fragment>
                    ))}
                  </>
                )}
              </div>
            </InfiniteScroll>
          </>
        )}
      </BaseLayout>
    </>
  );
}

export default Dashboard;
