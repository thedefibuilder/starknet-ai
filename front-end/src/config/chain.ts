import type ITemplate from '@/interfaces/template';

const chainConfig = {
  name: 'Starknet',
  docs: 'https://docs.defibuilder.com/',
  contractFileExtension: '.cairo',
  templates: [
    {
      name: 'Token',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhZGdlLWNlbnQiPjxwYXRoIGQ9Ik0zLjg1IDguNjJhNCA0IDAgMCAxIDQuNzgtNC43NyA0IDQgMCAwIDEgNi43NCAwIDQgNCAwIDAgMSA0Ljc4IDQuNzggNCA0IDAgMCAxIDAgNi43NCA0IDQgMCAwIDEtNC43NyA0Ljc4IDQgNCAwIDAgMS02Ljc1IDAgNCA0IDAgMCAxLTQuNzgtNC43NyA0IDQgMCAwIDEgMC02Ljc2WiIvPjxwYXRoIGQ9Ik0xMiA3djEwIi8+PHBhdGggZD0iTTE1LjQgMTBhNCA0IDAgMSAwIDAgNCIvPjwvc3ZnPg=='
    },
    {
      name: 'NFT',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJydXNoIj48cGF0aCBkPSJtOS4wNiAxMS45IDguMDctOC4wNmEyLjg1IDIuODUgMCAxIDEgNC4wMyA0LjAzbC04LjA2IDguMDgiLz48cGF0aCBkPSJNNy4wNyAxNC45NGMtMS42NiAwLTMgMS4zNS0zIDMuMDIgMCAxLjMzLTIuNSAxLjUyLTIgMi4wMiAxLjA4IDEuMSAyLjQ5IDIuMDIgNCAyLjAyIDIuMiAwIDQtMS44IDQtNC4wNGEzLjAxIDMuMDEgMCAwIDAtMy0zLjAyeiIvPjwvc3ZnPg=='
    },
    {
      name: 'Edition',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2staGVhcnQiPjxwYXRoIGQ9Ik00IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJIMjB2MjBINi41YTIuNSAyLjUgMCAwIDEgMC01SDIwIi8+PHBhdGggZD0iTTE2IDguMkMxNiA3IDE1IDYgMTMuOCA2Yy0uOCAwLTEuNC4zLTEuOC45LS40LS42LTEtLjktMS44LS45QzkgNiA4IDcgOCA4LjJjMCAuNi4zIDEuMi43IDEuNmgwQzEwIDExLjEgMTIgMTMgMTIgMTNzMi0xLjkgMy4zLTMuMWgwYy40LS40LjctMSAuNy0xLjd6Ii8+PC9zdmc+'
    },
    {
      name: 'Vault',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXZhdWx0Ij48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIi8+PGNpcmNsZSBjeD0iNy41IiBjeT0iNy41IiByPSIuNSIvPjxwYXRoIGQ9Im03LjkgNy45IDIuNyAyLjciLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjxwYXRoIGQ9Im0xMy40IDEwLjYgMi43LTIuNyIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjE2LjUiIHI9Ii41Ii8+PHBhdGggZD0ibTcuOSAxNi4xIDIuNy0yLjciLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iMTYuNSIgcj0iLjUiLz48cGF0aCBkPSJtMTMuNCAxMy40IDIuNyAyLjciLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PC9zdmc+'
    },
    {
      name: 'Marketplace',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0b3JlIj48cGF0aCBkPSJtMiA3IDQuNDEtNC40MUEyIDIgMCAwIDEgNy44MyAyaDguMzRhMiAyIDAgMCAxIDEuNDIuNTlMMjIgNyIvPjxwYXRoIGQ9Ik00IDEydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi04Ii8+PHBhdGggZD0iTTE1IDIydi00YTIgMiAwIDAgMC0yLTJoLTJhMiAyIDAgMCAwLTIgMnY0Ii8+PHBhdGggZD0iTTIgN2gyMCIvPjxwYXRoIGQ9Ik0yMiA3djNhMiAyIDAgMCAxLTIgMnYwYTIuNyAyLjcgMCAwIDEtMS41OS0uNjMuNy43IDAgMCAwLS44MiAwQTIuNyAyLjcgMCAwIDEgMTYgMTJhMi43IDIuNyAwIDAgMS0xLjU5LS42My43LjcgMCAwIDAtLjgyIDBBMi43IDIuNyAwIDAgMSAxMiAxMmEyLjcgMi43IDAgMCAxLTEuNTktLjYzLjcuNyAwIDAgMC0uODIgMEEyLjcgMi43IDAgMCAxIDggMTJhMi43IDIuNyAwIDAgMS0xLjU5LS42My43LjcgMCAwIDAtLjgyIDBBMi43IDIuNyAwIDAgMSA0IDEydjBhMiAyIDAgMCAxLTItMlY3Ii8+PC9zdmc+'
    },
    {
      name: 'Exchange',
      isActive: true,
      iconURL:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvaW5zIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iNiIvPjxwYXRoIGQ9Ik0xOC4wOSAxMC4zN0E2IDYgMCAxIDEgMTAuMzQgMTgiLz48cGF0aCBkPSJNNyA2aDF2NCIvPjxwYXRoIGQ9Im0xNi43MSAxMy44OC43LjcxLTIuODIgMi44MiIvPjwvc3ZnPg=='
    }
  ] as ITemplate[]
};

export default chainConfig;

