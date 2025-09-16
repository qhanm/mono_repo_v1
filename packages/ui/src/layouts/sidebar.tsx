import {
  Sidebar,
  SidebarHeader,
  SidebarProvider,
  SidebarContent,
} from "../components/sidebar";

const SidebarLayout = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>SIDEBAR </SidebarHeader>
        <SidebarContent></SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default SidebarLayout;
