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
      <div className='p-4 flex items-center sm:justify-between justify-evenly'>
        <div className=' mt-2 h-12 rounded-xl flex gap-4 items-center max-w-full sm-ml-6 sm-mr-6'>
          <DatePickerDemo />
          <Select>
            <SelectTrigger className='max-w-[185px] bg-white'>
              <SelectValue placeholder='Coin' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='max-w-[165px] bg-white'>
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

        <div className='sm:flex mr-4 hidden'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'default'}
                className='bg-indigo-900 rounded-lg sm:w-[215px] lg:ml-0 ml-2 p-6 font-normal mt-1'
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
      <div className='sm:hidden flex justify-center items-center'>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={'default'}
              className='flex  bg-indigo-900 rounded-lg max-w-full ml-6 mr-6'
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
              <DialogTitle className='text-2xl'>Create Transaction</DialogTitle>
            </DialogHeader>

            <TransactionForm />

            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className='ml-6 mt-2 mr-6'>
        <div className='max-w-full overflow-auto'>
          <Table className='table-auto w-full'>
            <TableHeader>
              <TableRow>
                <TableHead className='px-2 py-3 text-left'>TO</TableHead>
                <TableHead className='px-2 py-3 text-left'>
                  TRANSACTION ID
                </TableHead>
                <TableHead className='px-2 py-3 text-left'>DATE</TableHead>
                <TableHead className='px-2 py-3 text-left'>TIME</TableHead>
                <TableHead className='px-2 py-3 text-left'>COIN</TableHead>
                <TableHead className='px-2 py-3 text-left'>AMOUNT</TableHead>
                <TableHead className='px-2 py-3 text-left'>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices &&
                invoices.map(invoice => (
                  <TableRow key={invoice.transactionid}>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.name}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.transactionid}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.date}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.time}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.coin}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
                      {invoice.amount}
                    </TableCell>
                    <TableCell className='px-2 py-3 text-left'>
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
