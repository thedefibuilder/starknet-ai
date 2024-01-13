import React, { Suspense, useReducer, useState } from 'react';

import type IPredefinedPrompt from '@/interfaces/predefined-prompt';
import type ITemplate from '@/interfaces/template';

import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import EReducerState from '@/constants/reducer-state';
import {
  generateContractInitialState,
  generateContractReducer
} from '@/reducers/generate-contract';
import { LlmService } from '@/sdk/llmService.sdk';

const HeaderSection = React.lazy(() => import('@/components/sections/header'));
const TemplatesSection = React.lazy(() => import('@/components/sections/templates'));
const PromptSection = React.lazy(() => import('@/components/sections/prompt'));
const CodeViewerSection = React.lazy(() => import('@/components/sections/code-viewer'));

const chainsName = 'Starknet';
const chainsDocumentationLink = 'https://docs.defibuilder.com/';

const templates: ITemplate[] = [
  {
    name: 'Token',
    isActive: true
  },
  {
    name: 'NFT',
    isActive: true
  },
  {
    name: 'Staking',
    isActive: false
  },
  {
    name: 'Farm',
    isActive: false
  },
  {
    name: 'Marketplace',
    isActive: false
  },
  {
    name: 'Launchpad',
    isActive: false
  }
];

const predefinedPrompts: IPredefinedPrompt[] = [
  {
    id: '65827f546828e956077b7545',
    title: 'ERC20 Token',
    description: 'Token name must be X , with ticket Y and a total supply of 100000.'
  }
];
const smartContractFileExtension = '.cairo';

export default function HomePage() {
  // eslint-disable-next-line unicorn/prefer-array-find
  const activeTemplates = templates.filter((template) => template.isActive);

  const [activeTemplateName, setActiveTemplateName] = useState(activeTemplates[0].name);
  const [prompt, setPrompt] = useState('');

  const [generateContractState, dispatchGenerateContract] = useReducer(
    generateContractReducer,
    generateContractInitialState
  );

  async function initCreation() {
    dispatchGenerateContract({
      state: EReducerState.reset,
      payload: null
    });

    const contractCode = await generateContract();
  }

  async function generateContract() {
    console.log('GENERATING CONTRACT');

    try {
      dispatchGenerateContract({
        state: EReducerState.start,
        payload: null
      });

      const contractCodeResponse = await LlmService.callCairoGeneratorLLM(prompt, 'ERC20');

      if (
        contractCodeResponse === null ||
        contractCodeResponse === undefined ||
        typeof contractCodeResponse !== 'string'
      ) {
        dispatchGenerateContract({
          state: EReducerState.error,
          payload: null
        });

        console.error('ERROR GENERATING CONTRACT', contractCodeResponse);

        return null;
      }

      dispatchGenerateContract({
        state: EReducerState.success,
        payload: contractCodeResponse
      });

      console.log('CONTRACT CODE', contractCodeResponse);

      return contractCodeResponse;
    } catch (error) {
      if (error instanceof Error) {
        dispatchGenerateContract({
          state: EReducerState.error,
          payload: null
        });

        console.error('ERROR GENERATING CONTRACT', error.message);
      }
    }

    return null;
  }

  return (
    <div className='flex w-full max-w-[1140px] flex-col gap-y-5'>
      <Suspense fallback={<Skeleton className='h-40 w-full rounded-3xl md:mt-16' />}>
        <HeaderSection
          chainsName={chainsName}
          chainsDocumentationLink={chainsDocumentationLink}
          className='rounded-3xl border-2 border-border bg-cover py-5 backdrop-blur-md md:mt-16 md:bg-contain md:py-10'
        />
      </Suspense>

      <div className='flex flex-col items-center gap-y-5 rounded-3xl border-2 border-border py-5 backdrop-blur-md md:gap-y-10 md:py-10'>
        <Suspense fallback={<Skeleton className='h-60 w-[95%] rounded-3xl' />}>
          <TemplatesSection
            chainsName={chainsName}
            templates={templates}
            activeTemplateName={activeTemplateName}
            setActiveTemplateName={setActiveTemplateName}
          />
        </Suspense>

        <Suspense fallback={<Skeleton className='h-60 w-[95%] rounded-3xl' />}>
          <div className='flex w-full flex-col items-start'>
            <PromptSection
              chainsName={chainsName}
              predefinedPrompts={predefinedPrompts}
              prompt={prompt}
              setPrompt={setPrompt}
            />

            <div className='mt-5 flex w-full items-center justify-between px-10'>
              <Button disabled={generateContractState.isLoading} onClick={() => initCreation()}>
                {generateContractState.isLoading ? (
                  <div className='flex items-center gap-x-2.5'>
                    <Loader2 className='animate-spin' />
                    <span>Generating Smart Contract</span>
                  </div>
                ) : (
                  <span>Generate Smart Contract</span>
                )}
              </Button>
            </div>
          </div>
        </Suspense>

        <Suspense fallback={<Skeleton className='h-60 w-[95%] rounded-3xl' />}>
          {generateContractState.contractCode && (
            <CodeViewerSection
              chainsName={chainsName}
              smartContractCode={generateContractState.contractCode}
              smartContractFileExtension={smartContractFileExtension}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
}
