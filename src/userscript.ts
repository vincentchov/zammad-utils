interface UserscriptConfig {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  hostname: string;
  sitename: string;
  namespace: string;
  runAt: string;
}

export default {
  id: "zammad-utils",
  name: "Zammad Utils",
  version: "0.1.0",
  description: "A bootstrapped userscript to help with data entry in Zammad.",
  author: "Vincent Chov",
  hostname: "vincentchov.com",
  sitename: "Vincentchov.com",
  namespace: "com.vincentchov",
  runAt: "document-start",
} as UserscriptConfig;
