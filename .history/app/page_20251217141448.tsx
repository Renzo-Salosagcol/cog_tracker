import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="root-page-element bg-background">
      <Card className="*
        glassmorphism flex flex-cols-1 min-w-150">
        <CardHeader>
          <CardTitle>Welcome To Goods Tracker</CardTitle>
          <CardDescription>Track your client owned goods in a centralized and easily accessible way.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
