import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-CRC9EFB1B0";

export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category: string, action: string, label: string) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};
