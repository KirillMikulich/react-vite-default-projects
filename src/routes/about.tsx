import { createRoute } from '@tanstack/react-router';
import ParentRoute from './__root';

const AboutRoute = createRoute({
  getParentRoute: () => ParentRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

export default AboutRoute;
