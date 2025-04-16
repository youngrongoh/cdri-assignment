import { Form, FormField } from '@/components/Form';
import SearchInput from '@/components/SearchInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SearchDetailPopover from './SearchDetailPopover';
import Select from '@/components/Select';
import Input from '../Input';
import useSearchHistory from '@/lib/hooks/useSearchHistory';

const schema = z
  .object({
    search: z.string().min(1).optional(),
    filter: z
      .object({
        target: z.string(),
        value: z.string().min(1),
      })
      .optional(),
  })
  .refine((data) => !!(data.search || data.filter));

type FormInput = z.input<typeof schema>;

const HISTORY_COUNT_LIMIT = 8;
export default function SearchForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = ({ search, filter }) => {
    const params = (
      !filter ? { q: search } : { target: filter.target, q: filter.value }
    ) as Record<string, string>;
    const searchParams = new URLSearchParams(params);
    navigate('?' + searchParams.toString());
    addHistory(params.q);
  };

  const navigate = useNavigate();
  const { searchHistory, addHistory } = useSearchHistory(HISTORY_COUNT_LIMIT);

  return (
    <Form
      className="w-full flex items-center gap-4"
      {...form}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormField
        name="search"
        render={({ field }) => (
          <SearchInput
            variant="default"
            placeholder="검색어 입력"
            searchHistory={searchHistory}
            {...field}
          />
        )}
      />
      <SearchDetailPopover triggerText="상세검색" submitText="검색하기">
        <fieldset className="w-full flex items-center gap-1">
          <FormField
            name="filter.target"
            render={({ field }) => (
              <Select
                className="w-[100px]"
                variant="underline"
                items={[
                  { label: 'a', value: 'a' },
                  { label: 'b', value: 'b' },
                ]}
                {...field}
              />
            )}
          />
          <FormField
            name="filter.value"
            render={({ field }) => (
              <Input
                className="w-full text-[14px] leading-[22px] pt-2"
                placeholder="검색어 입력"
                variant="underline"
                {...field}
              />
            )}
          />
        </fieldset>
      </SearchDetailPopover>
    </Form>
  );
}
