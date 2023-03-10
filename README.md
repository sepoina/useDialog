# useDialog 
[![npm version](https://badge.fury.io/js/@sepoina%2Fusedialog.svg)](https://badge.fury.io/js/@sepoina%2Fusedialog)
![Script size](https://img.badgesize.io/sepoina/useDialog/main/dist/useDialog/useDialog.js?label=Script%20size&color=yellow)

React hooks for view simple Dialog fom javascript<br/>
Ambiente React / mui<br/><br/><br/>

Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm i @sepoina/usedialog

Usage example
-----    

```js
import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useDialog from '@sepoina/usedialog'; // questa libreria

function App() {
  const [RenderDialog, setDialog] = useDialog();
  const [state, setState] = useState('Niente');

  const handle = () => {
    setDialog(
      {
        dialogHeader: 'Scegli qualcosa',
        dialogText: 'Questa è la domanda che ti pongo, cancello?',
        confirmBtt: 'Cancella',
        rejectBtt: 'Annulla',
      },
      (confirm) => setState('Cancella'),
      (reject) => setState('Annulla')
    );
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handle}>
          Apri un dialogo programmatico
        </Button>
      </Stack>
      <h2>
        Hai scelto: <em>{state}</em>
      </h2>
      <RenderDialog />
    </>
  );
}
```

Struttura in ingresso
-----  
```js
{
        dialogHeader: 'Title', 
        dialogText: 'Question',
        confirmBtt: 'Option1',
        rejectBtt: 'Option2'
},
(onConfirm) => { console.log("Option1!")}, 
(onReject) => { console.log("Option2!")}
```

Demo on stackblitz
----
https://stackblitz.com/edit/react-je8n9n-yqc1qy?file=demo.js

[![](https://github.com/sepoina/Gsync/blob/e7ebba614012f4969394c5a374d0d748e81c6cda/this_web/img/buy-me-a-coffee-with-paypal.png?raw=true)](https://www.paypal.com/paypalme/giancarloghigi)
