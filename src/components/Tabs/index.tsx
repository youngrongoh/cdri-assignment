import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';
import {
  tabs,
  useTabsVariants,
  Variants,
  TabsVariantsProvider,
} from './variants';

const { root, list, trigger, content } = tabs();

function Tabs({
  className,
  variant,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root> & Variants) {
  return (
    <TabsVariantsProvider value={{ variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(root({ variant, className }))}
        {...props}
      />
    </TabsVariantsProvider>
  );
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  const { variant } = useTabsVariants();
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={list({ variant, className })}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = useTabsVariants();
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={trigger({ variant, className })}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  const { variant } = useTabsVariants();
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={content({ variant, className })}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
