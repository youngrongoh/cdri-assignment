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
import {
  FILTER_TARGET_OPTIONS,
  HISTORY_COUNT_LIMIT,
  SEARCH_FORM_DEFULAT_VALUE,
  SEARCH_FORM_ID,
} from './constants';

interface Props {
  defaultValue?: {
    search: SearchFormInput['search'];
    target: Exclude<SearchFormInput['filter'], undefined>['target'];
  };
}

export default function SearchForm({ defaultValue }: Props) {
  const navigate = useNavigate();

  const [filterOpen, setfilterOpen] = useState(false);
  const handlePopoverOpenChange = (open: boolean) => setfilterOpen(open);

  const form = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      search: defaultValue?.search || SEARCH_FORM_DEFULAT_VALUE.SEARCH,
      filter: {
        target: defaultValue?.target || SEARCH_FORM_DEFULAT_VALUE.FILTER_TARGET,
        value: SEARCH_FORM_DEFULAT_VALUE.FILTER_VALUE,
      },
    },
  });

  const onSubmit: SubmitHandler<SearchFormInput> = ({ search, filter }) => {
    let params: Record<string, string>;
    if (filterOpen) {
      params = {
        target: filter?.target ?? SEARCH_FORM_DEFULAT_VALUE.FILTER_TARGET,
        q: filter?.value ?? SEARCH_FORM_DEFULAT_VALUE.FILTER_VALUE,
      };

      form.setValue('search', SEARCH_FORM_DEFULAT_VALUE.SEARCH);
    } else {
      params = { q: search ?? SEARCH_FORM_DEFULAT_VALUE.SEARCH };

      form.setValue('filter', {
        value: SEARCH_FORM_DEFULAT_VALUE.FILTER_VALUE,
        target: SEARCH_FORM_DEFULAT_VALUE.FILTER_TARGET,
      });
    }

    const searchParams = new URLSearchParams(params);
    navigate('?' + searchParams.toString());
    addHistory(params.q);
    setfilterOpen(false);
  };

  const { searchHistory, addHistory, removeHistory } =
    useSearchHistory(HISTORY_COUNT_LIMIT);

  return (
    <Form
      id={SEARCH_FORM_ID}
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
        form={SEARCH_FORM_ID}
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
                form={SEARCH_FORM_ID}
                className="basis-[100px] shrink-0"
                variant="underline"
                onValueChange={field.onChange}
                items={FILTER_TARGET_OPTIONS}
              />
            )}
          />
          <FormField
            name="filter.value"
            render={({ field }) => (
              <Input
                {...field}
                form={SEARCH_FORM_ID}
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
