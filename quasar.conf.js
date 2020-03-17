// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'i18n',
      'axios',
      'stomp',
      'qriously'
    ],

    css: [
      'app.styl',
      'app.sass'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v3',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons',
      'eva-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'ionicons-v4',
      // lang: 'de', // Quasar language
      // all: true, // --- includes everything; for dev only!

      components: [
        'QAvatar',
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnGroup',
        'QBtnDropdown',
        'QBtnToggle',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QCarousel',
        'QCarouselControl',
        'QCarouselSlide',
        'QCheckbox',
        'QChip',
        'QCircularProgress',
        'QColor',
        'QDate',
        'QDialog',
        'QExpansionItem',
        'QHeader',
        'QForm',
        'QFooter',
        'QIcon',
        'QInput',
        'QImg',
        'QKnob',
        'QList',
        'QOptionGroup',
        'QInnerLoading',
        'QInfiniteScroll',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QMarkupTable',
        'QMenu',
        'QPagination',
        'QParallax',
        'QPopupEdit',
        'QPopupProxy',
        'QPullToRefresh',
        'QRadio',
        'QRating',
        'QScrollArea',
        'QSelect',
        'QSeparator',
        'QSlideItem',
        'QSlideTransition',
        'QSlider',
        'QSpace',
        'QSplitter',
        'QSpinnerAudio',
        'QSpinnerBall',
        'QSpinnerBars',
        'QSpinnerComment',
        'QSpinnerCube',
        'QSpinnerDots',
        'QSpinnerFacebook',
        'QSpinnerGears',
        'QSpinnerGrid',
        'QSpinnerHearts',
        'QSpinnerHourglass',
        'QSpinnerInfinity',
        'QSpinnerIos',
        'QSpinnerOval',
        'QSpinnerPie',
        'QSpinnerPuff',
        'QSpinnerRadio',
        'QSpinnerRings',
        'QSpinnerTail',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QToggle',
        'QTable',
        'QTabs',
        'QTab',
        'QTabPanels',
        'QTabPanel',
        'QRouteTab',
        'QTh',
        'QTr',
        'QTd',
        'QTime',
        'QTimeline',
        'QTimelineEntry',
        'QToolbar',
        'QToolbarTitle',
        'QTooltip',
        'QTree',
        'QUploader',
        'QVideo'
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage',
        'SessionStorage'
      ]
    },

    supportIE: true,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish')
          }
        })
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'Shadoof',
        // short_name: 'Shadoof',
        // description: 'Belajar loh',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'belajar-quasar'
      }
    }
  }
}
