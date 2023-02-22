import { BlockQuote, Paragraph } from "@/components/typography/texts";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { APIService } from "@/api/APIService";
import { APP_CONFIG } from "@/constants/app-config.constants";
import Head from "next/head";
import { Heading1 } from "@/components/typography/headings";
import PageWrapper from "@/components/layout/PageWrapper";
import { useState } from "react";

interface PageProps {
  pageData: {
    quote: string;
  };
  error: string | false;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const res = await APIService.getOne();

    return {
      props: {
        pageData: {
          quote: res.quote,
        },
        error: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pageData: {
          quote: null,
        },
        error: JSON.stringify(error),
      },
    };
  }
};

const Home: React.FC<PageProps> = ({ pageData, error }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<string>(pageData.quote);

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const res = await APIService.getOne();
      setCurrentQuote(res.quote);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    getNewQuote();
  };

  return (
    <>
      <Head>
        <title>{APP_CONFIG.appName}</title>
        <meta name="description" content={APP_CONFIG.appDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <section className="bg-slate-200 p-20 flex flex-col items-center justify-center gap-8 my-20 w-[800px]">
          <Heading1>{APP_CONFIG.appName}</Heading1>

          <BlockQuote quote={currentQuote} author="Kanye West" />
          {/* {error && <p>{error}</p>} */}

          <div>
            <button
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRefresh}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Home;
