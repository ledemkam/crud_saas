import {Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import{ createNoten } from "@/lib/action/actionsNoten";

export default function CreatePage() {
  return (
    <Card>
      <form action={createNoten} >
        <CardHeader>
          <CardTitle>Neue Notiz</CardTitle>
          <CardDescription>Ein paar Worte, um es nicht zu vergessen</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Titel</Label>
            <Input placeholder="Titel der Noten" required type="text" name="title" id="title" />
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Beschreibung</Label>
            <Textarea placeholder="Beschreibung deiner Noten" required name="description" id="description"/>
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="completed">Warten | Vollständig</Label>
            <Input className="w-6 cursor-pointer accent-orange-500"  type="checkbox" name="completed" id="completed"/>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white" type="button">
            <Link href="/dashboard/notes">Stornieren</Link>
          </Button>
          <Button className="bg-orange-500 mx-1 my-2 hover:bg-orange-600 text-white" type="submit">Notiz erstellen</Button>

        </CardFooter>
      </form>

    </Card>
  )
}