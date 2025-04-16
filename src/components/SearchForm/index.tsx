import { Form, FormField } from '@/components/Form';
import SearchInput from '@/components/SearchInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import SearchDetailPopover from './SearchDetailPopover';
import Select from '@/components/Select';
import Input from '../Input';
import useSearchHistory from '@/lib/hooks/useSearchHistory';
import { useState } from 'react';
import { SearchFormInput, searchFormSchema } from './validation';

const HISTORY_COUNT_LIMIT = 8;

interface Props {
  defaultValue?: {
    search: SearchFormInput['search'];
    target: Exclude<SearchFormInput['filter'], undefined>['target'];
  };
}
const DEFULAT_VALUE = {
  SEARCH: '',
  FILTER_TARGET: 'title',
  FILTER_VALUE: '',
};
const FORM_ID = 'search-form';
export default function SearchForm({ defaultValue }: Props) {
  const [filterOpen, setfilterOpen] = useState(false);
  const handlePopoverOpenChange = (open: boolean) => setfilterOpen(open);

  const form = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      search: defaultValue?.search || DEFULAT_VALUE.SEARCH,
      filter: {
        target: defaultValue?.target || DEFULAT_VALUE.FILTER_TARGET,
        value: DEFULAT_VALUE.FILTER_VALUE,
      },
    },
  });

  const onSubmit: SubmitHandler<SearchFormInput> = ({ search, filter }) => {
    const params = (
      filterOpen
        ? {
            target:
              (filter?.target || defaultValue?.target) ??
              DEFULAT_VALUE.FILTER_TARGET,
            q: filter?.value ?? DEFULAT_VALUE.FILTER_VALUE,
          }
        : { q: search ?? DEFULAT_VALUE.SEARCH }
    ) as Record<string, string>;

    const searchParams = new URLSearchParams(params);
    navigate('?' + searchParams.toString());
    addHistory(params.q);
    setfilterOpen(false);

    if (filterOpen) {
      form.setValue('search', DEFULAT_VALUE.SEARCH);
    } else {
      form.setValue('filter', {
        value: DEFULAT_VALUE.FILTER_VALUE,
        target: DEFULAT_VALUE.FILTER_TARGET,
      });
    }
  };

  const navigate = useNavigate();
  const { searchHistory, addHistory, removeHistory } =
    useSearchHistory(HISTORY_COUNT_LIMIT);

  return (
    <Form
      id={FORM_ID}
      className="w-full flex items-center gap-4"
      {...form}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormField
        control={form.control}
        name="search"
        render={({ field }) => (
          <SearchInput
            variant="default"
            placeholder="검색어 입력"
            searchHistory={searchHistory}
            onHistoryRemove={removeHistory}
            {...field}
          />
        )}
      />
      <SearchDetailPopover
        form={FORM_ID}
        triggerText="상세검색"
        submitText="검색하기"
        open={filterOpen}
        onOpenChange={handlePopoverOpenChange}
      >
        <fieldset className="w-full flex items-center gap-1">
          <FormField
            control={form.control}
            name="filter.target"
            render={({ field }) => (
              <Select
                {...field}
                form={FORM_ID}
                className="basis-[100px] shrink-0"
                variant="underline"
                onValueChange={field.onChange}
                items={[
                  { label: '제목', value: 'title' },
                  { label: '저자명', value: 'person' },
                  { label: '출판사', value: 'publisher' },
                ]}
              />
            )}
          />
          <FormField
            name="filter.value"
            render={({ field }) => (
              <Input
                {...field}
                form={FORM_ID}
                className="w-full text-[14px] leading-[22px] pt-2"
                placeholder="검색어 입력"
                variant="underline"
              />
            )}
          />
        </fieldset>
      </SearchDetailPopover>
    </Form>
  );
}
