import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { BlogFormValues } from './AddBlogForm';

interface IProps {
  watch: UseFormWatch<BlogFormValues>;
  setValue: UseFormSetValue<BlogFormValues>;
}

export default function BlogPublishButton({ watch, setValue }: IProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="bg-muted flex rounded-full p-1 text-sm shadow-inner">
        <button
          type="button"
          onClick={() => setValue('published', true)}
          className={`rounded-full px-3 py-1 font-medium transition-colors duration-200 ${
            watch('published')
              ? 'bg-primary text-background'
              : 'text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Publish
        </button>
        <button
          type="button"
          onClick={() => setValue('published', false)}
          className={`rounded-full px-3 py-1 font-medium transition-colors duration-200 ${
            !watch('published')
              ? 'bg-destructive text-background'
              : 'text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Draft
        </button>
      </div>
    </div>
  );
}
