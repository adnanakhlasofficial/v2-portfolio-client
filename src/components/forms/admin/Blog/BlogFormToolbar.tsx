import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBold,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconItalic,
  IconList,
  IconListNumbers,
  IconPhotoUp,
  IconQuote,
  IconSeparatorHorizontal,
  IconStrikethrough,
  IconUnderline,
} from '@tabler/icons-react';
import { Editor } from '@tiptap/react';
import { ChangeEventHandler } from 'react';

interface IProps {
  editor: Editor;
  handleImageUpload: ChangeEventHandler<HTMLInputElement>;
}

export default function BlogFormToolbar({ editor, handleImageUpload }: IProps) {
  return (
    <>
      {/* Toolbar */}
      <div className="border-input bg-muted/40 flex flex-wrap gap-2 rounded-md border p-2">
        {/* Basic formatting */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconBold className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconItalic className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconUnderline className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconStrikethrough className="!h-5 !w-5" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Image upload button */}
        <Button type="button" size="icon" asChild variant="ghost">
          <label>
            <IconPhotoUp className="!h-5 !w-5" />
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </Button>

        {/* Lists / Quotes */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconList className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconListNumbers className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive('blockquote')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconQuote className="!h-5 !w-5" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Headings */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconH1 className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconH2 className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconH3 className="!h-5 !w-5" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Alignment */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={
            editor.isActive({ textAlign: 'left' })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconAlignLeft className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconAlignCenter className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={
            editor.isActive({ textAlign: 'right' })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconAlignRight className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={
            editor.isActive({ textAlign: 'justify' })
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconAlignJustified className="!h-5 !w-5" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Other tools */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="hover:!bg-primary hover:!text-primary-foreground"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <IconSeparatorHorizontal className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            editor.isActive('codeBlock')
              ? 'bg-primary text-primary-foreground'
              : 'hover:!bg-primary hover:!text-primary-foreground'
          }
        >
          <IconCode className="!h-5 !w-5" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Undo / Redo */}
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="hover:!bg-primary hover:!text-primary-foreground"
          onClick={() => editor.chain().focus().undo().run()}
        >
          <IconArrowBackUp className="!h-5 !w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="hover:!bg-primary hover:!text-primary-foreground"
          onClick={() => editor.chain().focus().redo().run()}
        >
          <IconArrowForwardUp className="!h-5 !w-5" />
        </Button>
      </div>
    </>
  );
}
