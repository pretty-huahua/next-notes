import NoteEditor from '@/app/components/NoteEditor'

export default async function EditPage() {
  return <NoteEditor note={null} initialTitle="Untitled" initialBody="" />
}
