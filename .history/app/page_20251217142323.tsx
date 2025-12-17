import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="root-page-element bg-background">
      <Card className="*
        glassmorphism flex flex-cols-1 min-w-150 items-center justify-center">
        <CardHeader className="w-full items-center justify-center text-center">
          <CardTitle>
            Welcome To Goods Tracker
          </CardTitle>
          <CardDescription>
            Track your client owned goods in a centralized and easily accessible way.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-semibold">Returning User? </span>
            Click on the button below to log in
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
