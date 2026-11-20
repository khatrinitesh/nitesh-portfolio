import { BrowserRouter, Route, Routes } from "react-router";

// Layout
import DocsLayout from "./components/layout/DocsLayout";

// Pages
import ComponentShowcasePage from "./pages/ComponentShowcasePage";
import IntroductionPage from "./pages/IntroductionPage";
import ThreeDCardPage from "./pages/ThreeDCardPage";
import MoreComponentsPage from "./pages/MoreComponentsPage";

// Temporary page for components not yet implemented
const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="text-sm text-gray-500">
        Component documentation coming soon.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DocsLayout />}>
          {/* Getting Started */}
          <Route index element={<IntroductionPage />} />

          <Route
            path="installation"
            element={<PlaceholderPage title="Installation" />}
          />

          {/* Components */}
          <Route
            path="components/3d-card"
            element={<ThreeDCardPage />}
          />

          <Route
            path="components/accordion"
            element={<ComponentShowcasePage component="accordion" />}
          />

          <Route
            path="components/alert"
            element={<ComponentShowcasePage component="alert" />}
          />

          <Route
            path="components/button"
            element={<ComponentShowcasePage component="button" />}
          />

          <Route
            path="components/card"
            element={<ComponentShowcasePage component="card" />}
          />

          <Route
            path="components/animated-icons"
            element={<ComponentShowcasePage component="animated-icons" />}
          />

          <Route
            path="components/animated-search"
            element={<ComponentShowcasePage component="animated-search" />}
          />

          <Route
            path="components/arrow-icons"
            element={<ComponentShowcasePage component="arrow-icons" />}
          />

          <Route
            path="components/aspect-ratio"
            element={<ComponentShowcasePage component="aspect-ratio" />}
          />

          <Route
            path="components/aurora-background"
            element={<ComponentShowcasePage component="aurora-background" />}
          />

          <Route
            path="components/autocomplete"
            element={<ComponentShowcasePage component="autocomplete" />}
          />

          <Route
            path="components/avatar"
            element={<ComponentShowcasePage component="avatar" />}
          />

          <Route path="components/background-beams-with-collision" element={<ComponentShowcasePage component="background-beams-with-collision" />} />
          <Route path="components/background-boxes" element={<ComponentShowcasePage component="background-boxes" />} />
          <Route path="components/background-lines" element={<ComponentShowcasePage component="background-lines" />} />
          <Route path="components/banner" element={<ComponentShowcasePage component="banner" />} />
          <Route path="components/bento-grid" element={<ComponentShowcasePage component="bento-grid" />} />
          <Route path="components/big-header" element={<ComponentShowcasePage component="big-header" />} />
          <Route path="components/black-and-white-image" element={<ComponentShowcasePage component="black-and-white-image" />} />
          <Route path="components/block-buttons" element={<ComponentShowcasePage component="block-buttons" />} />
          <Route path="components/blog-layout" element={<ComponentShowcasePage component="blog-layout" />} />
          <Route path="components/blur-background-image" element={<ComponentShowcasePage component="blur-background-image" />} />
          <Route path="components/body-text" element={<ComponentShowcasePage component="body-text" />} />
          <Route path="components/border-around-image" element={<ComponentShowcasePage component="border-around-image" />} />
          <Route path="components/border-frame" element={<ComponentShowcasePage component="border-frame" />} />
          <Route path="components/bottom-border-nav-links" element={<ComponentShowcasePage component="bottom-border-nav-links" />} />
          <Route path="components/bottom-navigation" element={<ComponentShowcasePage component="bottom-navigation" />} />
          <Route path="components/breadcrumbs" element={<ComponentShowcasePage component="breadcrumbs" />} />
          <Route path="components/browser-window" element={<ComponentShowcasePage component="browser-window" />} />
          <Route path="components/bullet-color" element={<ComponentShowcasePage component="bullet-color" />} />
          <Route path="components/bullet-list" element={<ComponentShowcasePage component="bullet-list" />} />
          <Route path="components/button-group" element={<ComponentShowcasePage component="button-group" />} />
          <Route path="components/button-on-image" element={<ComponentShowcasePage component="button-on-image" />} />

          <Route
            path="components/tabs"
            element={<ComponentShowcasePage component="tabs" />}
          />

          <Route
            path="components/vertical-tabs"
            element={<ComponentShowcasePage component="vertical-tabs" />}
          />

          <Route path="components/:slug" element={<MoreComponentsPage />} />

          {/* Not Found */}
          <Route
            path="*"
            element={<PlaceholderPage title="404 - Page Not Found" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;