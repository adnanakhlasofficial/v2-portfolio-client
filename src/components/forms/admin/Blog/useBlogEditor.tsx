import Heading from '@tiptap/extension-heading';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { BlogFormValues } from './AddBlogForm';

export default function useBlogEditor(
  watch: UseFormWatch<BlogFormValues>,
  setValue: UseFormSetValue<BlogFormValues>,
) {
  const content = watch('content');
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({ levels: [1, 2, 3] }),
      Placeholder.configure({
        placeholder: 'Write your blog content here...',
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      TextAlign.configure({
        defaultAlignment: 'left',
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
    ],
    content: '<p>Write your blog content here...</p>',
    onUpdate: ({ editor }) => {
      setValue('content', editor.getHTML(), { shouldValidate: true });
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base dark:prose-invert min-h-[200px] w-full rounded-md border border-input bg-background p-3 focus:outline-none',
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return editor;
}
