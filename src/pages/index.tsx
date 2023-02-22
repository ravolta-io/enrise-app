import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useMemo, useState } from "react";

import { APIService } from "@/api/APIService";
import { APP_CONFIG } from "@/constants/app-config.constants";
import { BlockQuote } from "@/components/typography/texts";
import ClipLoader from "react-spinners/ClipLoader";
import Container from "@/components/layout/Container";
import Head from "next/head";
import PageWrapper from "@/components/layout/PageWrapper";
import RotatingImage from "@/components/images/RotatingImage";

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

const Home: React.FC<PageProps> = ({ pageData }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<string>(pageData.quote);
  const [currentImage, setCurrentImage] = useState<string>(
    "/assets/img/ye1.png"
  );

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const res = await APIService.getOne();
      setCurrentQuote(res.quote);
      getRandomImage();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    getNewQuote();
  };

  const getRandomImage = () => {
    const images = [
      "/assets/img/ye1.png",
      "/assets/img/ye2.png",
      "/assets/img/ye3.png",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);

    setCurrentImage(images[randomIndex]);
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
        <Container>
          <section className="flex flex-col items-center justify-center gap-8 h-full p-4">
            <RotatingImage src={currentImage} alt="Kanye West" />
            <BlockQuote
              quoteClass="text-white font-bold"
              quotationClass="text-white/50"
              citeClass="text-white text-2xl font-bold"
              quote={currentQuote}
              author="Kanye West"
            />
            {/* {error && <p>{error}</p>} */}

            <div>
              <button
                className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleRefresh}
              >
                {loading ? (
                  <ClipLoader
                    color={"white"}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Preach!"
                )}
              </button>
            </div>
          </section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Home;
