

export const getProjectId = () => {
    const projectId = process.env.SANITY_PROJECT_ID;
    const defaultValue = 'vp4m23g3';

    if (!projectId) {
        console.warn('\x1b[33m%s\x1b[0m', "The `SANITY_PROJECT_ID` environment variable is required! Using default value.");
    }

    return projectId ?? defaultValue;
}

/**
 * Global declaration of the domain for the application.
 * This constant is used for constructing full URLs and determining external links.
 * @constant
 * @type {string}
 */
export const DOMAIN: string = "https://kryptonum.eu";

/**
 * The domain used for preview deployments.
 * This constant is utilized to generate URLs for preview environments,
 * allowing content to be reviewed before it's published to the main site.
 * @constant
 * @type {string}
 */
export const PREVIEW_DEPLOYMENT_DOMAIN: string = process.env.SANITY_STUDIO_PREVIEW_DOMAIN ?? "";

