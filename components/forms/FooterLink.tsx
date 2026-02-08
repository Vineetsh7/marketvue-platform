import Link from "next/link";
import { cn } from "@/lib/utils";

const FooterLink = ({
  text,
  linkText,
  href,
  className,
}: FooterLinkProps) => {
  return (
    <p
      className={cn(
        "text-center text-sm text-muted-foreground",
        className
      )}
    >
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default FooterLink;
