'use client';
import React from 'react';
import { Plus } from 'lucide-react';
import invoices from '@/invoice.json';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DatePickerDemo } from '@/components/ui/datepickerdemo';
import { Button } from '@/components/ui/button';
import TransactionForm from '@/components/ui/form';

const Transactions = () => {
  return (
    <div>
      <div className='p-4 flex items-center justify-between overflow-hidden'>
        <div className='ml-4 mt-2 h-12 rounded-xl flex gap-4 items-center'>
          <DatePickerDemo />
          <Select>
            <SelectTrigger className='w-[170px] bg-white'>
              <SelectValue placeholder='Coin' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-[150px] bg-white'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search input visible only on large screens */}

        <div className='flex mr-4'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'default'}
                className='bg-indigo-900 rounded-lg lg:w-[215px] lg:ml-0 ml-2 h-12 font-normal'
              >
                <div className='flex items-center gap-2'>
                  <span>
                    <Plus />
                  </span>
                  <span className='text-white font-semibold text-lg'>
                    Create Transaction
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
              <DialogHeader>
                <DialogTitle className='text-2xl'>
                  Create Transaction
                </DialogTitle>
              </DialogHeader>

              <TransactionForm />

              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='ml-9 mt-2 mr-9 sm:ml-4 sm:mr-4'>
        <div className='w-full overflow-x-auto'>
          <Table className='table-auto w-full min-w-full sm:min-w-[640px]'>
            <TableHeader>
              <TableRow>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  TO
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  TRANSACTION ID
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  DATE
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  TIME
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  COIN
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  AMOUNT
                </TableHead>
                <TableHead className='whitespace-nowrap px-2 py-3 text-left'>
                  STATUS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices &&
                invoices.map(invoice => (
                  <TableRow key={invoice.transactionid}>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.name}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.transactionid}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.date}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.time}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.coin}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.amount}
                    </TableCell>
                    <TableCell className='whitespace-nowrap px-2 py-3'>
                      {invoice.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
