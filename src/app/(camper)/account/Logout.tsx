'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function Logout() {
  function Logout(){
    console.log('log out')
  }
  return (
    <>
      <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="rounded-xl py-3 px-24 my-3 ">log out</Button>
          </AlertDialogTrigger>
          
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm</AlertDialogTitle>
              <AlertDialogDescription>
                Log Out ออกจากระบบ
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            <AlertDialogFooter>
              <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
              <AlertDialogAction onClick={Logout}>ใช่</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
