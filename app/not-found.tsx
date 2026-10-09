import Link from "next/link";
import { PageHead } from "@/components/Blocks";

export default function NotFound() {
  return (
    <PageHead title="This page isn't connected" lede="The page you're looking for doesn't exist or has moved.">
      <div className="actions">
        <Link href="/" className="btn">Go to the homepage</Link>
      </div>
    </PageHead>
  );
}
