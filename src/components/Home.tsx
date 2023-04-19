import ShortenLink from './ShortenLink';
import workingSvg from '../images/illustration-working.svg';
import brandSvg from '../images/icon-brand-recognition.svg';
import detailedSvg from '../images/icon-detailed-records.svg';
import customizbleSvg from '../images/icon-fully-customizable.svg';

const Home = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row my-5 max-shorten mx-auto">
          <div className="col-sm-7 col-sm-push-7">
            <div className="text-sm-start text-center">
              <h1 className="display-2 fw-bold">
                More than just shorter links
              </h1>
              <p className="fs-5 fw-bold">
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-sm-pull-5 justify-content-sm-end justify-content-center">
            <img
              src={workingSvg}
              className="img-fluid"
              alt="Working Illustration"></img>
          </div>
        </div>
      </div>
      <ShortenLink />
      <div className="container-fluid py-5 bg-light">
        <div className="adv-stats mx-auto text-center">
          <h2>Advanced Statistics</h2>
          <p className="text-info">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <div className="row card-row max-shorten mx-auto">
          <div className="col-lg-4">
            <div className="card p-4 bg-white">
              <div className="card-body">
                <img
                  src={brandSvg}
                  className="floating-icon bg-secondary p-2 rounded-circle"
                  alt="Brand Recognition"></img>
                <h3 className="card-title">Brand Recognition</h3>
                <p className="card-text text-info">
                  Boost your brand recognition with each click. Generic links
                  don&apos;t mean a thing. Branded links help instill confidence
                  in your content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 stagger-1">
            <div className="card p-4 bg-white">
              <div className="card-body">
                <img
                  src={detailedSvg}
                  className="floating-icon bg-secondary p-2 rounded-circle"
                  alt="Detailed Records"></img>
                <h3 className="card-title">Detailed Records</h3>
                <p className="card-text text-info">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 stagger-2">
            <div className="card p-4 bg-white">
              <div className="card-body">
                <img
                  src={customizbleSvg}
                  className="floating-icon bg-secondary p-1 rounded-circle"
                  alt="Fully Customizable"></img>
                <h3 className="card-title">Fully Customizable</h3>
                <p className="card-text text-info">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid boost-background bg-secondary">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="mx-auto text-center">
            <h2 className="text-white fw-bold">Boost your links today</h2>
            <p className="pt-4 my-0">
              <button
                type="button"
                className="btn btn-primary rounded-pill text-white">
                Get Started
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
