import NavHeader from "../components/nav-header";
import TotalsTable from "../components/totals-table";
import TargetTracker from "../components/target-tracker";
import RegionalTotals from "../components/regional-totals";

export default function Home() {
    return (
        <>
            <NavHeader />
            <TargetTracker />
            <TotalsTable />
            <RegionalTotals />
        </>
    );
}
